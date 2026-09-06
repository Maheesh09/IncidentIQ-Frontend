export type AuthTokenProvider = () => string | null | undefined | Promise<string | null | undefined>;

export type ApiRequestOptions = Omit<RequestInit, "body" | "headers"> & {
  body?: BodyInit | object | null;
  headers?: HeadersInit;
  query?: Record<string, string | number | boolean | null | undefined>;
  skipAuth?: boolean;
};

export type ApiErrorBody = {
  message?: string;
  error?: string;
  code?: string;
  details?: unknown;
};

export class ApiError extends Error {
  readonly status: number;
  readonly code?: string;
  readonly details?: unknown;

  constructor(status: number, body: ApiErrorBody | string | null) {
    const message = typeof body === "string" ? body : body?.message ?? body?.error ?? `Request failed with status ${status}`;
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = typeof body === "string" ? undefined : body?.code;
    this.details = typeof body === "string" ? undefined : body?.details;
  }
}

let authTokenProvider: AuthTokenProvider | undefined;

export function setAuthTokenProvider(provider: AuthTokenProvider | undefined) {
  authTokenProvider = provider;
}

function getBaseUrl() {
  return (import.meta.env.VITE_API_BASE_URL ?? "/api").replace(/\/$/, "");
}

function buildUrl(path: string, query?: ApiRequestOptions["query"]) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = new URL(`${getBaseUrl()}${normalizedPath}`, window.location.origin);

  Object.entries(query ?? {}).forEach(([key, value]) => {
    if (value !== null && value !== undefined) url.searchParams.set(key, String(value));
  });

  return url;
}

async function parseBody(response: Response): Promise<unknown> {
  if (response.status === 204) return null;
  const contentType = response.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) return response.json();
  return response.text();
}

export async function apiFetch<TResponse>(path: string, options: ApiRequestOptions = {}): Promise<TResponse> {
  const { body, headers, query, skipAuth, ...requestInit } = options;
  const requestHeaders = new Headers(headers);
  let requestBody: BodyInit | undefined;

  if (body !== null && body !== undefined) {
    if (typeof body === "object" && !(body instanceof Blob) && !(body instanceof FormData) && !(body instanceof URLSearchParams)) {
      requestBody = JSON.stringify(body);
      if (!requestHeaders.has("content-type")) requestHeaders.set("content-type", "application/json");
    } else {
      requestBody = body as BodyInit;
    }
  }

  if (!skipAuth && authTokenProvider) {
    const token = await authTokenProvider();
    if (token) requestHeaders.set("authorization", `Bearer ${token}`);
  }

  const response = await fetch(buildUrl(path, query), {
    ...requestInit,
    body: requestBody,
    headers: requestHeaders,
  });
  const responseBody = await parseBody(response);

  if (!response.ok) {
    throw new ApiError(response.status, responseBody as ApiErrorBody | string | null);
  }

  return responseBody as TResponse;
}

export const api = {
  fetch: apiFetch,
  get: <TResponse>(path: string, options?: Omit<ApiRequestOptions, "method" | "body">) =>
    apiFetch<TResponse>(path, { ...options, method: "GET" }),
  post: <TResponse>(path: string, body?: unknown, options?: Omit<ApiRequestOptions, "method" | "body">) =>
    apiFetch<TResponse>(path, { ...options, body, method: "POST" }),
  put: <TResponse>(path: string, body?: unknown, options?: Omit<ApiRequestOptions, "method" | "body">) =>
    apiFetch<TResponse>(path, { ...options, body, method: "PUT" }),
  patch: <TResponse>(path: string, body?: unknown, options?: Omit<ApiRequestOptions, "method" | "body">) =>
    apiFetch<TResponse>(path, { ...options, body, method: "PATCH" }),
  delete: <TResponse>(path: string, options?: Omit<ApiRequestOptions, "method" | "body">) =>
    apiFetch<TResponse>(path, { ...options, method: "DELETE" }),
};

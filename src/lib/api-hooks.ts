import {
  useMutation,
  useQuery,
  type UseMutationOptions,
  type UseQueryOptions,
} from "@tanstack/react-query";

import { api, type ApiRequestOptions } from "./api";

type ApiQueryOptions<TData> = Omit<UseQueryOptions<TData>, "queryKey" | "queryFn"> & {
  path: string;
  queryKey: readonly unknown[];
  request?: Omit<ApiRequestOptions, "method" | "body">;
};

export function useApiQuery<TData>({ path, queryKey, request, ...options }: ApiQueryOptions<TData>) {
  return useQuery({
    ...options,
    queryKey,
    queryFn: () => api.get<TData>(path, request),
  });
}

type ApiMutationOptions<TData, TVariables> = Omit<
  UseMutationOptions<TData, Error, TVariables>,
  "mutationFn"
> & {
  path: string;
  method?: "POST" | "PUT" | "PATCH" | "DELETE";
  request?: Omit<ApiRequestOptions, "method" | "body">;
};

export function useApiMutation<TData, TVariables = unknown>({
  path,
  method = "POST",
  request,
  ...options
}: ApiMutationOptions<TData, TVariables>) {
  return useMutation({
    ...options,
    mutationFn: (variables: TVariables) =>
      api.fetch<TData>(path, {
        ...request,
        body: method === "DELETE" ? undefined : variables,
        method,
      }),
  });
}

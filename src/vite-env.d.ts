/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Backend base URL, e.g. https://api.example.com. Defaults to "/api". */
  readonly VITE_API_BASE_URL?: string;

  /** Firebase web app config (public identifiers). See .env.example. */
  readonly VITE_FIREBASE_API_KEY?: string;
  readonly VITE_FIREBASE_AUTH_DOMAIN?: string;
  readonly VITE_FIREBASE_PROJECT_ID?: string;
  readonly VITE_FIREBASE_APP_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

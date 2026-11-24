import { getApp, getApps, initializeApp, type FirebaseOptions } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";

const REQUIRED_ENV = [
  "VITE_FIREBASE_API_KEY",
  "VITE_FIREBASE_AUTH_DOMAIN",
  "VITE_FIREBASE_PROJECT_ID",
  "VITE_FIREBASE_APP_ID",
] as const;

type FirebaseEnvName = (typeof REQUIRED_ENV)[number];
type FirebaseEnv = Partial<Record<FirebaseEnvName, string | undefined>>;

/** Thrown when one or more Firebase web config variables are not set. */
export class FirebaseConfigError extends Error {
  readonly missing: readonly FirebaseEnvName[];

  constructor(missing: readonly FirebaseEnvName[]) {
    super(
      `Firebase is not configured. Missing environment variable(s): ${missing.join(", ")}. ` +
        "Copy .env.example to .env.local and fill them in.",
    );
    this.name = "FirebaseConfigError";
    this.missing = missing;
  }
}

/**
 * Build the Firebase web config from Vite env variables.
 * Throws FirebaseConfigError naming every variable that is missing or blank.
 */
export function readFirebaseConfig(env: FirebaseEnv = import.meta.env): FirebaseOptions {
  const value = (name: FirebaseEnvName): string => env[name]?.trim() ?? "";

  const missing = REQUIRED_ENV.filter((name) => value(name) === "");
  if (missing.length > 0) throw new FirebaseConfigError(missing);

  return {
    apiKey: value("VITE_FIREBASE_API_KEY"),
    authDomain: value("VITE_FIREBASE_AUTH_DOMAIN"),
    projectId: value("VITE_FIREBASE_PROJECT_ID"),
    appId: value("VITE_FIREBASE_APP_ID"),
  };
}

let auth: Auth | null = null;

/**
 * Firebase Auth for the browser. Returns null during SSR, so server rendering
 * never initialises Firebase. The app is initialised once, on first use.
 */
export function getFirebaseAuth(): Auth | null {
  if (typeof window === "undefined") return null;
  if (auth) return auth;

  const app = getApps().length > 0 ? getApp() : initializeApp(readFirebaseConfig());
  auth = getAuth(app);
  return auth;
}

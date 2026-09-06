import { createFileRoute } from "@tanstack/react-router";
import LoginPage from "@/pages/login.jsx";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — IncidentIQ" },
      { name: "description", content: "Access your IncidentIQ war rooms and live causal diagnostics." },
      { property: "og:title", content: "Sign in — IncidentIQ" },
      { property: "og:description", content: "Access your IncidentIQ war rooms and live causal diagnostics." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <LoginPage />;
}

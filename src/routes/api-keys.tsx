import { createFileRoute } from "@tanstack/react-router";
import ApiKeysPage from "@/pages/api-keys.jsx";

export const Route = createFileRoute("/api-keys")({
  head: () => ({
    meta: [
      { title: "API Keys — IncidentIQ" },
      { name: "description", content: "Machine credentials for telemetry ingestion, CI/CD webhooks and RCA triggers." },
      { property: "og:title", content: "API Keys — IncidentIQ" },
      { property: "og:description", content: "Machine credentials for telemetry ingestion, CI/CD webhooks and RCA triggers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <ApiKeysPage />;
}

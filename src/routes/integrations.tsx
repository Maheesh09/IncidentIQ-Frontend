import { createFileRoute } from "@tanstack/react-router";
import IntegrationsPage from "@/pages/integrations.jsx";

export const Route = createFileRoute("/integrations")({
  head: () => ({
    meta: [
      { title: "Integrations — IncidentIQ" },
      { name: "description", content: "Manage telemetry ingestion pipelines, alert webhooks and deployment correlation." },
      { property: "og:title", content: "Integrations — IncidentIQ" },
      { property: "og:description", content: "Manage telemetry ingestion pipelines, alert webhooks and deployment correlation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <IntegrationsPage />;
}

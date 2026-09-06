import { createFileRoute } from "@tanstack/react-router";
import IncidentsPage from "@/pages/incidents.jsx";

export const Route = createFileRoute("/incidents/")({
  head: () => ({
    meta: [
      { title: "Incidents — IncidentIQ" },
      { name: "description", content: "Live causal analysis pipeline and automated triage across production clusters." },
      { property: "og:title", content: "Incidents — IncidentIQ" },
      { property: "og:description", content: "Live causal analysis pipeline and automated triage across production clusters." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <IncidentsPage />;
}

import { createFileRoute } from "@tanstack/react-router";
import IncidentDetailPage from "@/pages/incident-detail.jsx";

export const Route = createFileRoute("/incidents/$incidentId")({
  head: () => ({
    meta: [
      { title: "Incident Root Cause Analysis — IncidentIQ" },
      { name: "description", content: "Verified root cause analysis for a production incident." },
      { property: "og:title", content: "Incident Root Cause Analysis — IncidentIQ" },
      { property: "og:description", content: "Verified root cause analysis for a production incident." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const { incidentId } = Route.useParams();
  return <IncidentDetailPage incidentId={incidentId} />;
}
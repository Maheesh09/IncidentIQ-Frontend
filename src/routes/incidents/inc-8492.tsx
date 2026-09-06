import { createFileRoute } from "@tanstack/react-router";
import IncidentDetailPage from "@/pages/incident-detail.jsx";

export const Route = createFileRoute("/incidents/inc-8492")({
  head: () => ({
    meta: [
      { title: "INC-8492 Root Cause Analysis — IncidentIQ" },
      { name: "description", content: "Verified root cause analysis for the checkout-service HTTP 504 incident." },
      { property: "og:title", content: "INC-8492 Root Cause Analysis — IncidentIQ" },
      { property: "og:description", content: "Verified root cause analysis for the checkout-service HTTP 504 incident." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <IncidentDetailPage />;
}

import { createFileRoute } from "@tanstack/react-router";
import SystemStatesPage from "@/pages/system-states.jsx";

export const Route = createFileRoute("/system-states")({
  head: () => ({
    meta: [
      { title: "System States — IncidentIQ" },
      { name: "description", content: "Empty, error, degraded and processing views across IncidentIQ dashboards." },
      { property: "og:title", content: "System States — IncidentIQ" },
      { property: "og:description", content: "Empty, error, degraded and processing views across IncidentIQ dashboards." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <SystemStatesPage />;
}

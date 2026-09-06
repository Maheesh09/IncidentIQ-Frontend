import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/pages/landing.jsx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IncidentIQ — Root cause in under two minutes" },
      { name: "description", content: "AI incident correlation that ranks hypotheses with verified evidence the moment an alert fires." },
      { property: "og:title", content: "IncidentIQ — Root cause in under two minutes" },
      { property: "og:description", content: "AI incident correlation that ranks hypotheses with verified evidence the moment an alert fires." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <LandingPage />;
}

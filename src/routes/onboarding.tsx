import { createFileRoute } from "@tanstack/react-router";
import OnboardingPage from "@/pages/onboarding.jsx";

export const Route = createFileRoute("/onboarding")({
  head: () => ({
    meta: [
      { title: "Connect Google Cloud — IncidentIQ" },
      { name: "description", content: "Link your GCP project with Workload Identity Federation and zero long-lived keys." },
      { property: "og:title", content: "Connect Google Cloud — IncidentIQ" },
      { property: "og:description", content: "Link your GCP project with Workload Identity Federation and zero long-lived keys." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <OnboardingPage />;
}

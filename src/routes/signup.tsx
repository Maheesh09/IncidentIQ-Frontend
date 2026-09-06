import { createFileRoute } from "@tanstack/react-router";
import SignupPage from "@/pages/signup.jsx";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create your IncidentIQ account" },
      { name: "description", content: "Start analyzing incidents with zero agents and zero stored credentials." },
      { property: "og:title", content: "Create your IncidentIQ account" },
      { property: "og:description", content: "Start analyzing incidents with zero agents and zero stored credentials." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <SignupPage />;
}

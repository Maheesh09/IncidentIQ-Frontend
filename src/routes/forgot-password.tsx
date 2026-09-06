import { createFileRoute } from "@tanstack/react-router";
import ForgotPasswordPage from "@/pages/forgot-password.jsx";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Reset your password — IncidentIQ" },
      { name: "description", content: "Cryptographic identity recovery for IncidentIQ accounts, fast and audit-trailed." },
      { property: "og:title", content: "Reset your password — IncidentIQ" },
      { property: "og:description", content: "Cryptographic identity recovery for IncidentIQ accounts, fast and audit-trailed." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <ForgotPasswordPage />;
}

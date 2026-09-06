import { useEffect, useRef } from "react";
import { useNavigate } from "@tanstack/react-router";

/** Maps link/button labels found in the designs to app routes. */
const LABEL_ROUTES = [
  [/^incidentiq$/i, "/"],
  [/^product$/i, "/"],
  [/^architecture$/i, "/"],
  [/^pricing$/i, "/"],
  [/^sign in$/i, "/login"],
  [/^start free$/i, "/signup"],
  [/^create .*account/i, "/signup"],
  [/^sign up/i, "/signup"],
  [/forgot password/i, "/forgot-password"],
  [/^authenticate session$/i, "/incidents"],
  [/^back to sign in/i, "/login"],
  [/^incidents$/i, "/incidents"],
  [/^integrations$/i, "/integrations"],
  [/^api keys$/i, "/api-keys"],
  [/^settings$/i, "/system-states"],
  [/^view live demo$/i, "/incidents"],
  [/^connect google cloud$/i, "/onboarding"],
  [/^inc-8492$/i, "/incidents/inc-8492"],
];

function resolve(label) {
  const clean = label.replace(/\s+/g, " ").trim();
  for (const [re, to] of LABEL_ROUTES) if (re.test(clean)) return to;
  return null;
}

/** Wraps a page and turns the design's links/buttons into real app navigation. */
export function ScreenNav({ children }) {
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onClick = (event) => {
      const target = event.target?.closest?.("a,button");
      if (!target) return;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("http")) return;
      const to = resolve(target.textContent ?? "");
      if (to) {
        event.preventDefault();
        navigate({ to });
      } else if (target.tagName === "A") {
        event.preventDefault();
      }
    };
    el.addEventListener("click", onClick);
    return () => el.removeEventListener("click", onClick);
  }, [navigate]);

  return (
    <div ref={ref} className="min-h-screen bg-background text-on-background">
      {children}
    </div>
  );
}

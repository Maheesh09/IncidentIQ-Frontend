import { useEffect } from "react";
import { Link } from "@tanstack/react-router";

export default function LandingPage() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".landing-scroll-reveal, .landing-card-reveal");
    if (!revealItems.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    document.documentElement.classList.add("landing-motion-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("landing-motion-ready");
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-background">
      <header className={"fixed top-0 left-0 right-0 w-full z-50 bg-surface-container-lowest/75 backdrop-blur-xl border-b border-surface-container-high landing-nav"}>
        <div className={"h-16 max-w-max-content-width mx-auto px-space-md lg:px-space-xl flex items-center justify-between gap-space-md"}>
          <div className={"flex items-center gap-space-sm"}>
            <img alt={"IncidentIQ Logo"} className={"h-8 w-auto object-contain"} src={"/logo.svg"} />
            <span className={"font-headline-sm text-headline-sm text-on-surface tracking-tight font-semibold"}>
              {"IncidentIQ"}
            </span>
          </div>
          <nav className={"hidden lg:flex items-center gap-space-lg"} data-active-classes={"text-primary font-medium"} aria-label={"Primary navigation"}>
            <Link aria-current={"page"} className={"transition-colors text-primary font-medium"} to={"/"}>
              {"Product"}
            </Link>
            <Link className={"font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"} to={"/integrations"}>
              {"Integrations"}
            </Link>
            <Link className={"font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"} to={"/"}>
              {"Docs"}
            </Link>
          </nav>
          <div className={"flex items-center gap-space-sm"}>
            <div className={"hidden sm:flex items-center gap-space-xxs bg-surface-container-low px-space-xs py-1 rounded-full border border-surface-container-high"}>
              <span className={"w-1.5 h-1.5 rounded-full bg-emerald-400"}></span>
              <span className={"font-mono-badge text-mono-badge uppercase text-on-surface-variant tracking-wider"}>
                {"All systems operational"}
              </span>
            </div>
            <Link className={"hidden md:inline-flex items-center justify-center px-space-sm py-2 rounded-xl border border-surface-container-high font-body-sm text-body-sm text-on-surface hover:bg-surface-container-low transition-colors"} to={"/login"}>
              {"Sign in"}
            </Link>
            <Link className={"inline-flex items-center justify-center px-space-md py-2 rounded-xl bg-primary-container text-on-primary-container font-body-sm text-body-sm font-semibold hover:bg-inverse-primary hover:text-on-primary-container transition-colors"} to={"/signup"}>
              {"Start free"}
            </Link>
          </div>
        </div>
      </header>
      <main className={"w-full pt-16 bg-surface-container-lowest min-h-screen"}>
        <div className={"flex flex-col w-full"}>
          <div className={"relative w-full overflow-hidden landing-hero"}>
            <div className={"absolute inset-0 pointer-events-none landing-grid"}></div>
            <div className={"absolute top-0 left-1/2 -translate-x-1/2 w-170 h-95 bg-primary-container/20 blur-[130px] rounded-full pointer-events-none -z-10 landing-glow"}></div>
            <section className={"relative max-w-max-content-width mx-auto px-space-md lg:px-space-xl pt-space-3xl pb-space-2xl text-center flex flex-col items-center justify-center min-h-[calc(100svh-4rem)]"}>
              <div className={"landing-reveal inline-flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1.5 rounded-full border border-surface-container-high mb-space-lg shadow-sm"}>
                <span className={"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}></span>
                <span className={"font-mono-badge text-mono-badge uppercase text-on-surface-variant tracking-wider"}>
                  {"SYSTEM ENGINE V3.4 • DEPLOYED"}
                </span>
              </div>
              <h1 className={"landing-reveal landing-reveal-delay-1 font-display-hero text-display-hero text-on-surface tracking-tight max-w-4xl mx-auto mb-space-lg"}>
                {"Find the signal."}
                <span className={"block text-secondary-container"}>
                  {"Fix the incident."}
                </span>
              </h1>
              <p className={"landing-reveal landing-reveal-delay-2 font-body-lg text-body-lg text-on-surface-variant max-w-170 mx-auto mb-space-xl"}>
                {"IncidentIQ connects alerts, logs, and deploys in real time, then gives your team one ranked answer backed by evidence."}
              </p>
              <div className={"landing-reveal landing-reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-space-md w-full max-w-md mb-space-lg"}>
                <Link className={"group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary-container text-on-primary-container font-body-base font-semibold hover:bg-inverse-primary transition-all hover:-translate-y-0.5 shadow-lg shadow-primary-container/25"} to={"/signup"}>
                  {"Start free"}
                  <span className={"material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-0.5"}>{"arrow_forward"}</span>
                </Link>
                <Link className={"w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-surface-container-high bg-surface-container-low/50 text-on-surface font-body-base font-semibold hover:border-tertiary transition-all hover:-translate-y-0.5"} to={"/incidents"}>
                  <span className={"material-symbols-outlined text-[18px] text-tertiary"}>{"play_circle"}</span>
                  {"View live demo"}
                </Link>
              </div>
              <p className={"landing-reveal landing-reveal-delay-4 font-mono-code text-mono-code text-outline flex items-center justify-center gap-space-xs flex-wrap pt-space-xs"}>
                <span className={""}>
                  {"Instant GCP Workload Identity"}
                </span>
                <span className={"text-surface-container-highest"}>
                  {"•"}
                </span>
                <span className={""}>
                  {"No agent to install"}
                </span>
                <span className={"text-surface-container-highest"}>
                  {"•"}
                </span>
                <span className={""}>
                  {"14-day trial"}
                </span>
              </p>
            </section>
          </div>
          <section className={"max-w-max-content-width mx-auto px-space-md lg:px-space-xl pt-space-xl pb-space-3xl w-full landing-preview-wrap landing-scroll-reveal"}>
            <div className={"w-full rounded-2xl bg-surface-container-low border border-surface-container-high overflow-hidden shadow-2xl landing-preview"}>
              <div className={"h-12 bg-surface-container-lowest px-space-lg flex items-center justify-between border-b border-surface-container-high"}>
                <div className={"flex items-center gap-2"}>
                  <div className={"w-3 h-3 rounded-full bg-[#FF3B5C]"}></div>
                  <div className={"w-3 h-3 rounded-full bg-[#FFC53D]"}></div>
                  <div className={"w-3 h-3 rounded-full bg-[#3DDC97]"}></div>
                </div>
                <div className={"hidden sm:flex items-center gap-2 px-space-md py-1 bg-surface-container-low rounded-lg border border-surface-container-high w-1/2 max-w-md justify-center"}>
                  <span className={"material-symbols-outlined text-outline text-[14px]"}>
                    {"lock"}
                  </span>
                  <span className={"font-mono-code text-mono-code text-on-surface-variant"}>
                    {"incidentiq.internal/incidents/INC-8492"}
                  </span>
                </div>
                <div className={"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-error-container/40 border border-error/30"}>
                  <span className={"w-2 h-2 rounded-full bg-error animate-ping"}></span>
                  <span className={"font-mono-badge text-mono-badge text-error font-semibold"}>
                    {"INC-8492 • CRITICAL • IN PROGRESS"}
                  </span>
                </div>
              </div>
              <div className={"p-space-xl lg:p-space-2xl bg-surface-container-lowest space-y-space-xl"}>
                <div className={"flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pb-space-lg border-b border-surface-container-high"}>
                  <div className={"space-y-space-xxs"}>
                    <div className={"flex items-center gap-space-xs flex-wrap mb-1"}>
                      <span className={"px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-mono-badge text-mono-badge"}>
                        {"checkout-service:v2.18.4"}
                      </span>
                      <span className={"font-mono-code text-mono-code text-outline"}>
                        {"GKE Cluster: prod-us-east1-a"}
                      </span>
                    </div>
                    <h2 className={"font-headline-md text-headline-md text-on-surface font-bold tracking-tight"}>
                      {"High HTTP 504 Gateway Timeout Rate on checkout-service"}
                    </h2>
                  </div>
                  <div className={"font-mono-code text-mono-code text-outline text-left lg:text-right space-y-1"}>
                    <div className={""}>
                      {"Started 03:14:02 UTC"}
                    </div>
                    <div className={"text-secondary font-medium"}>
                      {"Duration: 00:01:27"}
                    </div>
                  </div>
                </div>
                <div className={"grid grid-cols-1 lg:grid-cols-12 gap-space-xl"}>
                  <div className={"lg:col-span-8 space-y-space-lg"}>
                    <div className={"flex items-center justify-between pb-space-xxs"}>
                      <span className={"font-mono-badge text-mono-badge uppercase text-on-surface-variant tracking-wider"}>
                        {"Ranked Hypotheses (AI Engine Confidence)"}
                      </span>
                      <span className={"font-mono-badge text-mono-badge text-primary"}>
                        {"Causal Model: v2.8-prod"}
                      </span>
                    </div>
                    <div className={"rounded-xl bg-[#170F2E] border border-primary/40 p-space-xl relative overflow-hidden shadow-lg space-y-space-md"}>
                      <div className={"flex flex-wrap items-center justify-between gap-space-xs mb-space-xs"}>
                        <div className={"flex items-center gap-space-xs"}>
                          <span className={"px-2.5 py-1 rounded-full bg-primary/20 text-primary font-mono-badge text-mono-badge border border-primary/40 font-bold"}>
                            {"98% CONFIDENCE"}
                          </span>
                          <span className={"px-2 py-0.5 rounded-full bg-error-container/40 text-error font-mono-badge text-mono-badge font-bold"}>
                            {"CRITICAL"}
                          </span>
                        </div>
                        <span className={"font-mono-code text-mono-code text-outline"}>
                          {"Derivation #H-01"}
                        </span>
                      </div>
                      <h3 className={"font-headline-sm text-headline-sm text-on-surface font-semibold"}>
                        {"Database connection pool exhaustion caused by deploy commit #8f12a4b"}
                      </h3>
                      <div className={"rounded-lg bg-surface-container-lowest/80 border border-surface-container-high p-space-md font-mono-code text-mono-code space-y-2.5"}>
                        <div className={"text-error flex items-start gap-2"}>
                          <span className={"text-error font-bold select-none"}>
                            {"[FATAL]"}
                          </span>
                          <span className={"break-all"}>
                            {"remaining connection slots are reserved for non-replication superuser connections"}
                          </span>
                        </div>
                        <div className={"text-tertiary-fixed-dim flex items-start gap-2 pt-2 border-t border-surface-container-high/60"}>
                          <span className={"text-primary select-none"}>
                            {"[GIT]"}
                          </span>
                          <span className={"break-all"}>
                            {"git commit 8f12a4b - \"perf: increase max worker threads to 128\" by @alex at 03:11:45 UTC"}
                          </span>
                        </div>
                      </div>
                      <div className={"flex flex-wrap items-center justify-between gap-space-md pt-space-xs"}>
                        <div className={"text-body-sm text-on-surface-variant font-mono-code"}>
                          {"Root cause isolated in 42 seconds"}
                        </div>
                        <button className={"px-4 py-2.5 rounded-lg bg-secondary-container text-on-secondary-container font-body-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 shadow"}>
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"history"}
                          </span>
                          {"Rollback to commit 3b99c01 (1-click)"}
                        </button>
                      </div>
                    </div>
                    <div className={"rounded-xl bg-surface-container-low border border-surface-container-high p-space-lg opacity-75 hover:opacity-100 transition-opacity space-y-space-xs"}>
                      <div className={"flex items-center justify-between mb-1"}>
                        <div className={"flex items-center gap-space-xs"}>
                          <span className={"px-2 py-0.5 rounded-full bg-surface-container-highest text-outline font-mono-badge text-mono-badge"}>
                            {"14% CONFIDENCE"}
                          </span>
                          <span className={"font-mono-badge text-mono-badge text-outline"}>
                            {"SECONDARY FACTOR"}
                          </span>
                        </div>
                        <span className={"font-mono-code text-mono-code text-secondary font-medium"}>
                          {"+420ms avg delta"}
                        </span>
                      </div>
                      <p className={"font-body-base text-body-base text-on-surface font-medium"}>
                        {"Upstream payment gateway latency spike in eu-west-1"}
                      </p>
                    </div>
                  </div>
                  <div className={"lg:col-span-4 rounded-xl bg-surface-container-low border border-surface-container-high p-space-lg flex flex-col justify-between space-y-space-md"}>
                    <div>
                      <div className={"flex items-center justify-between pb-space-xs border-b border-surface-container-high mb-space-md"}>
                        <span className={"font-mono-badge text-mono-badge uppercase text-on-surface-variant tracking-wider"}>
                          {"Telemetry Correlation"}
                        </span>
                        <span className={"font-mono-code text-mono-code text-error font-medium"}>
                          {"p99: 4.82s"}
                        </span>
                      </div>
                      <div className={"space-y-space-xs mb-space-md"}>
                        <div className={"text-body-sm text-on-surface font-semibold"}>
                          {"Checkout p99 Ingress Latency"}
                        </div>
                        <div className={"text-body-sm text-outline font-mono-code"}>
                          {"Deploy #8f12a4b flagged at 03:11:45 UTC"}
                        </div>
                      </div>
                      <div className={"w-full h-32 relative bg-surface-container-lowest rounded-lg border border-surface-container-high/50 p-2 overflow-hidden flex items-end"}>
                        <svg className={"w-full h-24 overflow-visible"} preserveAspectRatio={"none"} viewBox={"0 0 200 80"}>
                          <path d={"M 0 70 Q 30 72, 60 70 T 90 71"} fill={"none"} stroke={"#aec6ff"} strokeWidth={"2"}></path>
                          <line stroke={"#ffb1c0"} strokeDasharray={"3 3"} strokeWidth={"1.5"} x1={"90"} x2={"90"} y1={"0"} y2={"80"}></line>
                          <path d={"M 90 71 Q 105 10, 130 12 T 160 18 T 200 15"} fill={"none"} stroke={"#ffb4ab"} strokeWidth={"2.5"}></path>
                          <circle className={"animate-pulse"} cx={"130"} cy={"12"} fill={"#ffb4ab"} r={"4"}></circle>
                        </svg>
                        <span className={"absolute top-2 left-2 text-[10px] font-mono-code text-secondary bg-surface-container-high/80 px-1.5 py-0.5 rounded"}>
                          {"Deploy Marker 03:11"}
                        </span>
                        <span className={"absolute top-2 right-2 text-[10px] font-mono-code text-error bg-surface-container-high/80 px-1.5 py-0.5 rounded"}>
                          {"Spike Peak 03:14"}
                        </span>
                      </div>
                    </div>
                    <div className={"mt-space-md pt-space-md border-t border-surface-container-high space-y-2.5 font-mono-code text-mono-code"}>
                      <div className={"flex items-center justify-between text-outline"}>
                        <span className={""}>
                          {"Pod restart loop"}
                        </span>
                        <span className={"text-emerald-400 font-medium"}>
                          {"0 restarts"}
                        </span>
                      </div>
                      <div className={"flex items-center justify-between text-outline"}>
                        <span className={""}>
                          {"DB Conn Pool"}
                        </span>
                        <span className={"text-error font-semibold"}>
                          {"100% capacity"}
                        </span>
                      </div>
                      <div className={"flex items-center justify-between text-outline"}>
                        <span className={""}>
                          {"Ingress 5xx Ratio"}
                        </span>
                        <span className={"text-error font-semibold"}>
                          {"28.4%"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={"max-w-max-content-width mx-auto px-space-md lg:px-space-xl py-space-3xl w-full landing-scroll-reveal"}>
            <div className={"flex items-center justify-center mb-space-2xl"}>
              <div className={"inline-flex items-center p-1.5 rounded-full bg-surface-container-low border border-surface-container-high gap-1.5"}>
                <button className={"px-6 py-2.5 rounded-full bg-primary-container text-on-primary-container border border-primary/50 font-body-sm font-semibold shadow-md shadow-primary-container/20"}>
                  {"For SREs"}
                </button>
                <button className={"px-6 py-2.5 rounded-full text-on-surface-variant hover:text-on-surface font-body-sm transition-colors"}>
                  {"For platform teams"}
                </button>
                <button className={"px-6 py-2.5 rounded-full text-on-surface-variant hover:text-on-surface font-body-sm transition-colors"}>
                  {"For engineering leaders"}
                </button>
              </div>
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-space-xl"}>
              <div className={"landing-card-reveal rounded-2xl bg-[#170F2E] border border-surface-container-high p-space-xl lg:p-space-2xl flex flex-col justify-between hover:border-primary/50 transition-colors space-y-space-lg"}>
                <div>
                  <div className={"w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary mb-space-lg"}>
                    <span className={"material-symbols-outlined text-[26px]"}>
                      {"bolt"}
                    </span>
                  </div>
                  <h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold mb-space-sm"}>
                    {"Automatic triggering"}
                  </h3>
                  <p className={"font-body-base text-body-base text-on-surface-variant"}>
                    {"Begins autonomous trace and log correlation the millisecond an alert fires in PagerDuty, Opsgenie, or Datadog."}
                  </p>
                </div>
                <div className={"pt-space-md border-t border-surface-container-high/40 font-mono-badge text-mono-badge text-primary uppercase tracking-wider"}>
                  {"Trigger Latency < 80ms"}
                </div>
              </div>
              <div className={"landing-card-reveal rounded-2xl bg-[#170F2E] border border-surface-container-high p-space-xl lg:p-space-2xl flex flex-col justify-between hover:border-primary/50 transition-colors space-y-space-lg"}>
                <div>
                  <div className={"w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary mb-space-lg"}>
                    <span className={"material-symbols-outlined text-[26px]"}>
                      {"terminal"}
                    </span>
                  </div>
                  <h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold mb-space-sm"}>
                    {"Evidence you can verify"}
                  </h3>
                  <p className={"font-body-base text-body-base text-on-surface-variant"}>
                    {"Never hallucinates. Every hypothesis links directly to the exact stack trace, container restart, or Git commit hash."}
                  </p>
                </div>
                <div className={"pt-space-md border-t border-surface-container-high/40 font-mono-badge text-mono-badge text-primary uppercase tracking-wider"}>
                  {"Zero Hallucination Guarantee"}
                </div>
              </div>
              <div className={"landing-card-reveal rounded-2xl bg-[#170F2E] border border-surface-container-high p-space-xl lg:p-space-2xl flex flex-col justify-between hover:border-primary/50 transition-colors space-y-space-lg"}>
                <div>
                  <div className={"w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary mb-space-lg"}>
                    <span className={"material-symbols-outlined text-[26px]"}>
                      {"shield_lock"}
                    </span>
                  </div>
                  <h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold mb-space-sm"}>
                    {"No credentials to paste"}
                  </h3>
                  <p className={"font-body-base text-body-base text-on-surface-variant"}>
                    {"Leverages Google Cloud Workload Identity Federation and IAM roles. Zero long-lived API secrets stored."}
                  </p>
                </div>
                <div className={"pt-space-md border-t border-surface-container-high/40 font-mono-badge text-mono-badge text-primary uppercase tracking-wider"}>
                  {"OIDC / OAuth 2.0 Native"}
                </div>
              </div>
              <div className={"landing-card-reveal rounded-2xl bg-[#170F2E] border border-surface-container-high p-space-xl lg:p-space-2xl flex flex-col justify-between hover:border-primary/50 transition-colors space-y-space-lg"}>
                <div>
                  <div className={"w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary mb-space-lg"}>
                    <span className={"material-symbols-outlined text-[26px]"}>
                      {"hub"}
                    </span>
                  </div>
                  <h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold mb-space-sm"}>
                    {"Works with your existing alerts"}
                  </h3>
                  <p className={"font-body-base text-body-base text-on-surface-variant"}>
                    {"Zero changes to your instrumentation required. Plug directly into Cloud Logging, Prometheus, and Grafana."}
                  </p>
                </div>
                <div className={"pt-space-md border-t border-surface-container-high/40 font-mono-badge text-mono-badge text-primary uppercase tracking-wider"}>
                  {"Universal Webhook Mesh"}
                </div>
              </div>
            </div>
          </section>
          <section className={"max-w-max-content-width mx-auto px-space-md lg:px-space-xl py-space-3xl w-full landing-scroll-reveal"}>
            <div className={"w-full rounded-2xl bg-surface-container-low border border-surface-container-high p-space-xl lg:p-space-2xl text-center flex flex-col items-center landing-metric-card"}>
              <span className={"font-mono-badge text-mono-badge text-on-surface-variant uppercase tracking-widest mb-space-sm"}>
                {"ANALYSIS COMPLETES IN"}
              </span>
              <div className={"font-headline-lg text-[64px] sm:text-[80px] font-bold tracking-tight text-secondary-container leading-none my-space-md"}>
                {"87 seconds"}
              </div>
              <p className={"font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-space-2xl"}>
                {"Average mean time to root cause across 140,000+ evaluated production incidents in 2024."}
              </p>
              <div className={"flex flex-wrap items-center justify-center gap-space-md"}>
                <div className={"px-5 py-2.5 rounded-xl bg-surface-container-lowest border border-surface-container-high font-mono-base text-mono-base text-on-surface flex items-center gap-2.5 shadow-sm"}>
                  <span className={"w-2 h-2 rounded-full bg-emerald-400"}></span>
                  {"99.4% Accuracy"}
                </div>
                <div className={"px-5 py-2.5 rounded-xl bg-surface-container-lowest border border-surface-container-high font-mono-base text-mono-base text-on-surface flex items-center gap-2.5 shadow-sm"}>
                  <span className={"w-2 h-2 rounded-full bg-primary"}></span>
                  {"14.2x Faster than War Rooms"}
                </div>
                <div className={"px-5 py-2.5 rounded-xl bg-surface-container-lowest border border-surface-container-high font-mono-base text-mono-base text-on-surface flex items-center gap-2.5 shadow-sm"}>
                  <span className={"w-2 h-2 rounded-full bg-tertiary"}></span>
                  {"Zero False Escalations"}
                </div>
              </div>
            </div>
          </section>
          <section className={"max-w-max-content-width mx-auto px-space-md lg:px-space-xl py-space-3xl w-full landing-scroll-reveal"}>
            <div className={"text-center max-w-xl mx-auto mb-space-2xl"}>
              <h2 className={"font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight mb-space-sm"}>
                {"From outage alert to root cause"}
              </h2>
              <p className={"font-body-base text-body-base text-on-surface-variant"}>
                {"No agents. No months-long configuration. Set up once in minutes, diagnose forever."}
              </p>
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-3 gap-space-xl"}>
              <div className={"landing-card-reveal rounded-2xl bg-surface-container-low border border-surface-container-high p-space-xl flex flex-col justify-between space-y-space-lg"}>
                <div>
                  <div className={"flex items-center justify-between mb-space-md"}>
                    <span className={"font-mono-metric text-mono-metric text-primary font-bold"}>
                      {"01"}
                    </span>
                    <span className={"material-symbols-outlined text-outline text-[24px]"}>
                      {"cloud_sync"}
                    </span>
                  </div>
                  <div className={"font-mono-code text-mono-code text-primary mb-space-sm"}>
                    {"gcloud iam workload-identity"}
                  </div>
                  <h3 className={"font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-sm"}>
                    {"Connect your Google Cloud project"}
                  </h3>
                  <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                    {"Grant read-only audit and log permissions via Google Cloud IAM Workload Identity in under 60 seconds."}
                  </p>
                </div>
                <div className={"pt-space-md border-t border-surface-container-high/50 font-mono-badge text-mono-badge text-outline uppercase tracking-wider"}>
                  {"Time to complete: 45 sec"}
                </div>
              </div>
              <div className={"landing-card-reveal rounded-2xl bg-surface-container-low border border-surface-container-high p-space-xl flex flex-col justify-between space-y-space-lg"}>
                <div>
                  <div className={"flex items-center justify-between mb-space-md"}>
                    <span className={"font-mono-metric text-mono-metric text-primary font-bold"}>
                      {"02"}
                    </span>
                    <span className={"material-symbols-outlined text-outline text-[24px]"}>
                      {"notifications_active"}
                    </span>
                  </div>
                  <div className={"font-mono-code text-mono-code text-primary mb-space-sm"}>
                    {"webhook.incidentiq.internal"}
                  </div>
                  <h3 className={"font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-sm"}>
                    {"Point your alerts at IncidentIQ"}
                  </h3>
                  <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                    {"Forward alerts from PagerDuty, Alertmanager, or Datadog via instant zero-config webhook endpoints."}
                  </p>
                </div>
                <div className={"pt-space-md border-t border-surface-container-high/50 font-mono-badge text-mono-badge text-outline uppercase tracking-wider"}>
                  {"Native Webhook Parsers"}
                </div>
              </div>
              <div className={"landing-card-reveal rounded-2xl bg-surface-container-low border border-surface-container-high p-space-xl flex flex-col justify-between space-y-space-lg"}>
                <div>
                  <div className={"flex items-center justify-between mb-space-md"}>
                    <span className={"font-mono-metric text-mono-metric text-primary font-bold"}>
                      {"03"}
                    </span>
                    <span className={"material-symbols-outlined text-outline text-[24px]"}>
                      {"troubleshoot"}
                    </span>
                  </div>
                  <div className={"font-mono-code text-mono-code text-primary mb-space-sm"}>
                    {"diff & rca bundle"}
                  </div>
                  <h3 className={"font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-sm"}>
                    {"Receive the RCA"}
                  </h3>
                  <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                    {"Get prioritized root-cause hypotheses with verified log diffs posted directly to your incident Slack channel."}
                  </p>
                </div>
                <div className={"pt-space-md border-t border-surface-container-high/50 font-mono-badge text-mono-badge text-outline uppercase tracking-wider"}>
                  {"Direct Slack & Teams Push"}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className={"w-full bg-surface-container-lowest border-t border-surface-container-high"}>
        <div className={"max-w-max-content-width mx-auto px-space-md lg:px-space-xl pt-space-2xl pb-space-xl"}>
          <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl mb-space-2xl"}>
            <div className={"lg:col-span-2 space-y-space-sm"}>
              <div className={"flex items-center gap-space-sm"}>
                <img alt={"IncidentIQ Logo"} className={"h-6 w-auto object-contain"} src={"/logo.svg"} />
                <span className={"font-headline-sm text-headline-sm text-on-surface tracking-tight font-semibold"}>
                  {"IncidentIQ"}
                </span>
              </div>
              <p className={"font-body-sm text-body-sm text-on-surface-variant max-w-sm"}>
                {"Root cause analysis at machine speed for SREs."}
              </p>
            </div>
            <div>
              <h4 className={"font-mono-badge text-mono-badge uppercase text-on-surface-variant tracking-wider mb-space-md"}>
                {"Product"}
              </h4>
              <ul className={"space-y-space-xs font-body-sm text-body-sm"}>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <Link to={"/"} className={""}>
                    {"Root Cause Engine"}
                  </Link>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <Link to={"/"} className={""}>
                    {"Deploy Correlator"}
                  </Link>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <Link to={"/"} className={""}>
                    {"Live Playbooks"}
                  </Link>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <Link to={"/"} className={""}>
                    {"Supported Clouds"}
                  </Link>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <Link to={"/"} className={""}>
                    {"Security"}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className={"font-mono-badge text-mono-badge uppercase text-on-surface-variant tracking-wider mb-space-md"}>
                {"Integrations"}
              </h4>
              <ul className={"space-y-space-xs font-body-sm text-body-sm"}>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <Link to={"/integrations"} className={""}>
                    {"Google Cloud"}
                  </Link>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <Link to={"/integrations"} className={""}>
                    {"Kubernetes"}
                  </Link>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <Link to={"/integrations"} className={""}>
                    {"Datadog"}
                  </Link>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <Link to={"/integrations"} className={""}>
                    {"PagerDuty"}
                  </Link>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <Link to={"/integrations"} className={""}>
                    {"Slack"}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className={"font-mono-badge text-mono-badge uppercase text-on-surface-variant tracking-wider mb-space-md"}>
                {"Resources"}
              </h4>
              <ul className={"space-y-space-xs font-body-sm text-body-sm"}>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <Link to={"/"} className={""}>
                    {"Documentation"}
                  </Link>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <Link to={"/incidents"} className={""}>
                    {"Incident Library"}
                  </Link>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <Link to={"/system-states"} className={""}>
                    {"Status"}
                  </Link>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <Link to={"/system-states"} className={""}>
                    {"Security overview"}
                  </Link>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <Link to={"/"} className={""}>
                    {"Changelog"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={"pt-space-lg border-t border-surface-container-high flex flex-col sm:flex-row items-center justify-between gap-space-sm"}>
            <p className={"font-mono-code text-mono-code text-on-surface-variant"}>
              {"© 2025 IncidentIQ Systems Inc. Built for on-call engineers at 3am."}
            </p>
            <div className={"flex items-center gap-space-sm font-mono-badge text-mono-badge text-on-surface-variant uppercase"}>
              <span className={"w-2 h-2 rounded-full bg-surface-container-high"}></span>
              <span className={""}>
                {"Precision Telemetry"}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

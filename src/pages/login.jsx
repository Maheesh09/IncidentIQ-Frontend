import { Link } from "@tanstack/react-router";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background text-on-background">
      <header className={"fixed top-0 left-0 right-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-surface-container-high"}>
        <div className={"h-16 max-w-max-content-width mx-auto px-space-md lg:px-space-xl flex items-center justify-between gap-space-md"}>
          <div className={"flex items-center gap-space-sm"}>
            <img alt={"IncidentIQ Logo"} className={"h-8 w-auto object-contain"} src={"/logo.svg"} />
            <span className={"font-headline-sm text-headline-sm text-on-surface tracking-tight font-semibold"}>
              {"IncidentIQ"}
            </span>
          </div>
          <nav className={"hidden lg:flex items-center gap-space-lg"} data-active-classes={"text-primary font-medium"}>
            <Link aria-current={"page"} className={"transition-colors text-primary font-medium"} to={"/"}>
              {"Product"}
            </Link>
            <Link className={"font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"} to={"/"}>
              {"Architecture"}
            </Link>
            <Link className={"font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"} to={"/integrations"}>
              {"Integrations"}
            </Link>
            <Link className={"font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"} to={"/"}>
              {"Docs"}
            </Link>
            <Link className={"font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"} to={"/"}>
              {"Pricing"}
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
            <div className={"w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"}>
              <span className={"material-symbols-outlined text-on-primary text-[18px]"}>
                {"person"}
              </span>
            </div>
          </div>
        </div>
      </header>
      <main className={"w-full pt-16 bg-surface-container-lowest min-h-screen"}>
        <div className={"flex flex-col w-full min-h-[calc(100vh-4rem)]"}>
          <div className={"grid grid-cols-1 lg:grid-cols-12 w-full min-h-[calc(100vh-4rem)] flex-1"}>
            <div className={"relative lg:col-span-5 bg-surface-container-lowest flex flex-col justify-between p-space-xl lg:p-space-2xl overflow-hidden"}>
              <div className={"absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_30%_20%,rgba(110,74,255,0.22),transparent_70%)]"}></div>
              <div className={"absolute inset-0 pointer-events-none select-none p-space-xl overflow-hidden opacity-15"}>
                <pre className={"font-mono-code text-mono-code text-on-surface-variant leading-relaxed tracking-tight"}>
                  {"[03:11:42.102] INF AUTH_GATE::HANDSHAKE PEER_DISCOVERY=GCP_EAST1 STATUS=OK INGRESS-GW:504 ROOT_CAUSE_EVAL CTX=INC-8492 CONN_DRAIN_TIMEOUT=1.2s POOL_EXHAUSTION=TRUE CERT_SHA=e8f20b3 TRACE_ID=48f92f3577c34da6a3ce929d0e0e4736 RCA_ENGINE CONFIDENCE=0.98 PRIMARY_CULPRIT=#8f12a4b LATENCY_P99=4820MS THRESHOLD_BREACH [03:11:42.842] WARN HYDRA_DISPATCHER ROUTE_MUTATION_PENDING POD/PAYMENT-ENGINE-5F94B TERMINATION_SIGNAL=SIGTERM REPLICA_SET_DESIRED=12 CURRENT=3 AVAILABLE=1 CLUSTER_HEALTH_SCORE: 42.1% CRITICAL_DRIFT SYNTHESIS::CLUSTER_NODE_FAILOVER_INITIATED OIDC_ASSERTION: CLAIMS_VERIFIED EXP=1740000000 MTTR_CORRELATION_VECTOR=[0.12, 0.44, 0.99, 0.03] ACTIVE_CANARY_REV=v2.41.9-rc4 STATUS=ROLLBACK_TRIGGERED MEM_PRESSURE_STALL: 890MB/1024MB THRESHOLD_EXCEEDED SNAPSHOT_CAPTURED: gs://iq-telemetry-dumps/inc-8492.pcap"}
                </pre>
              </div>
              <div className={"relative z-10 flex flex-wrap items-center justify-between gap-space-sm"}>
                <div className={"flex items-center gap-space-sm"}>
                  <img alt={"IncidentIQ Logo"} className={"h-8 w-auto object-contain"} src={"/logo.svg"} />
                </div>
              </div>
              <div className={"relative z-10 my-auto py-space-xl max-w-lg space-y-space-md"}>
                <div className={"inline-flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-primary-container/20 text-primary"}>
                  <span className={"material-symbols-outlined text-[16px]"} style={{"fontVariationSettings":"'FILL' 1"}}>
                    {"bolt"}
                  </span>
                  <span className={"font-mono-badge text-mono-badge uppercase tracking-wider"}>
                    {"Automated Diagnostics"}
                  </span>
                </div>
                <h2 className={"font-headline-lg text-headline-lg text-on-surface leading-snug tracking-tight"}>
                  {"“IncidentIQ correlates your telemetry and deploys the moment an alert triggers at 3am.”"}
                </h2>
                <p className={"font-body-base text-body-base text-on-surface-variant"}>
                  {"Automated root cause analysis and high-velocity causal triage for mission-critical SRE and Platform teams."}
                </p>
                <div className={"pt-space-sm grid grid-cols-2 gap-space-sm"}>
                  <div className={"p-space-sm rounded-xl bg-surface-container-low/70 backdrop-blur-md"}>
                    <span className={"font-mono-badge text-mono-badge uppercase tracking-wider text-outline block"}>
                      {"Mean Time To Detect"}
                    </span>
                    <span className={"font-mono-metric text-headline-md text-primary mt-1 block"}>
                      {"< 14s"}
                    </span>
                    <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                      {"Continuous cross-cluster eval"}
                    </span>
                  </div>
                  <div className={"p-space-sm rounded-xl bg-surface-container-low/70 backdrop-blur-md"}>
                    <span className={"font-mono-badge text-mono-badge uppercase tracking-wider text-outline block"}>
                      {"Automated MTTR"}
                    </span>
                    <span className={"font-mono-metric text-headline-md text-tertiary mt-1 block"}>
                      {"< 2 mins"}
                    </span>
                    <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                      {"Algorithmic rollback ready"}
                    </span>
                  </div>
                </div>
              </div>
              <div className={"relative z-10 pt-space-lg flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm font-mono-badge text-mono-badge uppercase tracking-wider text-on-surface-variant"}>
                <div className={"flex items-center gap-space-xs"}>
                  <span className={"material-symbols-outlined text-tertiary text-[18px]"}>
                    {"cloud_sync"}
                  </span>
                  <span>
                    {"GCP & AWS Workload Identity"}
                  </span>
                </div>
              </div>
            </div>
            <div className={"lg:col-span-7 bg-surface flex flex-col justify-center items-center p-space-md sm:p-space-xl lg:p-space-2xl relative"}>
              <div className={"absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(110,74,255,0.08),transparent_70%)] pointer-events-none"}></div>
              <div className={"w-full max-w-105 flex flex-col space-y-space-lg relative z-10"}>
                <div className={"space-y-space-xs"}>
                  <div className={"inline-flex items-center gap-space-xxs text-primary font-mono-badge text-mono-badge uppercase tracking-wider mb-space-xxs"}>
                    <span className={"w-1.5 h-1.5 rounded-full bg-primary animate-pulse"}></span>
                    {"Terminal Access Gateway"}
                  </div>
                  <h1 className={"font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold"}>
                    {"Sign in to IncidentIQ"}
                  </h1>
                  <p className={"font-body-base text-body-base text-on-surface-variant"}>
                    {"Enter your engineering credentials to access active war rooms and diagnostics."}
                  </p>
                </div>
                <div>
                  <button className={"w-full h-12 px-space-md rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-all duration-150 flex items-center justify-center gap-space-sm font-body-base text-body-base font-medium shadow-sm hover:shadow-md"} id={"btn-google-sso"} type={"button"}>
                    <svg aria-hidden={"true"} className={"w-5 h-5"} viewBox={"0 0 24 24"}>
                      <path d={"M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"} fill={"#4285F4"}></path>
                      <path d={"M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"} fill={"#34A853"}></path>
                      <path d={"M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.99 0 12s.45 3.83 1.25 5.42l4.03-3.15z"} fill={"#FBBC05"}></path>
                      <path d={"M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"} fill={"#EA4335"}></path>
                    </svg>
                    <span>
                      {"Continue with Google Workspace"}
                    </span>
                  </button>
                </div>
                <div className={"relative flex items-center justify-center"}>
                  <div className={"w-full h-px bg-surface-container-high"}></div>
                  <span className={"absolute px-space-sm bg-surface font-mono-badge text-mono-badge uppercase tracking-widest text-outline"}>
                    {"OR IDENTITY CREDS"}
                  </span>
                </div>
                <form className={"space-y-space-md"} id={"incident-login-form"}>
                  <div className={"space-y-space-xxs"}>
                    <label className={"block font-body-sm text-body-sm font-medium text-on-surface"} htmlFor={"work-email"}>
                      {"Work Email"}
                    </label>
                    <div className={"relative"}>
                      <input className={"w-full h-11 px-space-md rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline font-mono-code text-mono-code focus:outline-none focus:bg-surface-container-low transition-all duration-150"} id={"work-email"} name={"email"} placeholder={"sre.oncall@datadog-ops.io"} required type={"email"} />
                      <span className={"material-symbols-outlined absolute right-3 top-2.5 text-[20px] text-outline pointer-events-none"}>
                        {"alternate_email"}
                      </span>
                    </div>
                  </div>
                  <div className={"space-y-space-xxs"}>
                    <div className={"flex items-center justify-between"}>
                      <label className={"block font-body-sm text-body-sm font-medium text-on-surface"} htmlFor={"user-password"}>
                        {"Password"}
                      </label>
                      <Link className={"font-body-sm text-body-sm text-primary hover:text-primary-fixed transition-colors underline-offset-4 hover:underline"} to={"/forgot-password"}>
                        {"Forgot password?"}
                      </Link>
                    </div>
                    <div className={"relative"}>
                      <input className={"w-full h-11 px-space-md pr-11 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline font-mono-code text-mono-code focus:outline-none focus:bg-surface-container-low transition-all duration-150"} id={"user-password"} name={"password"} placeholder={"••••••••••••••••"} required type={"password"} />
                      <button aria-label={"Toggle password visibility"} className={"absolute right-3 top-2.5 text-outline hover:text-on-surface transition-colors flex items-center justify-center"} id={"toggle-pwd-btn"} type={"button"}>
                        <span className={"material-symbols-outlined text-[20px]"} id={"toggle-pwd-icon"}>
                          {"visibility"}
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className={"flex items-center gap-space-sm pt-space-xxs"}>
                    <label aria-label={"Remember this device"} className={"relative flex items-center cursor-pointer select-none"}>
                      <input checked className={"sr-only peer"} id={"remember-terminal"} name={"remember"} type={"checkbox"} />
                      <div className={"w-4 h-4 rounded bg-surface-container-high peer-checked:bg-primary-container flex items-center justify-center transition-all duration-150"}>
                        <span className={"material-symbols-outlined text-on-primary text-[14px] opacity-0 peer-checked:opacity-100 font-bold"}>
                          {"check"}
                        </span>
                      </div>
                    </label>
                    <label className={"font-body-sm text-body-sm text-on-surface-variant cursor-pointer select-none"} htmlFor={"remember-terminal"}>
                      {"Remember this incident terminal for 30 days"}
                    </label>
                  </div>
                  <button className={"w-full h-12 rounded-xl bg-primary-container text-on-primary-container font-body-base text-body-base font-semibold hover:bg-inverse-primary hover:text-on-primary-container transition-all duration-150 flex items-center justify-center gap-space-xs shadow-md active:scale-[0.99]"} id={"submit-auth-btn"} type={"submit"}>
                    <span className={"material-symbols-outlined text-[20px]"}>
                      {"login"}
                    </span>
                    <span id={"btn-text"}>
                      {"Authenticate Session"}
                    </span>
                  </button>
                </form>
                <div className={"text-center pt-space-xs"}>
                  <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                    {"Don't have an organization yet?"}
                    <Link className={"text-primary font-medium hover:text-primary-fixed transition-colors underline-offset-4 hover:underline ml-1 inline-flex items-center gap-0.5"} to={"/signup"}>
                      {"Create an account →"}
                    </Link>
                  </p>
                </div>
                <div className={"pt-space-md border-t border-surface-container-high/50 flex flex-wrap items-center justify-between gap-space-xs font-mono-badge text-mono-badge uppercase tracking-wider text-outline"}>
                  <div className={"flex items-center gap-1.5"}>
                    <span className={"w-1.5 h-1.5 rounded-full bg-tertiary"}></span>
                    <span>
                      {"OIDC 2.0 Native"}
                    </span>
                  </div>
                  <span>
                    {"•"}
                  </span>
                  <span>
                    {"Workload Identity"}
                  </span>
                  <span>
                    {"•"}
                  </span>
                  <span>
                    {"Clusters Operational"}
                  </span>
                </div>
              </div>
            </div>
          </div>
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
                  <a href={"/"}>
                    {"Root Cause Engine"}
                  </a>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <a href={"/"}>
                    {"Deploy Correlator"}
                  </a>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <a href={"/"}>
                    {"Live Playbooks"}
                  </a>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <a href={"/"}>
                    {"Supported Clouds"}
                  </a>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <a href={"/"}>
                    {"Security"}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className={"font-mono-badge text-mono-badge uppercase text-on-surface-variant tracking-wider mb-space-md"}>
                {"Integrations"}
              </h4>
              <ul className={"space-y-space-xs font-body-sm text-body-sm"}>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <a href={"/integrations"}>
                    {"Google Cloud"}
                  </a>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <a href={"/integrations"}>
                    {"Kubernetes"}
                  </a>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <a href={"/integrations"}>
                    {"Datadog"}
                  </a>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <a href={"/integrations"}>
                    {"PagerDuty"}
                  </a>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <a href={"/integrations"}>
                    {"Slack"}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className={"font-mono-badge text-mono-badge uppercase text-on-surface-variant tracking-wider mb-space-md"}>
                {"Resources"}
              </h4>
              <ul className={"space-y-space-xs font-body-sm text-body-sm"}>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <a href={"/"}>
                    {"Documentation"}
                  </a>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <a href={"/incidents"}>
                    {"Incident Library"}
                  </a>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <a href={"/system-states"}>
                    {"Status"}
                  </a>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <a href={"/system-states"}>
                    {"Security overview"}
                  </a>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <a href={"/"}>
                    {"Changelog"}
                  </a>
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
              <span>
                {"Precision Telemetry"}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

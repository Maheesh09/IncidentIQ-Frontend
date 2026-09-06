import { Link } from "@tanstack/react-router";

export default function OnboardingPage() {
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
        <div className={"flex flex-col w-full text-on-surface"}>
          <div className={"relative w-full overflow-hidden pb-space-3xl"}>
            <div className={"pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-180 h-90 bg-linear-to-b from-primary-container/20 to-transparent blur-[120px] rounded-full"}></div>
            <div className={"max-w-max-content-width mx-auto px-space-md lg:px-space-xl relative z-10 flex flex-col items-center"}>
              <div className={"w-full max-w-200 flex flex-col items-center mt-space-lg mb-space-xl"}>
                <div className={"inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-high border border-surface-container-highest shadow-sm mb-space-md"}>
                  <span className={"w-2 h-2 rounded-full bg-primary animate-pulse"}></span>
                  <span className={"font-mono-badge text-mono-badge uppercase text-primary tracking-widest"}>
                    {"Step 2 of 4 • Workload Identity Federation"}
                  </span>
                </div>
                <div className={"w-full grid grid-cols-4 items-center gap-2 sm:gap-4 mt-space-xs"}>
                  <div className={"flex flex-col items-center text-center group"}>
                    <div className={"flex items-center w-full"}>
                      <div className={"w-full h-0.5 opacity-0"}></div>
                      <div className={"w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary shrink-0 shadow-md"}>
                        <span className={"material-symbols-outlined text-[18px] text-white"}>
                          {"check"}
                        </span>
                      </div>
                      <div className={"w-full h-0.5 bg-primary-container"}></div>
                    </div>
                    <span className={"mt-2 font-body-sm text-body-sm text-on-surface font-medium hidden sm:inline"}>
                      {"Workspace"}
                    </span>
                  </div>
                  <div className={"flex flex-col items-center text-center"}>
                    <div className={"flex items-center w-full"}>
                      <div className={"w-full h-0.5 bg-primary-container"}></div>
                      <div className={"w-8 h-8 rounded-full bg-surface-container-high border-2 border-primary-container flex items-center justify-center text-primary shrink-0 ring-4 ring-primary-container/20"}>
                        <span className={"font-mono-badge text-mono-badge text-primary font-bold"}>
                          {"02"}
                        </span>
                      </div>
                      <div className={"w-full h-0.5 bg-surface-container-high"}></div>
                    </div>
                    <span className={"mt-2 font-body-sm text-body-sm text-primary font-semibold hidden sm:inline"}>
                      {"Connect GCP"}
                    </span>
                  </div>
                  <div className={"flex flex-col items-center text-center"}>
                    <div className={"flex items-center w-full"}>
                      <div className={"w-full h-0.5 bg-surface-container-high"}></div>
                      <div className={"w-8 h-8 rounded-full bg-surface-container-low border border-surface-container-high flex items-center justify-center text-outline shrink-0"}>
                        <span className={"font-mono-badge text-mono-badge text-outline"}>
                          {"03"}
                        </span>
                      </div>
                      <div className={"w-full h-0.5 bg-surface-container-high"}></div>
                    </div>
                    <span className={"mt-2 font-body-sm text-body-sm text-outline hidden sm:inline"}>
                      {"Route Alerts"}
                    </span>
                  </div>
                  <div className={"flex flex-col items-center text-center"}>
                    <div className={"flex items-center w-full"}>
                      <div className={"w-full h-0.5 bg-surface-container-high"}></div>
                      <div className={"w-8 h-8 rounded-full bg-surface-container-low border border-surface-container-high flex items-center justify-center text-outline shrink-0"}>
                        <span className={"font-mono-badge text-mono-badge text-outline"}>
                          {"04"}
                        </span>
                      </div>
                      <div className={"w-full h-0.5 opacity-0"}></div>
                    </div>
                    <span className={"mt-2 font-body-sm text-body-sm text-outline hidden sm:inline"}>
                      {"Verify"}
                    </span>
                  </div>
                </div>
              </div>
              <div className={"w-full max-w-180 bg-surface-container-low border border-surface-container-high rounded-xl p-6 sm:p-8 shadow-xl flex flex-col gap-space-lg"}>
                <div className={"space-y-space-xs"}>
                  <div className={"flex items-center justify-between gap-4 flex-wrap"}>
                    <h1 className={"font-headline-lg text-headline-lg text-on-surface tracking-tight font-semibold"}>
                      {"Connect your Google Cloud project"}
                    </h1>
                    <span className={"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-highest font-mono-badge text-mono-badge uppercase text-primary border border-primary/20"}>
                      <span className={"w-1.5 h-1.5 rounded-full bg-emerald-400"}></span>
                      {"Zero Long-Lived Keys"}
                    </span>
                  </div>
                  <p className={"font-body-base text-body-base text-on-surface-variant leading-relaxed"}>
                    {"IncidentIQ never requests or stores static service account JSON keys. Through Google Cloud Workload Identity Federation, our ingestion pipeline negotiates an ephemeral, auditable, read-only token exchange directly scoped to your Cloud Logging sinks."}
                  </p>
                </div>
                <div className={"space-y-2"}>
                  <div className={"flex items-center justify-between text-on-surface-variant"}>
                    <label className={"font-mono-badge text-mono-badge uppercase tracking-wider flex items-center gap-1.5 text-on-surface-variant"}>
                      <span className={"material-symbols-outlined text-[15px] text-primary"}>
                        {"lock"}
                      </span>
                      {"IncidentIQ Collector Identity (Read-Only)"}
                    </label>
                    <span className={"font-mono-code text-body-sm text-outline"}>
                      {"GCP Global Principal"}
                    </span>
                  </div>
                  <div className={"bg-surface-container-lowest border border-surface-container-high rounded-xl px-4 py-3 flex items-center justify-between gap-2 focus-within:border-primary-container transition-colors"}>
                    <code className={"font-mono-code text-mono-code text-on-surface truncate select-all"} id={"sa-email"}>
                      {"incidentiq-collector@incidentiq-prod.iam.gserviceaccount.com"}
                    </code>
                    <button className={"p-1.5 rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors shrink-0 flex items-center gap-1"} title={"Copy to clipboard"}>
                      <span className={"material-symbols-outlined text-[18px]"}>
                        {"content_copy"}
                      </span>
                      <span className={"font-mono-badge text-mono-badge uppercase hidden group-hover:inline"}>
                        {"Copy"}
                      </span>
                    </button>
                  </div>
                </div>
                <div className={"space-y-2"}>
                  <div className={"flex items-center justify-between"}>
                    <label className={"font-mono-badge text-mono-badge uppercase tracking-wider flex items-center gap-1.5 text-on-surface-variant"}>
                      <span className={"material-symbols-outlined text-[15px] text-primary"}>
                        {"verified_user"}
                      </span>
                      {"Required Least-Privilege Role"}
                    </label>
                    <span className={"font-mono-code text-body-sm text-outline"}>
                      {"Audit-Only Scope"}
                    </span>
                  </div>
                  <div className={"bg-surface-container-lowest border border-surface-container-high rounded-xl px-4 py-3 flex items-center justify-between gap-2"}>
                    <div className={"flex items-center gap-2"}>
                      <span className={"font-mono-code text-mono-code text-primary bg-primary-container/20 px-2.5 py-1 rounded-md border border-primary-container/30"}>
                        {"roles/logging.viewer"}
                      </span>
                      <span className={"font-body-sm text-body-sm text-on-surface-variant hidden md:inline"}>
                        {"• Scoped to causal analysis sinks"}
                      </span>
                    </div>
                    <button className={"p-1.5 rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors shrink-0"} title={"Copy Role"}>
                      <span className={"material-symbols-outlined text-[18px]"}>
                        {"content_copy"}
                      </span>
                    </button>
                  </div>
                </div>
                <div className={"space-y-2"}>
                  <label className={"font-mono-badge text-mono-badge uppercase tracking-wider flex items-center gap-1.5 text-on-surface-variant"} htmlFor={"gcp-project-id"}>
                    <span className={"material-symbols-outlined text-[15px] text-primary"}>
                      {"terminal"}
                    </span>
                    {"Target Google Cloud Project ID"}
                  </label>
                  <div className={"relative"}>
                    <input className={"w-full bg-surface-container-lowest border border-surface-container-high focus:border-primary-container focus:ring-1 focus:ring-primary-container rounded-xl px-4 py-3 font-mono-code text-mono-code text-on-surface outline-none transition-all placeholder:text-outline"} id={"gcp-project-id"} placeholder={"e.g. gcp-prod-payments-east4"} type={"text"} value={"payments-prod-infra-8492"} />
                    <span className={"absolute right-3.5 top-1/2 -translate-y-1/2 text-primary font-mono-badge text-mono-badge uppercase"}>
                      {"VALID FORMAT"}
                    </span>
                  </div>
                  <p className={"font-mono-code text-body-sm text-on-surface-variant"}>
                    {"Locate in GCP Console top bar or run:"}
                    <code className={"text-primary bg-surface-container-high px-1.5 py-0.5 rounded"}>
                      {"gcloud config get-value project"}
                    </code>
                  </p>
                </div>
                <details className={"group bg-surface-container border border-surface-container-high rounded-xl overflow-hidden transition-all duration-200"} open>
                  <summary className={"cursor-pointer px-4 py-3.5 flex items-center justify-between text-on-surface hover:bg-surface-container-highest transition-colors select-none"}>
                    <div className={"flex items-center gap-2"}>
                      <span className={"material-symbols-outlined text-[20px] text-primary group-open:rotate-90 transition-transform"}>
                        {"chevron_right"}
                      </span>
                      <span className={"font-headline-sm text-headline-sm"}>
                        {"Automated gcloud IAM setup commands"}
                      </span>
                    </div>
                    <span className={"font-mono-badge text-mono-badge uppercase bg-surface-container-high px-2 py-0.5 rounded text-on-surface-variant"}>
                      {"Shell script"}
                    </span>
                  </summary>
                  <div className={"p-4 pt-2 border-t border-surface-container-high space-y-3 bg-surface-container-lowest/60"}>
                    <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                      {"Execute this command in Google Cloud Shell or your authorized workstation. It directly grants the ephemeral federated identity read permissions:"}
                    </p>
                    <div className={"relative bg-surface-container-lowest border border-surface-container-high rounded-lg p-3.5 font-mono-code text-mono-code text-on-surface leading-loose group/code overflow-x-auto"}>
                      <button className={"absolute right-3 top-3 p-1.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1 border border-surface-container-highest"}>
                        <span className={"material-symbols-outlined text-[16px]"}>
                          {"terminal"}
                        </span>
                        <span className={"font-mono-badge text-mono-badge uppercase"}>
                          {"Copy Command"}
                        </span>
                      </button>
                      <div className={"text-on-surface-variant select-none"}>
                        {"# 1. Authorize policy binding for the IncidentIQ analyzer"}
                      </div>
                      <div>
                        <span className={"text-primary"}>
                          {"gcloud"}
                        </span>
                        {"projects add-iam-policy-binding"}
                        <span className={"text-secondary font-semibold"} id={"dynamic-cli-project"}>
                          {"payments-prod-infra-8492"}
                        </span>
                        {"\\"}
                      </div>
                      <div className={"pl-4 text-on-surface-variant"}>
                        {"--member="}
                        <span className={"text-primary-fixed-dim"}>
                          {"\"serviceAccount:incidentiq-collector@incidentiq-prod.iam.gserviceaccount.com\""}
                        </span>
                        {"\\"}
                      </div>
                      <div className={"pl-4 text-on-surface-variant"}>
                        {"--role="}
                        <span className={"text-secondary font-semibold"}>
                          {"\"roles/logging.viewer\""}
                        </span>
                        {"\\"}
                      </div>
                      <div className={"pl-4 text-on-surface-variant"}>
                        {"--condition=None"}
                      </div>
                      <div className={"mt-2 text-on-surface-variant select-none"}>
                        {"# 2. Validate API access state"}
                      </div>
                      <div>
                        <span className={"text-primary"}>
                          {"gcloud"}
                        </span>
                        {"services enable logging.googleapis.com"}
                      </div>
                    </div>
                  </div>
                </details>
                <div className={"pt-2 space-y-space-md"}>
                  <button className={"w-full py-3.5 px-6 rounded-xl bg-primary-container hover:bg-inverse-primary text-on-primary-container font-headline-sm text-headline-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-primary-container/20 transition-all active:scale-[0.99]"} id={"test-connection-btn"}>
                    <span className={"material-symbols-outlined text-[20px]"} id={"test-icon"}>
                      {"bolt"}
                    </span>
                    <span id={"test-label"}>
                      {"Run Live Handshake & Telemetry Test"}
                    </span>
                  </button>
                  <div className={"flex items-center justify-between pt-4 border-t border-surface-container-high font-body-sm text-body-sm"}>
                    <Link className={"text-on-surface-variant hover:text-on-surface inline-flex items-center gap-1 transition-colors"} to={"/"}>
                      <span className={"material-symbols-outlined text-[16px]"}>
                        {"arrow_back"}
                      </span>
                      {"Back to Workspace Setup"}
                    </Link>
                    <Link className={"text-outline hover:text-on-surface transition-colors flex items-center gap-1"} to={"/"}>
                      {"Skip for now (configure in Settings)"}
                      <span className={"material-symbols-outlined text-[16px]"}>
                        {"arrow_forward"}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className={"w-full max-w-180 mt-space-2xl space-y-space-md"}>
                <div className={"flex items-center justify-between border-b border-surface-container-high pb-2"}>
                  <div className={"flex items-center gap-2"}>
                    <span className={"material-symbols-outlined text-primary text-[18px]"}>
                      {"dns"}
                    </span>
                    <h2 className={"font-mono-badge text-mono-badge uppercase tracking-wider text-on-surface-variant"}>
                      {"Live Diagnostic Simulation / Verification Outputs"}
                    </h2>
                  </div>
                  <span className={"font-mono-badge text-mono-badge text-outline uppercase"}>
                    {"Handshake Protocols"}
                  </span>
                </div>
                <div className={"bg-surface-container-low border border-dashed border-surface-container-highest rounded-xl p-space-md transition-all"} id={"state-neutral"}>
                  <div className={"flex items-center justify-between mb-2"}>
                    <span className={"inline-flex items-center gap-1.5 font-mono-badge text-mono-badge uppercase text-outline"}>
                      <span className={"w-2 h-2 rounded-full bg-outline"}></span>
                      {"State: Idle / Pending Verification"}
                    </span>
                    <span className={"font-mono-code text-body-sm text-outline"}>
                      {"Endpoint: wif.googleapis.com"}
                    </span>
                  </div>
                  <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                    {"Awaiting verification trigger. Click \"Run Live Handshake & Telemetry Test\" above to initiate mutual TLS token exchange and project-level log list permissions."}
                  </p>
                </div>
                <div className={"bg-surface-container-low border border-emerald-500/30 rounded-xl p-space-md relative overflow-hidden shadow-lg transition-all"} id={"state-success"}>
                  <div className={"flex items-center justify-between mb-2"}>
                    <span className={"inline-flex items-center gap-1.5 font-mono-badge text-mono-badge uppercase text-emerald-400"}>
                      <span className={"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}></span>
                      {"All Systems Operational • Sink Verified"}
                    </span>
                    <span className={"font-mono-badge text-mono-badge text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40"}>
                      {"HTTP 200 OK"}
                    </span>
                  </div>
                  <div className={"space-y-1.5"}>
                    <p className={"font-body-base text-body-base text-on-surface font-medium"}>
                      {"Successfully established STS token exchange with project"}
                      <code className={"text-primary font-mono-code"}>
                        {"payments-prod-infra-8492"}
                      </code>
                      {"."}
                    </p>
                    <div className={"bg-surface-container-lowest rounded-lg p-2.5 font-mono-code text-body-sm text-on-surface-variant flex flex-wrap items-center gap-x-4 gap-y-1 border border-surface-container-high"}>
                      <span className={"text-emerald-400 font-semibold"}>
                        {"• Latency: 142ms"}
                      </span>
                      <span>
                        {"• Read: 1,204 causal log entries"}
                      </span>
                      <span>
                        {"• STS TTL: 3600s"}
                      </span>
                      <span>
                        {"• Scope: logging.googleapis.com/v2"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={"bg-surface-container-low border border-secondary-container/40 rounded-xl p-space-md shadow-lg transition-all"} id={"state-error"}>
                  <div className={"flex items-center justify-between mb-2"}>
                    <span className={"inline-flex items-center gap-1.5 font-mono-badge text-mono-badge uppercase text-secondary"}>
                      <span className={"w-2 h-2 rounded-full bg-secondary animate-ping"}></span>
                      {"Permission Denied • HTTP 403 Forbidden"}
                    </span>
                    <span className={"font-mono-badge text-mono-badge text-secondary bg-secondary-container/20 px-2 py-0.5 rounded border border-secondary/30"}>
                      {"IAM Error"}
                    </span>
                  </div>
                  <div className={"space-y-2"}>
                    <div className={"bg-surface-container-lowest rounded-lg p-3 font-mono-code text-body-sm text-secondary leading-relaxed border border-secondary-container/30"}>
                      {"[ERROR] googleapi: Error 403: Caller does not have required permission 'logging.logEntries.list' on resource 'projects/payments-prod-infra-8492'. Check IAM policy binding for roles/logging.viewer."}
                    </div>
                    <div className={"flex items-center justify-between text-body-sm"}>
                      <span className={"text-on-surface-variant font-body-sm"}>
                        {"Remediation: Confirm IAM command was executed under project owner credentials."}
                      </span>
                      <Link className={"text-primary hover:underline font-mono-code text-body-sm flex items-center gap-1"} to={"/integrations"}>
                        {"Remediation guide →"}
                      </Link>
                    </div>
                  </div>
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

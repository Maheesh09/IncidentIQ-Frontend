import { ScreenNav } from "@/components/ScreenNav";

export default function SignupPage() {
  return (
    <ScreenNav>
      <header className={"fixed top-0 left-0 right-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-surface-container-high"}>
        <div className={"h-16 max-w-[1200px] mx-auto px-space-md lg:px-space-xl flex items-center justify-between gap-space-md"}>
          <div className={"flex items-center gap-space-sm"}>
            <img alt={"IncidentIQ Logo"} className={"h-8 w-auto object-contain"} src={"/logo.svg"} />
            <span className={"font-headline-sm text-headline-sm text-on-surface tracking-tight font-semibold"}>
              {"IncidentIQ"}
            </span>
          </div>
          <nav className={"hidden lg:flex items-center gap-space-lg"} data-active-classes={"text-primary font-medium"}>
            <a aria-current={"page"} className={"transition-colors text-primary font-medium"} data-path={"home"} href={"#"}>
              {"Product"}
            </a>
            <a className={"font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"} data-path={"architecture"} href={"#"}>
              {"Architecture"}
            </a>
            <a className={"font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"} data-path={"integrations"} href={"#"}>
              {"Integrations"}
            </a>
            <a className={"font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"} data-path={"documentation"} href={"#"}>
              {"Docs"}
            </a>
            <a className={"font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"} data-path={"pricing"} href={"#"}>
              {"Pricing"}
            </a>
          </nav>
          <div className={"flex items-center gap-space-sm"}>
            <div className={"hidden sm:flex items-center gap-space-xxs bg-surface-container-low px-space-xs py-1 rounded-full border border-surface-container-high"}>
              <span className={"w-1.5 h-1.5 rounded-full bg-emerald-400"}></span>
              <span className={"font-mono-badge text-mono-badge uppercase text-on-surface-variant tracking-wider"}>
                {"All systems operational"}
              </span>
            </div>
            <a className={"hidden md:inline-flex items-center justify-center px-space-sm py-2 rounded-xl border border-surface-container-high font-body-sm text-body-sm text-on-surface hover:bg-surface-container-low transition-colors"} data-path={"login"} href={"#"}>
              {"Sign in"}
            </a>
            <a className={"inline-flex items-center justify-center px-space-md py-2 rounded-xl bg-primary-container text-on-primary-container font-body-sm text-body-sm font-semibold hover:bg-inverse-primary hover:text-on-primary-container transition-colors"} data-path={"signup"} href={"#"}>
              {"Start free"}
            </a>
            <div className={"w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"}>
              <span className={"material-symbols-outlined text-on-primary text-[18px]"}>
                {"person"}
              </span>
            </div>
          </div>
        </div>
      </header>
      <main className={"w-full pt-16 bg-surface-container-lowest min-h-screen"}>
        <div className={"flex flex-col w-full"}>
          <div className={"w-full min-h-[calc(100vh-4rem)] flex flex-col lg:flex-row bg-surface-container-lowest text-on-surface select-none"}>
            <div className={"relative w-full lg:w-[45%] bg-surface-container-low flex flex-col justify-between p-space-lg lg:p-space-2xl overflow-hidden shadow-2xl"}>
              <div className={"pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary-container/20 rounded-full blur-[140px] opacity-70"}></div>
              <div className={"pointer-events-none absolute -bottom-32 -right-32 w-[480px] h-[480px] bg-primary/10 rounded-full blur-[120px] opacity-40"}></div>
              <div className={"pointer-events-none absolute inset-0 pt-28 px-space-xl overflow-hidden opacity-[0.14] font-mono-code text-mono-code text-on-surface-variant leading-loose select-none z-0"}>
                <div>
                  {"[03:12:01.092] INF ORG_PROVISIONING TIER=SCALE REGION=US-EAST1"}
                </div>
                <div>
                  {"[03:12:01.418] DBG IAM_ROLE_BIND ROLE=ROLES/LOGGING.VIEWER RESOURCE=ROOT"}
                </div>
                <div>
                  {"[03:12:02.104] DBG CAUSAL_MODEL GRAPH_COMPUTE VERSION=V2.8-PROD NODE_COUNT=482"}
                </div>
                <div>
                  {"[03:12:02.890] INF TOPOLOGY_SYNTHESIS DEPTH=6 EDGES=1892 CONVERGENCE=OK"}
                </div>
                <div>
                  {"[03:12:03.011] INF TRACE_CORRELATOR K8S_POD_AFFINITY=STRICT APM=OTEL"}
                </div>
                <div>
                  {"[03:12:03.670] DBG METRIC_INDEXER TIME_SERIES_HASH=SHA256:7f9a12c8e"}
                </div>
                <div>
                  {"[03:12:04.220] INF VERIFICATION_GUARD ZERO_HALLUCINATION_ENGINE=ACTIVE"}
                </div>
                <div>
                  {"[03:12:04.881] DBG HEURISTIC_VECTOR_ALIGN CLUSTER_STATE=STEADY_STATE"}
                </div>
                <div>
                  {"[03:12:05.110] INF OIDC_EXCHANGE KMS_KEY=PROJECTS/INC-IQ/CRYPTOKEYS=ACTIVE"}
                </div>
                <div>
                  {"[03:12:05.940] DBG ENCLAVE_SEALED HARDWARE_ATTESTATION=PASSED TPM2.0"}
                </div>
                <div>
                  {"[03:12:06.012] INF READY 14-DAY FULL TIER TRIAL INITIALIZED WITH ZERO AGENTS"}
                </div>
                <div>
                  {"[03:12:06.402] INF INGESTION_BUS KAFKA_OFFSET_COMMITTED PARTITION=0-15"}
                </div>
                <div>
                  {"[03:12:07.119] DBG ROOT_CAUSE_PROBABILITY MARKOV_TRANSITION=STABLE"}
                </div>
              </div>
              <div className={"relative z-10 flex flex-wrap items-center justify-between gap-space-sm"}>
                <div className={"flex items-center gap-space-xs"}>
                  <img alt={"IncidentIQ Engineering Portal"} className={"h-8 w-auto object-contain"} src={"/logo.svg"} />
                </div>
                <div className={"inline-flex items-center gap-space-xs bg-surface-container-highest/60 px-space-xs py-1 rounded-full shadow-sm"}>
                  <span className={"relative flex h-2 w-2"}>
                    <span className={"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}></span>
                    <span className={"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"}></span>
                  </span>
                  <span className={"font-mono-badge text-mono-badge uppercase text-on-surface-variant tracking-wider"}>
                    {"14-day production trial"}
                  </span>
                </div>
              </div>
              <div className={"relative z-10 my-auto py-space-xl space-y-space-lg"}>
                <div className={"space-y-space-md max-w-lg"}>
                  <div className={"inline-flex items-center gap-space-xs bg-primary-container/20 px-space-sm py-1 rounded-xl"}>
                    <span className={"material-symbols-outlined text-primary text-[18px]"}>
                      {"bolt"}
                    </span>
                    <span className={"font-mono-badge text-mono-badge uppercase tracking-wider text-primary"}>
                      {"Zero-Touch Observability"}
                    </span>
                  </div>
                  <h2 className={"font-display-hero text-headline-lg lg:text-[40px] lg:leading-[48px] text-on-surface tracking-tight font-bold"}>
                    {"No agents to install."}
                    <br />
                    <span className={"text-primary"}>
                      {"Zero credentials stored."}
                    </span>
                    <br />
                    {"Connect in 60s."}
                  </h2>
                  <p className={"font-body-lg text-body-lg text-on-surface-variant max-w-md"}>
                    {"Automated root cause analysis and instant incident correlation for engineering teams triaging cascading failures."}
                  </p>
                </div>
                <div className={"bg-surface-container/70 backdrop-blur-md rounded-xl p-space-md shadow-lg space-y-space-sm max-w-md"}>
                  <div className={"flex items-center justify-between font-mono-badge text-mono-badge text-on-surface-variant uppercase"}>
                    <span>
                      {"Deterministic Pipeline Verification"}
                    </span>
                    <span className={"text-primary font-semibold"}>
                      {"100% Non-Invasive"}
                    </span>
                  </div>
                  <div className={"w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden"}>
                    <div className={"bg-primary h-full rounded-full transition-all duration-1000"} style={{"width":"88%"}}></div>
                  </div>
                  <div className={"flex items-center justify-between font-mono-code text-mono-code text-on-surface-variant"}>
                    <span>
                      {"Runtime Latency:"}
                      <strong className={"text-on-surface"}>
                        {"< 0.4ms"}
                      </strong>
                    </span>
                    <span>
                      {"Agent Footprint:"}
                      <strong className={"text-on-surface"}>
                        {"0 KB"}
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
              <div className={"relative z-10 pt-space-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm bg-surface-container-high/30 -mx-space-lg lg:-mx-space-2xl -mb-space-lg lg:-mb-space-2xl px-space-lg lg:px-space-2xl py-space-md"}>
                <div className={"flex items-center gap-space-xs"}>
                  <span className={"material-symbols-outlined text-primary text-[20px]"}>
                    {"timer"}
                  </span>
                  <span className={"font-mono-code text-mono-code text-on-surface"}>
                    {"Setup time:"}
                    <strong>
                      {"45 seconds"}
                    </strong>
                  </span>
                </div>
                <div className={"flex items-center gap-space-xs"}>
                  <span className={"material-symbols-outlined text-emerald-400 text-[20px]"}>
                    {"verified_user"}
                  </span>
                  <span className={"font-mono-code text-mono-code text-on-surface-variant"}>
                    {"Audit-only IAM · SOC 2 Type II"}
                  </span>
                </div>
              </div>
            </div>
            <div className={"w-full lg:w-[55%] flex flex-col justify-center items-center px-space-md py-space-xl lg:px-space-2xl relative"}>
              <div className={"pointer-events-none absolute top-0 right-1/4 w-[400px] h-[300px] bg-primary/5 rounded-full blur-[100px]"}></div>
              <div className={"w-full max-w-[420px] space-y-space-md relative z-10"}>
                <div className={"space-y-space-xxs"}>
                  <h1 className={"font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight"}>
                    {"Create your account"}
                  </h1>
                  <p className={"font-body-base text-body-base text-on-surface-variant"}>
                    {"Start analyzing incidents with zero configuration."}
                  </p>
                </div>
                <button className={"w-full h-11 px-space-md bg-surface-container hover:bg-surface-container-high transition-colors rounded-xl flex items-center justify-center gap-space-sm text-on-surface font-headline-sm text-body-base shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"} type={"button"}>
                  <svg aria-hidden={"true"} className={"w-5 h-5 shrink-0"} viewbox={"0 0 24 24"}>
                    <path d={"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"} fill={"#4285F4"}></path>
                    <path d={"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"} fill={"#34A853"}></path>
                    <path d={"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"} fill={"#FBBC05"}></path>
                    <path d={"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"} fill={"#EA4335"}></path>
                  </svg>
                  <span>
                    {"Sign up with Google"}
                  </span>
                </button>
                <div className={"relative flex items-center justify-center my-space-xs"}>
                  <div className={"w-full h-px bg-surface-container-highest"}></div>
                  <span className={"absolute bg-surface-container-lowest px-space-xs font-mono-badge text-mono-badge text-on-surface-variant uppercase tracking-widest"}>
                    {"or"}
                  </span>
                </div>
                <form className={"space-y-space-sm"} id={"signup-form"}>
                  <div className={"space-y-1"}>
                    <label className={"block font-mono-badge text-mono-badge text-on-surface-variant uppercase tracking-wider"} htmlFor={"fullName"}>
                      {"Full Name"}
                    </label>
                    <div className={"relative"}>
                      <input className={"w-full h-11 px-space-sm bg-surface-container text-on-surface placeholder:text-outline font-body-base text-body-base rounded-xl focus:outline-none focus:bg-surface-container-high transition-colors"} id={"fullName"} placeholder={"Elena Rostova"} required type={"text"} />
                    </div>
                  </div>
                  <div className={"space-y-1"}>
                    <label className={"block font-mono-badge text-mono-badge text-on-surface-variant uppercase tracking-wider"} htmlFor={"workEmail"}>
                      {"Work Email"}
                    </label>
                    <div className={"relative"}>
                      <input className={"w-full h-11 px-space-sm bg-surface-container text-on-surface placeholder:text-outline font-body-base text-body-base rounded-xl focus:outline-none focus:bg-surface-container-high transition-colors"} id={"workEmail"} placeholder={"elena.r@payments-sre.org"} required type={"email"} />
                    </div>
                  </div>
                  <div className={"space-y-1"}>
                    <label className={"block font-mono-badge text-mono-badge text-on-surface-variant uppercase tracking-wider"} htmlFor={"orgName"}>
                      {"Organization Name"}
                    </label>
                    <div className={"relative"}>
                      <input className={"w-full h-11 px-space-sm bg-surface-container text-on-surface placeholder:text-outline font-body-base text-body-base rounded-xl focus:outline-none focus:bg-surface-container-high transition-colors"} id={"orgName"} placeholder={"Global Payments Infrastructure"} required type={"text"} />
                    </div>
                  </div>
                  <div className={"space-y-1"}>
                    <div className={"flex items-center justify-between"}>
                      <label className={"block font-mono-badge text-mono-badge text-on-surface-variant uppercase tracking-wider"} htmlFor={"accountPassword"}>
                        {"Password"}
                      </label>
                      <span className={"font-mono-badge text-mono-badge text-emerald-400"} id={"strengthIndicator"}>
                        {"Strong (14+ chars)"}
                      </span>
                    </div>
                    <div className={"relative"}>
                      <input className={"w-full h-11 px-space-sm pr-10 bg-surface-container text-on-surface placeholder:text-outline font-mono-code text-mono-code rounded-xl focus:outline-none focus:bg-surface-container-high transition-colors"} id={"accountPassword"} placeholder={"••••••••••••••••"} required type={"password"} />
                      <button aria-label={"Toggle password visibility"} className={"absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface focus:outline-none"} id={"togglePassword"} type={"button"}>
                        <span className={"material-symbols-outlined text-[18px]"}>
                          {"visibility"}
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className={"pt-space-xs"}>
                    <button className={"w-full h-12 bg-primary-container hover:bg-inverse-primary text-on-primary-container font-headline-sm text-body-base font-semibold rounded-xl shadow-lg transition-all flex items-center justify-center gap-space-xs active:scale-[0.99] focus-visible:outline-none"} type={"submit"}>
                      <span>
                        {"Create IncidentIQ account"}
                      </span>
                      <span className={"material-symbols-outlined text-[18px]"}>
                        {"arrow_forward"}
                      </span>
                    </button>
                  </div>
                </form>
                <p className={"font-body-sm text-body-sm text-on-surface-variant text-center leading-relaxed pt-space-xxs"}>
                  {"By creating an account, you agree to our"}
                  <a className={"underline text-on-surface hover:text-primary transition-colors"} href={"#"}>
                    {"Terms of Service"}
                  </a>
                  {","}
                  <a className={"underline text-on-surface hover:text-primary transition-colors"} href={"#"}>
                    {"Privacy Policy"}
                  </a>
                  {", and"}
                  <a className={"underline text-on-surface hover:text-primary transition-colors"} href={"#"}>
                    {"Enterprise DPA"}
                  </a>
                  {"."}
                </p>
                <div className={"pt-space-xs text-center font-body-base text-body-sm"}>
                  <span className={"text-on-surface-variant"}>
                    {"Already have credentials?"}
                  </span>
                  <a className={"text-primary hover:text-primary-fixed ml-1 font-medium inline-flex items-center gap-0.5 transition-colors"} data-path={"login"} href={"#"}>
                    {"Sign in to console →"}
                  </a>
                </div>
              </div>
              <div className={"mt-space-xl pt-space-md flex flex-wrap items-center justify-center gap-space-md text-on-surface-variant font-mono-badge text-mono-badge uppercase tracking-wider"}>
                <span className={"flex items-center gap-1"}>
                  <span className={"w-1.5 h-1.5 rounded-full bg-primary"}></span>
                  {"OIDC 2.0 Native"}
                </span>
                <span className={"flex items-center gap-1"}>
                  <span className={"w-1.5 h-1.5 rounded-full bg-primary"}></span>
                  {"Workload Identity"}
                </span>
                <span className={"flex items-center gap-1"}>
                  <span className={"w-1.5 h-1.5 rounded-full bg-emerald-400"}></span>
                  {"SOC 2 Type II"}
                </span>
                <span className={"flex items-center gap-1"}>
                  <span className={"w-1.5 h-1.5 rounded-full bg-emerald-400"}></span>
                  {"All clusters operational"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className={"w-full bg-surface-container-lowest border-t border-surface-container-high"}>
        <div className={"max-w-[1200px] mx-auto px-space-md lg:px-space-xl pt-space-2xl pb-space-xl"}>
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
                  <a data-path={"root-cause-engine"} href={"#"}>
                    {"Root Cause Engine"}
                  </a>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <a data-path={"deploy-correlator"} href={"#"}>
                    {"Deploy Correlator"}
                  </a>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <a data-path={"live-playbooks"} href={"#"}>
                    {"Live Playbooks"}
                  </a>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <a data-path={"supported-clouds"} href={"#"}>
                    {"Supported Clouds"}
                  </a>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <a data-path={"security"} href={"#"}>
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
                  <a data-path={"integrations-google-cloud"} href={"#"}>
                    {"Google Cloud"}
                  </a>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <a data-path={"integrations-kubernetes"} href={"#"}>
                    {"Kubernetes"}
                  </a>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <a data-path={"integrations-datadog"} href={"#"}>
                    {"Datadog"}
                  </a>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <a data-path={"integrations-pagerduty"} href={"#"}>
                    {"PagerDuty"}
                  </a>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <a data-path={"integrations-slack"} href={"#"}>
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
                  <a data-path={"documentation"} href={"#"}>
                    {"Documentation"}
                  </a>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <a data-path={"incident-library"} href={"#"}>
                    {"Incident Library"}
                  </a>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <a data-path={"status"} href={"#"}>
                    {"Status"}
                  </a>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <a data-path={"soc-2-type-ii"} href={"#"}>
                    {"SOC 2 Type II"}
                  </a>
                </li>
                <li className={"text-on-surface-variant hover:text-on-surface transition-colors"}>
                  <a data-path={"changelog"} href={"#"}>
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
    </ScreenNav>
  );
}

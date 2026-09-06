import { ScreenNav } from "@/components/ScreenNav";

export default function IntegrationsPage() {
  return (
    <ScreenNav>
      <aside className={"fixed left-0 top-0 h-screen w-60 bg-surface-dim z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.4)]"}>
        <div className={"flex flex-col"}>
          <div className={"h-16 px-space-lg flex items-center gap-space-sm"}>
            <img alt={"Brand logo. - Primary color: #6e4aff - Font: inter - Mode: dark - Roundness: rounded-md"} className={"h-8 w-auto object-contain"} src={"/logo.svg"} />
            <span className={"font-headline-sm text-headline-sm text-on-surface tracking-tight font-bold"}>
              {"IncidentIQ"}
            </span>
          </div>
          <div className={"px-space-md py-space-sm"}>
            <nav className={"flex flex-col gap-space-xxs"} data-active-classes={"bg-surface-container-low text-on-surface font-semibold relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary-container before:rounded-r"}>
              <a aria-current={"page"} className={"flex items-center gap-space-sm px-space-md py-space-sm rounded transition-colors bg-surface-container-low text-on-surface font-semibold relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary-container before:rounded-r"} data-path={"incidents"} href={"#"}>
                <span className={"material-symbols-outlined text-[20px]"}>
                  {"emergency_home"}
                </span>
                <span>
                  {"Incidents"}
                </span>
              </a>
              <a className={"flex items-center gap-space-sm px-space-md py-space-sm rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-base text-body-base"} data-path={"integrations"} href={"#"}>
                <span className={"material-symbols-outlined text-[20px]"}>
                  {"hub"}
                </span>
                <span>
                  {"Integrations"}
                </span>
              </a>
              <a className={"flex items-center gap-space-sm px-space-md py-space-sm rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-base text-body-base"} data-path={"api-keys"} href={"#"}>
                <span className={"material-symbols-outlined text-[20px]"}>
                  {"key"}
                </span>
                <span>
                  {"API Keys"}
                </span>
              </a>
              <a className={"flex items-center gap-space-sm px-space-md py-space-sm rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-base text-body-base"} data-path={"settings"} href={"#"}>
                <span className={"material-symbols-outlined text-[20px]"}>
                  {"settings"}
                </span>
                <span>
                  {"Settings"}
                </span>
              </a>
            </nav>
          </div>
        </div>
        <div className={"p-space-md flex flex-col gap-space-sm bg-surface-container-lowest"}>
          <div className={"flex items-center justify-between px-space-xs"}>
            <span className={"font-mono-badge text-mono-badge text-on-surface-variant uppercase tracking-wider"}>
              {"Cluster Status"}
            </span>
            <span className={"flex items-center gap-1.5 font-mono-badge text-mono-badge text-tertiary"}>
              <span className={"inline-block w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"}></span>
              {"connected"}
            </span>
          </div>
          <div className={"flex items-center gap-space-sm p-space-xs rounded bg-surface-container-low"}>
            <div className={"w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary font-mono-base text-mono-base font-bold"}>
              {"ER"}
            </div>
            <div className={"flex flex-col min-w-0 flex-1"}>
              <span className={"font-body-sm text-body-sm font-semibold text-on-surface truncate"}>
                {"Elena Rostova"}
              </span>
              <span className={"font-body-sm text-[11px] leading-[14px] text-on-surface-variant truncate"}>
                {"Global Payments Infra"}
              </span>
            </div>
          </div>
        </div>
      </aside>
      <div className={"pl-60 min-h-screen flex flex-col"}>
        <header className={"fixed top-0 left-60 right-0 h-16 bg-surface-dim/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.3)] z-40 flex items-center justify-between px-space-xl"}>
          <div className={"flex items-center gap-space-md"}>
            <div className={"flex items-center gap-space-xs font-mono-base text-mono-base text-on-surface-variant"}>
              <span className={"hover:text-on-surface cursor-pointer"}>
                {"Platform"}
              </span>
              <span className={"text-outline"}>
                {"/"}
              </span>
              <span className={"text-on-surface font-semibold"}>
                {"Overview"}
              </span>
            </div>
            <div className={"flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-high"}>
              <span className={"inline-block w-2 h-2 rounded-full bg-tertiary"}></span>
              <span className={"font-mono-badge text-mono-badge text-on-surface"}>
                {"All systems operational"}
              </span>
            </div>
          </div>
          <div className={"flex items-center gap-space-md"}>
            <div className={"px-space-sm py-1 rounded-full bg-surface-container-low font-mono-badge text-mono-badge text-on-surface-variant"}>
              {"production-us-east-1"}
            </div>
            <button className={"flex items-center justify-center w-8 h-8 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"}>
              <span className={"material-symbols-outlined text-[20px]"}>
                {"notifications"}
              </span>
            </button>
            <button className={"flex items-center justify-center w-8 h-8 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"}>
              <span className={"material-symbols-outlined text-[20px]"}>
                {"terminal"}
              </span>
            </button>
            <div className={"w-8 h-8 rounded-full bg-primary flex items-center justify-center"}>
              <span className={"material-symbols-outlined text-on-primary text-[18px]"}>
                {"person"}
              </span>
            </div>
          </div>
        </header>
        <main className={"relative pt-16 bg-surface-container-lowest min-h-screen px-space-xl py-space-xl"}>
          <div className={"flex flex-col w-full"}>
            <div className={"relative w-full"}>
              <div className={"absolute -top-16 left-1/2 -translate-x-1/2 w-[800px] h-[360px] pointer-events-none opacity-40 bg-[radial-gradient(circle_at_50%_0%,rgba(110,74,255,0.22),transparent_70%)]"}></div>
              <div className={"relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-space-lg pb-space-2xl border-b border-[#232329]"}>
                <div className={"flex flex-col gap-space-xs max-w-2xl"}>
                  <div className={"flex items-center gap-space-sm flex-wrap"}>
                    <div className={"flex items-center gap-space-xs font-mono-badge text-mono-badge text-on-surface-variant uppercase tracking-wider"}>
                      <span>
                        {"Settings"}
                      </span>
                      <span className={"text-outline-variant"}>
                        {"/"}
                      </span>
                      <span className={"text-primary font-bold"}>
                        {"Integrations"}
                      </span>
                    </div>
                    <span className={"inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container font-mono-badge text-[11px] text-tertiary"}>
                      <span className={"w-1.5 h-1.5 rounded-full bg-tertiary animate-ping opacity-75"}></span>
                      <span className={"w-1.5 h-1.5 rounded-full bg-tertiary -ml-3"}></span>
                      {"SINK SYNCHRONIZATION ACTIVE"}
                    </span>
                  </div>
                  <h1 className={"font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight"}>
                    {"Integrations"}
                  </h1>
                  <p className={"font-body-base text-body-base text-on-surface-variant"}>
                    {"Manage telemetry ingestion pipelines, alert webhooks, and deployment correlation providers across production clusters."}
                  </p>
                </div>
                <div className={"flex items-center gap-space-sm self-start md:self-end shrink-0"}>
                  <button className={"flex items-center gap-space-xs px-4 py-2 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm font-semibold hover:bg-surface-container transition-colors"}>
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"menu_book"}
                    </span>
                    <span>
                      {"Documentation"}
                    </span>
                  </button>
                  <button className={"flex items-center gap-space-xs px-4 py-2 rounded-xl bg-primary-container text-on-primary-container font-body-sm text-body-sm font-semibold hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(110,74,255,0.35)]"}>
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"add"}
                    </span>
                    <span>
                      {"Add Custom Source"}
                    </span>
                  </button>
                </div>
              </div>
              <div className={"my-space-xl p-space-md rounded-xl bg-surface-container-low flex flex-wrap items-center justify-between gap-space-md text-on-surface-variant font-mono-badge text-mono-badge"}>
                <div className={"flex items-center gap-space-lg"}>
                  <div className={"flex items-center gap-space-xs"}>
                    <span className={"text-outline"}>
                      {"INGEST_RATE:"}
                    </span>
                    <span className={"text-on-surface font-semibold"}>
                      {"1,842 eps"}
                    </span>
                  </div>
                  <div className={"hidden sm:block w-px h-3 bg-[#232329]"}></div>
                  <div className={"flex items-center gap-space-xs"}>
                    <span className={"text-outline"}>
                      {"PIPELINE_DRIFT:"}
                    </span>
                    <span className={"text-tertiary font-semibold"}>
                      {"0.00ms"}
                    </span>
                  </div>
                  <div className={"hidden sm:block w-px h-3 bg-[#232329]"}></div>
                  <div className={"flex items-center gap-space-xs"}>
                    <span className={"text-outline"}>
                      {"ACTIVE_BRIDGES:"}
                    </span>
                    <span className={"text-on-surface font-semibold"}>
                      {"4/6 Operational"}
                    </span>
                  </div>
                </div>
                <div className={"flex items-center gap-space-xs text-primary font-medium"}>
                  <span className={"material-symbols-outlined text-[15px]"}>
                    {"verified_user"}
                  </span>
                  <span>
                    {"mTLS & SigV4 Protocol Enforcement"}
                  </span>
                </div>
              </div>
              <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg"}>
                <div className={"group relative flex flex-col justify-between p-space-lg rounded-xl bg-surface-container hover:bg-surface-container-high transition-all duration-200"}>
                  <div>
                    <div className={"flex items-start justify-between gap-space-sm mb-space-md"}>
                      <div className={"flex items-center gap-space-sm"}>
                        <div className={"w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm"}>
                          <svg className={"w-6 h-6"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} viewbox={"0 0 24 24"}>
                            <path d={"M19 12h-7v2h5a4 4 0 0 1-7.5 1.5l-1.8 1.2A6 6 0 1 0 19 12z"} fill={"#aec6ff"} stroke={"none"}></path>
                            <circle cx={"12"} cy={"12"} r={"9"} stroke={"currentColor"} strokeDasharray={"2 2"} strokeWidth={"1.5"}></circle>
                          </svg>
                        </div>
                        <div className={"flex flex-col"}>
                          <span className={"font-headline-sm text-body-lg text-on-surface font-semibold"}>
                            {"Google Cloud Logging"}
                          </span>
                          <span className={"font-mono-badge text-[10px] text-outline"}>
                            {"GCP.STACKDRIVER.V2"}
                          </span>
                        </div>
                      </div>
                      <span className={"px-2 py-0.5 rounded-full bg-surface-container-lowest font-mono-badge text-[10px] text-tertiary uppercase"}>
                        {"Telemetry"}
                      </span>
                    </div>
                    <p className={"font-body-sm text-body-sm text-on-surface-variant mb-space-lg line-clamp-2"}>
                      {"Streams audit logs, stderr traces, and system metrics via Workload Identity Federation with zero-token rotation."}
                    </p>
                  </div>
                  <div className={"pt-space-md border-t border-[#232329] flex items-center justify-between gap-space-xs mt-auto"}>
                    <div className={"flex flex-col"}>
                      <div className={"flex items-center gap-1.5 font-mono-badge text-[11px] text-tertiary font-semibold"}>
                        <span className={"w-1.5 h-1.5 rounded-full bg-tertiary"}></span>
                        {"Connected"}
                      </div>
                      <span className={"font-mono-code text-[11px] text-outline truncate max-w-[180px]"}>
                        {"last sync: 14s ago • 1.2k e/s"}
                      </span>
                    </div>
                    <a className={"inline-flex items-center gap-0.5 font-body-sm text-body-sm text-primary hover:text-on-surface transition-colors font-medium"} href={"#"}>
                      {"Manage"}
                      <span className={"material-symbols-outlined text-[16px]"}>
                        {"chevron_right"}
                      </span>
                    </a>
                  </div>
                </div>
                <div className={"group relative flex flex-col justify-between p-space-lg rounded-xl bg-surface-container hover:bg-surface-container-high transition-all duration-200"}>
                  <div>
                    <div className={"flex items-start justify-between gap-space-sm mb-space-md"}>
                      <div className={"flex items-center gap-space-sm"}>
                        <div className={"w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-surface shadow-sm"}>
                          <svg className={"w-6 h-6 fill-current"} viewbox={"0 0 24 24"}>
                            <path clipRule={"evenodd"} d={"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"} fillRule={"evenodd"}></path>
                          </svg>
                        </div>
                        <div className={"flex flex-col"}>
                          <span className={"font-headline-sm text-body-lg text-on-surface font-semibold"}>
                            {"GitHub"}
                          </span>
                          <span className={"font-mono-badge text-[10px] text-outline"}>
                            {"GITHUB.COM/APP"}
                          </span>
                        </div>
                      </div>
                      <span className={"px-2 py-0.5 rounded-full bg-surface-container-lowest font-mono-badge text-[10px] text-tertiary uppercase"}>
                        {"VCS / CI"}
                      </span>
                    </div>
                    <p className={"font-body-sm text-body-sm text-on-surface-variant mb-space-lg line-clamp-2"}>
                      {"Correlates git deployments, release tags, and pull request diffs directly with runtime anomaly windows."}
                    </p>
                  </div>
                  <div className={"pt-space-md border-t border-[#232329] flex items-center justify-between gap-space-xs mt-auto"}>
                    <div className={"flex flex-col"}>
                      <div className={"flex items-center gap-1.5 font-mono-badge text-[11px] text-tertiary font-semibold"}>
                        <span className={"w-1.5 h-1.5 rounded-full bg-tertiary"}></span>
                        {"Connected"}
                      </div>
                      <span className={"font-mono-code text-[11px] text-outline truncate max-w-[180px]"}>
                        {"commit: sha:8f12a4b • 3m ago"}
                      </span>
                    </div>
                    <a className={"inline-flex items-center gap-0.5 font-body-sm text-body-sm text-primary hover:text-on-surface transition-colors font-medium"} href={"#"}>
                      {"Manage"}
                      <span className={"material-symbols-outlined text-[16px]"}>
                        {"chevron_right"}
                      </span>
                    </a>
                  </div>
                </div>
                <div className={"group relative flex flex-col justify-between p-space-lg rounded-xl bg-surface-container hover:bg-surface-container-high transition-all duration-200"}>
                  <div>
                    <div className={"flex items-start justify-between gap-space-sm mb-space-md"}>
                      <div className={"flex items-center gap-space-sm"}>
                        <div className={"w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary-fixed shadow-sm"}>
                          <svg className={"w-6 h-6"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} viewbox={"0 0 24 24"}>
                            <line x1={"4"} x2={"20"} y1={"9"} y2={"9"}></line>
                            <line x1={"4"} x2={"20"} y1={"15"} y2={"15"}></line>
                            <line x1={"10"} x2={"8"} y1={"3"} y2={"21"}></line>
                            <line x1={"16"} x2={"14"} y1={"3"} y2={"21"}></line>
                          </svg>
                        </div>
                        <div className={"flex flex-col"}>
                          <span className={"font-headline-sm text-body-lg text-on-surface font-semibold"}>
                            {"Slack"}
                          </span>
                          <span className={"font-mono-badge text-[10px] text-outline"}>
                            {"SLACK.BOT.SOCKET"}
                          </span>
                        </div>
                      </div>
                      <span className={"px-2 py-0.5 rounded-full bg-surface-container-lowest font-mono-badge text-[10px] text-tertiary uppercase"}>
                        {"ChatOps"}
                      </span>
                    </div>
                    <p className={"font-body-sm text-body-sm text-on-surface-variant mb-space-lg line-clamp-2"}>
                      {"Dispatches automated RCA cards, interactive mitigation runbooks, and real-time war room triage digests."}
                    </p>
                  </div>
                  <div className={"pt-space-md border-t border-[#232329] flex items-center justify-between gap-space-xs mt-auto"}>
                    <div className={"flex flex-col"}>
                      <div className={"flex items-center gap-1.5 font-mono-badge text-[11px] text-tertiary font-semibold"}>
                        <span className={"w-1.5 h-1.5 rounded-full bg-tertiary"}></span>
                        {"Connected"}
                      </div>
                      <span className={"font-mono-code text-[11px] text-outline truncate max-w-[180px]"}>
                        {"routed: #incident-war-room"}
                      </span>
                    </div>
                    <a className={"inline-flex items-center gap-0.5 font-body-sm text-body-sm text-primary hover:text-on-surface transition-colors font-medium"} href={"#"}>
                      {"Manage"}
                      <span className={"material-symbols-outlined text-[16px]"}>
                        {"chevron_right"}
                      </span>
                    </a>
                  </div>
                </div>
                <div className={"group relative flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-low/60 hover:bg-surface-container-low transition-all duration-200 opacity-70 hover:opacity-100"}>
                  <div>
                    <div className={"flex items-start justify-between gap-space-sm mb-space-md"}>
                      <div className={"flex items-center gap-space-sm"}>
                        <div className={"w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-outline"}>
                          <svg className={"w-5 h-5"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} viewbox={"0 0 24 24"}>
                            <path d={"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}></path>
                            <path d={"M13.73 21a2 2 0 0 1-3.46 0"}></path>
                          </svg>
                        </div>
                        <div className={"flex flex-col"}>
                          <span className={"font-headline-sm text-body-lg text-on-surface-variant font-semibold"}>
                            {"PagerDuty"}
                          </span>
                          <span className={"font-mono-badge text-[10px] text-outline-variant"}>
                            {"PAGERDUTY.EVENTS.V2"}
                          </span>
                        </div>
                      </div>
                      <span className={"px-2 py-0.5 rounded-full bg-surface-container-lowest font-mono-badge text-[10px] text-outline uppercase"}>
                        {"Alerting"}
                      </span>
                    </div>
                    <p className={"font-body-sm text-body-sm text-outline mb-space-lg line-clamp-2"}>
                      {"Triggers autonomic causal agent swarm directly from Sev-1/Sev-2 incident alert payloads."}
                    </p>
                  </div>
                  <div className={"pt-space-md border-t border-[#232329] flex items-center justify-between gap-space-xs mt-auto"}>
                    <div className={"flex items-center gap-1.5 font-mono-badge text-[11px] text-outline"}>
                      <span className={"w-1.5 h-1.5 rounded-full bg-outline-variant"}></span>
                      {"Not configured"}
                    </div>
                    <button className={"px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm font-semibold hover:bg-surface-container-high transition-colors"}>
                      {"Connect"}
                    </button>
                  </div>
                </div>
                <div className={"group relative flex flex-col justify-between p-space-lg rounded-xl bg-surface-container hover:bg-surface-container-high transition-all duration-200"}>
                  <div>
                    <div className={"flex items-start justify-between gap-space-sm mb-space-md"}>
                      <div className={"flex items-center gap-space-sm"}>
                        <div className={"w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm"}>
                          <svg className={"w-6 h-6"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} viewbox={"0 0 24 24"}>
                            <path d={"M22 12h-4l-3 9L9 3l-3 9H2"}></path>
                          </svg>
                        </div>
                        <div className={"flex flex-col"}>
                          <span className={"font-headline-sm text-body-lg text-on-surface font-semibold"}>
                            {"Cloud Monitoring Alerts"}
                          </span>
                          <span className={"font-mono-badge text-[10px] text-outline"}>
                            {"GCP.MONITORING.NOTIFY"}
                          </span>
                        </div>
                      </div>
                      <span className={"px-2 py-0.5 rounded-full bg-surface-container-lowest font-mono-badge text-[10px] text-tertiary uppercase"}>
                        {"Alerting"}
                      </span>
                    </div>
                    <p className={"font-body-sm text-body-sm text-on-surface-variant mb-space-lg line-clamp-2"}>
                      {"Native webhook integration ingesting GCP metric alert thresholds and multi-condition incident triggers."}
                    </p>
                  </div>
                  <div className={"pt-space-md border-t border-[#232329] flex items-center justify-between gap-space-xs mt-auto"}>
                    <div className={"flex flex-col"}>
                      <div className={"flex items-center gap-1.5 font-mono-badge text-[11px] text-tertiary font-semibold"}>
                        <span className={"w-1.5 h-1.5 rounded-full bg-tertiary"}></span>
                        {"Connected"}
                      </div>
                      <span className={"font-mono-code text-[11px] text-outline truncate max-w-[180px]"}>
                        {"ingest: 24 policies active"}
                      </span>
                    </div>
                    <a className={"inline-flex items-center gap-0.5 font-body-sm text-body-sm text-primary hover:text-on-surface transition-colors font-medium"} href={"#"}>
                      {"Manage"}
                      <span className={"material-symbols-outlined text-[16px]"}>
                        {"chevron_right"}
                      </span>
                    </a>
                  </div>
                </div>
                <div className={"group relative flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-low/60 hover:bg-surface-container-low transition-all duration-200 opacity-70 hover:opacity-100"}>
                  <div>
                    <div className={"flex items-start justify-between gap-space-sm mb-space-md"}>
                      <div className={"flex items-center gap-space-sm"}>
                        <div className={"w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-outline"}>
                          <svg className={"w-5 h-5"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} viewbox={"0 0 24 24"}>
                            <path d={"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}></path>
                            <polyline points={"15 3 21 3 21 9"}></polyline>
                            <line x1={"10"} x2={"21"} y1={"14"} y2={"3"}></line>
                          </svg>
                        </div>
                        <div className={"flex flex-col"}>
                          <span className={"font-headline-sm text-body-lg text-on-surface-variant font-semibold"}>
                            {"Outbound Webhook"}
                          </span>
                          <span className={"font-mono-badge text-[10px] text-outline-variant"}>
                            {"REST.JSON.RELAY"}
                          </span>
                        </div>
                      </div>
                      <span className={"px-2 py-0.5 rounded-full bg-surface-container-lowest font-mono-badge text-[10px] text-outline uppercase"}>
                        {"Webhooks"}
                      </span>
                    </div>
                    <p className={"font-body-sm text-body-sm text-outline mb-space-lg line-clamp-2"}>
                      {"Streams real-time RCA payloads, root cause graphs, and confirmed hypotheses to external SOAR or SIEM tools."}
                    </p>
                  </div>
                  <div className={"pt-space-md border-t border-[#232329] flex items-center justify-between gap-space-xs mt-auto"}>
                    <div className={"flex items-center gap-1.5 font-mono-badge text-[11px] text-outline"}>
                      <span className={"w-1.5 h-1.5 rounded-full bg-outline-variant"}></span>
                      {"Not configured"}
                    </div>
                    <button className={"px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm font-semibold hover:bg-surface-container-high transition-colors"}>
                      {"Connect"}
                    </button>
                  </div>
                </div>
              </div>
              <div className={"mt-space-2xl p-space-xl rounded-xl bg-surface-container relative overflow-hidden shadow-2xl"}>
                <div className={"absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-container to-transparent"}></div>
                <div className={"flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pb-space-lg border-b border-[#232329]"}>
                  <div className={"flex items-center gap-space-sm"}>
                    <div className={"w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary"}>
                      <span className={"material-symbols-outlined text-[22px]"}>
                        {"hub"}
                      </span>
                    </div>
                    <div className={"flex flex-col"}>
                      <div className={"flex items-center gap-space-xs"}>
                        <h2 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
                          {"Alert Ingest Endpoint"}
                        </h2>
                        <span className={"font-mono-badge text-[10px] px-2 py-0.5 rounded bg-primary-container/20 text-primary-fixed uppercase font-semibold"}>
                          {"HTTPS Receiver"}
                        </span>
                      </div>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                        {"Send HTTP POST webhook alerts from any monitoring system directly into IncidentIQ's causal triage engine."}
                      </p>
                    </div>
                  </div>
                  <button className={"flex items-center gap-space-xs px-4 py-2 rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container-high font-body-sm text-body-sm font-semibold transition-colors shrink-0"} id={"send-ping-btn"}>
                    <span className={"material-symbols-outlined text-[18px] text-tertiary"}>
                      {"bolt"}
                    </span>
                    <span>
                      {"Send Test Webhook Ping"}
                    </span>
                  </button>
                </div>
                <div className={"grid grid-cols-1 lg:grid-cols-2 gap-space-lg py-space-xl"}>
                  <div className={"flex flex-col gap-space-xs"}>
                    <div className={"flex items-center justify-between font-mono-badge text-mono-badge"}>
                      <span className={"text-outline uppercase tracking-wider"}>
                        {"ENDPOINT WEBHOOK URL (HTTPS)"}
                      </span>
                      <span className={"text-tertiary"}>
                        {"TLS 1.3 Strict"}
                      </span>
                    </div>
                    <div className={"relative flex items-center bg-surface-container-lowest rounded-xl overflow-hidden p-1.5 focus-within:ring-1 focus-within:ring-primary-container"}>
                      <span className={"material-symbols-outlined text-outline text-[18px] ml-2 shrink-0"}>
                        {"link"}
                      </span>
                      <input className={"w-full bg-transparent border-none text-on-surface font-mono-code text-mono-code px-space-xs focus:outline-none truncate"} id={"webhook-url-input"} readOnly type={"text"} value={"https://ingest.incidentiq.io/v1/webhooks/gcp-monitoring/tenant-8492-us"} />
                      <button className={"p-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors shrink-0 flex items-center justify-center"} id={"copy-url-btn"} title={"Copy URL"}>
                        <span className={"material-symbols-outlined text-[18px]"}>
                          {"content_copy"}
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className={"flex flex-col gap-space-xs"}>
                    <div className={"flex items-center justify-between font-mono-badge text-mono-badge"}>
                      <span className={"text-outline uppercase tracking-wider"}>
                        {"INSPECTION & AUTH TOKEN"}
                      </span>
                      <span className={"text-outline-variant"}>
                        {"Rotated 14d ago"}
                      </span>
                    </div>
                    <div className={"relative flex items-center bg-surface-container-lowest rounded-xl overflow-hidden p-1.5 focus-within:ring-1 focus-within:ring-primary-container"}>
                      <span className={"material-symbols-outlined text-outline text-[18px] ml-2 shrink-0"}>
                        {"key"}
                      </span>
                      <input className={"w-full bg-transparent border-none text-on-surface font-mono-code text-mono-code px-space-xs focus:outline-none truncate"} id={"token-input"} readOnly type={"password"} value={"iiq_sec_99a80e15998a44b7d1591f4b1"} />
                      <div className={"flex items-center gap-1 shrink-0"}>
                        <button className={"p-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors flex items-center justify-center"} id={"toggle-token-btn"} title={"Toggle Visibility"}>
                          <span className={"material-symbols-outlined text-[18px]"} id={"token-eye-icon"}>
                            {"visibility"}
                          </span>
                        </button>
                        <button className={"px-3 py-1.5 rounded-lg bg-surface-container-low text-secondary font-body-sm text-body-sm font-semibold hover:bg-surface-container transition-colors flex items-center gap-1"} id={"rotate-token-btn"}>
                          <span className={"material-symbols-outlined text-[16px]"}>
                            {"sync"}
                          </span>
                          <span>
                            {"Rotate"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"p-space-lg rounded-xl bg-surface-container-low"}>
                  <div className={"flex items-center gap-space-xs mb-space-md text-on-surface"}>
                    <span className={"material-symbols-outlined text-[20px] text-tertiary"}>
                      {"terminal"}
                    </span>
                    <span className={"font-headline-sm text-body-base font-semibold"}>
                      {"Cloud Monitoring notification channel setup"}
                    </span>
                  </div>
                  <div className={"space-y-space-md"}>
                    <div className={"flex items-start gap-space-md"}>
                      <div className={"w-6 h-6 rounded-full bg-surface-container flex items-center justify-center font-mono-badge text-mono-badge text-primary shrink-0 mt-0.5"}>
                        {"1"}
                      </div>
                      <p className={"font-body-base text-body-sm text-on-surface-variant"}>
                        {"In Google Cloud Console, navigate to"}
                        <span className={"text-on-surface font-semibold"}>
                          {"Monitoring > Alerting > Edit Notification Channels"}
                        </span>
                        {"and select"}
                        <span className={"text-on-surface font-semibold"}>
                          {"Webhooks"}
                        </span>
                        {"."}
                      </p>
                    </div>
                    <div className={"flex items-start gap-space-md"}>
                      <div className={"w-6 h-6 rounded-full bg-surface-container flex items-center justify-center font-mono-badge text-mono-badge text-primary shrink-0 mt-0.5"}>
                        {"2"}
                      </div>
                      <p className={"font-body-base text-body-sm text-on-surface-variant"}>
                        {"Paste the Ingest Endpoint URL above and enable"}
                        <span className={"text-on-surface font-semibold"}>
                          {"Use HTTP Basic Auth"}
                        </span>
                        {"with token in authorization header or pass custom header"}
                        <code className={"px-1.5 py-0.5 rounded bg-surface-container text-primary font-mono-code text-[12px]"}>
                          {"X-IncidentIQ-Token"}
                        </code>
                        {"."}
                      </p>
                    </div>
                    <div className={"flex items-start gap-space-md"}>
                      <div className={"w-6 h-6 rounded-full bg-surface-container flex items-center justify-center font-mono-badge text-mono-badge text-primary shrink-0 mt-0.5"}>
                        {"3"}
                      </div>
                      <p className={"font-body-base text-body-sm text-on-surface-variant"}>
                        {"Bind this channel to your active alerting policies. IncidentIQ will auto-parse Google Cloud incident payload schemas and start causal graph synthesis in"}
                        <span className={"text-on-surface font-mono-code font-semibold"}>
                          {"< 15s"}
                        </span>
                        {"."}
                      </p>
                    </div>
                  </div>
                  <div className={"mt-space-lg p-space-md rounded-lg bg-surface-container-lowest hidden font-mono-code text-[12px] leading-[20px] text-on-surface-variant"} id={"telemetry-ping-console"}>
                    <div className={"flex items-center justify-between pb-2 mb-2 border-b border-[#232329] text-outline font-mono-badge text-[10px]"}>
                      <span>
                        {"TEST_PROBE_SESSION_ID: #pb-98442-gcp"}
                      </span>
                      <span className={"text-tertiary"}>
                        {"HTTP 200 OK • 12ms latency"}
                      </span>
                    </div>
                    <div className={"text-[#888]"}>
                      {"> POST /v1/webhooks/gcp-monitoring/tenant-8492-us"}
                    </div>
                    <div className={"text-[#888]"}>
                      {"> Host: ingest.incidentiq.io"}
                    </div>
                    <div className={"text-[#888]"}>
                      {"> Authorization: Bearer iiq_sec_99a8*******************f4b1"}
                    </div>
                    <div className={"text-tertiary mt-1"}>
                      {"✓ Ingest signature validated: Google-Cloud-Alerting/1.0"}
                    </div>
                    <div className={"text-on-surface"}>
                      {"✓ Payload parsed: 1 synthetic alert trigger dispatched to triage queue"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ScreenNav>
  );
}

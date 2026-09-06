import { ScreenNav } from "@/components/ScreenNav";

export default function SystemStatesPage() {
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
            <div className={"max-w-max-content-width w-full mx-auto flex flex-col gap-space-xl"}>
              <section className={"flex flex-col gap-space-xs"}>
                <div className={"flex items-center gap-space-xs"}>
                  <span className={"font-mono-badge text-mono-badge uppercase tracking-wider text-primary"}>
                    {"INCIDENTS"}
                  </span>
                  <span className={"font-mono-badge text-mono-badge text-outline"}>
                    {"/"}
                  </span>
                  <span className={"font-mono-badge text-mono-badge uppercase tracking-wider text-on-surface-variant"}>
                    {"SYSTEM STATES"}
                  </span>
                  <span className={"ml-space-xs px-space-xs py-0.5 rounded-full bg-surface-container-high font-mono-badge text-[10px] text-tertiary"}>
                    {"STABLE v2.14.0"}
                  </span>
                </div>
                <h1 className={"font-headline-lg text-headline-lg text-on-surface tracking-tight"}>
                  {"System States & Fallbacks"}
                </h1>
                <p className={"font-body-base text-body-base text-on-surface-variant max-w-3xl"}>
                  {"Standard empty, error, degraded, and asynchronous processing views across IncidentIQ dashboards and analysis pipelines."}
                </p>
              </section>
              <div className={"grid grid-cols-1 md:grid-cols-2 gap-space-lg w-full"}>
                <div className={"relative bg-surface-container-low rounded-xl p-card-padding min-h-[380px] flex flex-col items-center justify-center text-center shadow-lg overflow-hidden group"}>
                  <div className={"absolute -top-16 -left-16 w-48 h-48 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"}></div>
                  <div className={"absolute top-4 right-4 flex items-center gap-1.5 font-mono-badge text-mono-badge text-outline"}>
                    <span className={"w-1.5 h-1.5 rounded-full bg-tertiary"}></span>
                    <span>
                      {"STATE_01 // NOMINAL"}
                    </span>
                  </div>
                  <div className={"flex flex-col items-center max-w-md w-full my-auto"}>
                    <div className={"w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-space-lg shadow-inner"}>
                      <span className={"material-symbols-outlined text-outline text-[32px] group-hover:text-primary transition-colors"}>
                        {"verified_user"}
                      </span>
                    </div>
                    <h2 className={"font-headline-md text-headline-md text-on-surface mb-space-xs tracking-tight"}>
                      {"Nothing has broken yet"}
                    </h2>
                    <p className={"font-body-base text-body-base text-on-surface-variant mb-space-xl leading-relaxed"}>
                      {"All systems are operating within normal SLO thresholds. No telemetry anomalies or alerts triggered across active monitors."}
                    </p>
                    <button className={"inline-flex items-center gap-space-xs px-space-lg py-2.5 rounded-lg bg-primary-container text-on-primary font-body-base text-body-base font-semibold hover:bg-inverse-primary active:scale-[0.98] transition-all shadow-md"}>
                      <span className={"material-symbols-outlined text-[18px]"}>
                        {"auto_fix_high"}
                      </span>
                      <span>
                        {"Run a test incident"}
                      </span>
                    </button>
                  </div>
                  <div className={"w-full pt-space-md mt-auto flex items-center justify-between text-on-surface-variant/60 font-mono-badge text-mono-badge"}>
                    <span>
                      {"PIPELINE: ACTIVE"}
                    </span>
                    <span>
                      {"0 ANOMALIES LOGGED"}
                    </span>
                  </div>
                </div>
                <div className={"relative bg-surface-container-low rounded-xl p-card-padding min-h-[380px] flex flex-col items-center justify-center text-center shadow-lg overflow-hidden group"}>
                  <div className={"absolute -top-16 -right-16 w-48 h-48 rounded-full bg-error-container/20 blur-3xl pointer-events-none"}></div>
                  <div className={"absolute top-4 right-4 flex items-center gap-1.5 font-mono-badge text-mono-badge text-error"}>
                    <span className={"w-1.5 h-1.5 rounded-full bg-error animate-ping"}></span>
                    <span>
                      {"STATE_02 // FAILURE"}
                    </span>
                  </div>
                  <div className={"flex flex-col items-center max-w-md w-full my-auto"}>
                    <div className={"w-16 h-16 rounded-full bg-error-container/25 flex items-center justify-center mb-space-lg shadow-[0_0_24px_rgba(255,59,92,0.18)]"}>
                      <span className={"material-symbols-outlined text-error text-[32px]"}>
                        {"warning"}
                      </span>
                    </div>
                    <h2 className={"font-headline-md text-headline-md text-on-surface mb-space-xs tracking-tight"}>
                      {"Analysis could not complete"}
                    </h2>
                    <p className={"font-body-base text-body-base text-on-surface-variant mb-space-md leading-relaxed"}>
                      {"Causal engine encountered an unhandled pipeline exception during log correlation and root cause isolation."}
                    </p>
                    <div className={"w-full bg-surface-container-lowest px-space-md py-space-xs rounded-lg mb-space-xl flex items-center justify-between gap-space-xs text-left"}>
                      <div className={"flex items-center gap-space-xs min-w-0"}>
                        <span className={"material-symbols-outlined text-error text-[16px] shrink-0"}>
                          {"report"}
                        </span>
                        <span className={"font-mono-code text-mono-code text-error truncate"}>
                          {"ERR_TELEMETRY_GAP: Log sink stream dropped 4,210 frames"}
                        </span>
                      </div>
                      <span className={"font-mono-badge text-mono-badge text-outline shrink-0"}>
                        {"P0"}
                      </span>
                    </div>
                    <button className={"inline-flex items-center gap-space-xs px-space-lg py-2.5 rounded-lg bg-surface-container-high text-on-surface font-body-base text-body-base font-semibold hover:bg-surface-variant active:scale-[0.98] transition-all shadow-sm"}>
                      <span className={"material-symbols-outlined text-[18px]"}>
                        {"replay"}
                      </span>
                      <span>
                        {"Retry analysis"}
                      </span>
                    </button>
                  </div>
                  <div className={"w-full pt-space-md mt-auto flex items-center justify-between text-on-surface-variant/60 font-mono-badge text-mono-badge"}>
                    <span>
                      {"EXIT_CODE: 137"}
                    </span>
                    <span>
                      {"STREAM_OFFSET: #78291A"}
                    </span>
                  </div>
                </div>
                <div className={"relative bg-surface-container-low rounded-xl p-card-padding min-h-[380px] flex flex-col items-center justify-center text-center shadow-lg overflow-hidden group"}>
                  <div className={"absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-tertiary/10 blur-3xl pointer-events-none"}></div>
                  <div className={"absolute top-4 right-4 flex items-center gap-1.5 font-mono-badge text-mono-badge text-outline"}>
                    <span className={"w-1.5 h-1.5 rounded-full bg-outline"}></span>
                    <span>
                      {"STATE_03 // DISCONNECTED"}
                    </span>
                  </div>
                  <div className={"flex flex-col items-center max-w-md w-full my-auto"}>
                    <div className={"w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-space-lg shadow-inner"}>
                      <span className={"material-symbols-outlined text-outline text-[32px] group-hover:text-tertiary transition-colors"}>
                        {"electrical_services"}
                      </span>
                    </div>
                    <h2 className={"font-headline-md text-headline-md text-on-surface mb-space-xs tracking-tight"}>
                      {"Connect a log source to begin"}
                    </h2>
                    <p className={"font-body-base text-body-base text-on-surface-variant mb-space-xl leading-relaxed"}>
                      {"IncidentIQ requires an active Cloud Logging sink to ingest traces, metrics, and deployment deltas in real-time."}
                    </p>
                    <button className={"inline-flex items-center gap-space-xs px-space-lg py-2.5 rounded-lg bg-primary-container text-on-primary font-body-base text-body-base font-semibold hover:bg-inverse-primary active:scale-[0.98] transition-all shadow-md"}>
                      <span className={"material-symbols-outlined text-[18px]"}>
                        {"cloud_sync"}
                      </span>
                      <span>
                        {"Connect Google Cloud"}
                      </span>
                    </button>
                  </div>
                  <div className={"w-full pt-space-md mt-auto flex items-center justify-between text-on-surface-variant/60 font-mono-badge text-mono-badge"}>
                    <span>
                      {"IN_BAND_SINKS: 0"}
                    </span>
                    <span>
                      {"AWAITING_INGESTION"}
                    </span>
                  </div>
                </div>
                <div className={"relative bg-surface-container-low rounded-xl p-card-padding min-h-[380px] flex flex-col items-center justify-center text-center shadow-lg overflow-hidden"}>
                  <div className={"absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-primary-container/20 blur-3xl pointer-events-none"}></div>
                  <div className={"absolute top-4 right-4 flex items-center gap-1.5 font-mono-badge text-mono-badge text-primary"}>
                    <span className={"w-1.5 h-1.5 rounded-full bg-primary animate-ping"}></span>
                    <span>
                      {"STATE_04 // SYNTHESIZING"}
                    </span>
                  </div>
                  <div className={"flex flex-col items-center max-w-md w-full my-auto"}>
                    <div className={"relative w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-space-lg"}>
                      <div className={"absolute inset-0 rounded-full bg-primary-container/30 animate-ping pointer-events-none"}></div>
                      <span className={"material-symbols-outlined text-primary text-[32px] animate-spin"} style={{"animationDuration":"4s"}}>
                        {"motion_sensor_active"}
                      </span>
                    </div>
                    <h2 className={"font-headline-md text-headline-md text-on-surface mb-space-xs tracking-tight flex items-center gap-2"}>
                      {"Analysing"}
                      <span className={"inline-flex gap-1"}>
                        <span className={"w-1 h-1 rounded-full bg-primary animate-bounce"}></span>
                        <span className={"w-1 h-1 rounded-full bg-primary animate-bounce [animation-delay:0.15s]"}></span>
                        <span className={"w-1 h-1 rounded-full bg-primary animate-bounce [animation-delay:0.3s]"}></span>
                      </span>
                    </h2>
                    <p className={"font-body-base text-body-base text-on-surface-variant mb-space-lg leading-relaxed"}>
                      {"Autonomic agents are correlating logs, traces, and git deploy deltas across your cluster..."}
                    </p>
                    <div className={"w-full h-1.5 bg-surface-container rounded-full overflow-hidden mb-space-lg relative"}>
                      <div className={"absolute top-0 bottom-0 left-0 bg-gradient-to-r from-transparent via-primary to-transparent w-1/2 rounded-full animate-[shimmer_1.8s_infinite] [animation-timing-function:ease-in-out]"}></div>
                    </div>
                    <div className={"w-full bg-surface-container-lowest rounded-lg p-space-xs flex items-center justify-between"}>
                      <div className={"flex flex-col items-center px-space-xs flex-1"}>
                        <div className={"w-5 h-5 rounded-full bg-surface-container flex items-center justify-center text-[#10B981] mb-1"}>
                          <span className={"material-symbols-outlined text-[13px] font-bold"}>
                            {"check"}
                          </span>
                        </div>
                        <span className={"font-mono-badge text-[10px] text-on-surface font-semibold truncate w-full text-center"}>
                          {"Triage"}
                        </span>
                      </div>
                      <span className={"text-surface-variant font-mono-code text-xs"}>
                        {"›"}
                      </span>
                      <div className={"flex flex-col items-center px-space-xs flex-1"}>
                        <div className={"w-5 h-5 rounded-full bg-surface-container flex items-center justify-center text-[#10B981] mb-1"}>
                          <span className={"material-symbols-outlined text-[13px] font-bold"}>
                            {"check"}
                          </span>
                        </div>
                        <span className={"font-mono-badge text-[10px] text-on-surface font-semibold truncate w-full text-center"}>
                          {"Log analysis"}
                        </span>
                      </div>
                      <span className={"text-surface-variant font-mono-code text-xs"}>
                        {"›"}
                      </span>
                      <div className={"flex flex-col items-center px-space-xs flex-1"}>
                        <div className={"w-5 h-5 rounded-full bg-primary-container/30 flex items-center justify-center mb-1"}>
                          <span className={"w-2 h-2 rounded-full bg-primary animate-ping"}></span>
                        </div>
                        <span className={"font-mono-badge text-[10px] text-primary font-semibold truncate w-full text-center"}>
                          {"Deploy delta"}
                        </span>
                      </div>
                      <span className={"text-surface-variant font-mono-code text-xs"}>
                        {"›"}
                      </span>
                      <div className={"flex flex-col items-center px-space-xs flex-1 opacity-40"}>
                        <div className={"w-5 h-5 rounded-full bg-surface-container flex items-center justify-center mb-1"}>
                          <span className={"w-1.5 h-1.5 rounded-full bg-outline"}></span>
                        </div>
                        <span className={"font-mono-badge text-[10px] text-on-surface-variant truncate w-full text-center"}>
                          {"Synthesis"}
                        </span>
                      </div>
                      <span className={"text-surface-variant font-mono-code text-xs"}>
                        {"›"}
                      </span>
                      <div className={"flex flex-col items-center px-space-xs flex-1 opacity-40"}>
                        <div className={"w-5 h-5 rounded-full bg-surface-container flex items-center justify-center mb-1"}>
                          <span className={"w-1.5 h-1.5 rounded-full bg-outline"}></span>
                        </div>
                        <span className={"font-mono-badge text-[10px] text-on-surface-variant truncate w-full text-center"}>
                          {"Report"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={"w-full pt-space-md mt-auto flex items-center justify-between text-on-surface-variant/60 font-mono-badge text-mono-badge"}>
                    <span>
                      {"TASK: CORRELATE_COMMIT_SHA"}
                    </span>
                    <span>
                      {"EST_REMAINING: ~14S"}
                    </span>
                  </div>
                </div>
              </div>
              <div className={"w-full bg-surface-container-low rounded-lg p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md text-on-surface-variant font-mono-code text-mono-code"}>
                <div className={"flex items-center gap-space-sm"}>
                  <span className={"material-symbols-outlined text-[18px] text-tertiary"}>
                    {"info"}
                  </span>
                  <span>
                    {"Fallback view matrix adheres to standard RFC-7807 telemetry contracts."}
                  </span>
                </div>
                <div className={"flex items-center gap-space-md font-mono-badge text-mono-badge"}>
                  <span className={"text-outline"}>
                    {"ENV: CLOUD-US-EAST-1"}
                  </span>
                  <span className={"text-on-surface font-semibold"}>
                    {"ALL CONTRACTS ACTIVE"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ScreenNav>
  );
}

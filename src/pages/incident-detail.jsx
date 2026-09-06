import { Link } from "@tanstack/react-router";

export default function IncidentDetailPage({ incidentId = "INC-8492" }) {
  const displayIncidentId = incidentId.toUpperCase();

  return (
    <div className="min-h-screen bg-background text-on-background">
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
              <Link aria-current={"page"} className={"flex items-center gap-space-sm px-space-md py-space-sm rounded transition-colors bg-surface-container-low text-on-surface font-semibold relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary-container before:rounded-r"} to={"/incidents"}>
                <span className={"material-symbols-outlined text-[20px]"}>
                  {"emergency_home"}
                </span>
                <span>
                  {"Incidents"}
                </span>
              </Link>
              <Link className={"flex items-center gap-space-sm px-space-md py-space-sm rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-base text-body-base"} to={"/integrations"}>
                <span className={"material-symbols-outlined text-[20px]"}>
                  {"hub"}
                </span>
                <span>
                  {"Integrations"}
                </span>
              </Link>
              <Link className={"flex items-center gap-space-sm px-space-md py-space-sm rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-base text-body-base"} to={"/api-keys"}>
                <span className={"material-symbols-outlined text-[20px]"}>
                  {"key"}
                </span>
                <span>
                  {"API Keys"}
                </span>
              </Link>
              <Link className={"flex items-center gap-space-sm px-space-md py-space-sm rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-base text-body-base"} to={"/system-states"}>
                <span className={"material-symbols-outlined text-[20px]"}>
                  {"settings"}
                </span>
                <span>
                  {"Settings"}
                </span>
              </Link>
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
              <span className={"font-body-sm text-[11px] leading-3.5 text-on-surface-variant truncate"}>
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
          <div className={"flex flex-col w-full max-w-340 mx-auto pb-space-3xl gap-space-xl"}>
            <div className={"flex flex-wrap items-center justify-between gap-space-md pt-space-xs"}>
              <div className={"flex items-center gap-space-xs font-mono-base text-mono-base text-on-surface-variant"}>
                <Link className={"hover:text-on-surface transition-colors flex items-center gap-1"} to={"/incidents"}>
                  <span className={"material-symbols-outlined text-[16px]"}>
                    {"folder_open"}
                  </span>
                  <span>
                    {"Incidents"}
                  </span>
                </Link>
                <span className={"text-outline-variant"}>
                  {"/"}
                </span>
                <span className={"text-primary font-bold"}>
                  {displayIncidentId}
                </span>
                <span className={"text-outline-variant"}>
                  {"/"}
                </span>
                <span className={"text-on-surface font-semibold"}>
                  {"Root Cause Analysis"}
                </span>
              </div>
              <div className={"flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-high shadow-sm"}>
                <span className={"inline-block w-2 h-2 rounded-full bg-primary animate-pulse"}></span>
                <span className={"font-mono-badge text-mono-badge text-on-surface uppercase tracking-wider font-semibold"}>
                  {"REALTIME CAUSAL ENGINE • VERIFIED RCA"}
                </span>
              </div>
            </div>
            <section className={"relative bg-surface-container-low rounded-xl p-space-xl shadow-xl overflow-hidden"}>
              <div className={"absolute -top-24 left-1/4 w-150 h-75 bg-primary-container/15 rounded-full blur-3xl pointer-events-none z-0"}></div>
              <div className={"relative z-10 flex flex-col gap-space-md"}>
                <div className={"flex flex-wrap items-center justify-between gap-space-md"}>
                  <div className={"flex flex-wrap items-center gap-space-xs"}>
                    <span className={"px-space-sm py-1 rounded bg-surface-container-highest font-mono-base text-mono-base font-bold text-on-surface tracking-tight"}>
                      {displayIncidentId}
                    </span>
                    <span className={"flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-secondary-container/20 text-secondary font-mono-badge text-mono-badge font-semibold uppercase"}>
                      <span className={"w-1.5 h-1.5 rounded-full bg-secondary"}></span>
                      {"CRITICAL"}
                    </span>
                    <span className={"flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-primary-container/25 text-primary-fixed font-mono-badge text-mono-badge font-semibold uppercase"}>
                      <span className={"w-1.5 h-1.5 rounded-full bg-primary-fixed"}></span>
                      {"RCA Complete"}
                    </span>
                  </div>
                  <div className={"flex items-center gap-space-xs"}>
                    <button className={"flex items-center gap-1.5 px-space-md py-2 rounded bg-surface-container-high text-on-surface hover:bg-surface-variant transition-colors font-body-sm text-body-sm font-medium"}>
                      <span className={"material-symbols-outlined text-[18px]"}>
                        {"download"}
                      </span>
                      <span>
                        {"Export report"}
                      </span>
                    </button>
                    <button className={"w-9 h-9 flex items-center justify-center rounded bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors"} title={"Share incident"}>
                      <span className={"material-symbols-outlined text-[18px]"}>
                        {"share"}
                      </span>
                    </button>
                    <button className={"flex items-center gap-1.5 px-space-md py-2 rounded bg-primary-container hover:bg-primary-container/90 text-on-primary-container transition-all font-body-sm text-body-sm font-semibold shadow-md"}>
                      <span className={"material-symbols-outlined text-[18px]"}>
                        {"cached"}
                      </span>
                      <span>
                        {"Re-run analysis"}
                      </span>
                    </button>
                  </div>
                </div>
                <h1 className={"font-headline-lg text-headline-lg text-on-surface tracking-tight"}>
                  {"High HTTP 504 Gateway Timeout Rate on"}
                  <span className={"text-secondary font-bold"}>
                    {"checkout-service"}
                  </span>
                  {"during peak traffic"}
                </h1>
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xs pt-space-xs font-mono-code text-mono-code text-on-surface-variant"}>
                  <div className={"bg-surface-container-lowest/80 px-space-sm py-1.5 rounded truncate"}>
                    <span className={"text-outline"}>
                      {"Reported:"}
                    </span>
                    <span className={"text-on-surface"}>
                      {"03:14:02 UTC"}
                    </span>
                  </div>
                  <div className={"bg-surface-container-lowest/80 px-space-sm py-1.5 rounded truncate"}>
                    <span className={"text-outline"}>
                      {"Duration:"}
                    </span>
                    <span className={"text-primary font-semibold"}>
                      {"42.8s (ML fast)"}
                    </span>
                  </div>
                  <div className={"bg-surface-container-lowest/80 px-space-sm py-1.5 rounded truncate"}>
                    <span className={"text-outline"}>
                      {"Log:"}
                    </span>
                    <span className={"text-on-surface"}>
                      {"prod-us-east1-a"}
                    </span>
                  </div>
                  <div className={"bg-surface-container-lowest/80 px-space-sm py-1.5 rounded truncate"}>
                    <span className={"text-outline"}>
                      {"Repo:"}
                    </span>
                    <span className={"text-primary"}>
                      {"checkout@8f12a4b"}
                    </span>
                  </div>
                  <div className={"bg-surface-container-lowest/80 px-space-sm py-1.5 rounded truncate"}>
                    <span className={"text-outline"}>
                      {"Cluster:"}
                    </span>
                    <span className={"text-on-surface"}>
                      {"k8s-prod-primary-01"}
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section className={"bg-surface-container-low rounded-xl p-space-lg shadow-md"}>
              <div className={"flex items-center justify-between pb-space-sm mb-space-sm"}>
                <div className={"flex items-center gap-space-xs"}>
                  <span className={"material-symbols-outlined text-[18px] text-primary"}>
                    {"account_tree"}
                  </span>
                  <span className={"font-mono-badge text-mono-badge uppercase text-on-surface tracking-wider font-semibold"}>
                    {"Autonomic Agent Execution Graph"}
                  </span>
                </div>
                <span className={"font-mono-code text-body-sm text-tertiary"}>
                  {"All 5 agents converged in 42.8s"}
                </span>
              </div>
              <div className={"relative grid grid-cols-12 items-center gap-2 py-2"}>
                <div className={"col-span-3 flex items-center gap-2 bg-surface-container-high/70 p-space-sm rounded-lg shadow-inner"}>
                  <span className={"w-2.5 h-2.5 rounded-full bg-tertiary shrink-0 shadow-[0_0_8px_rgba(174,198,255,0.7)]"}></span>
                  <div className={"flex flex-col min-w-0"}>
                    <span className={"font-body-sm text-body-sm font-semibold text-on-surface truncate"}>
                      {"1. Triage"}
                    </span>
                    <span className={"font-mono-badge text-[11px] text-tertiary"}>
                      {"completed • 1.2s"}
                    </span>
                  </div>
                </div>
                <div className={"col-span-1 flex flex-col items-center justify-center relative h-20"}>
                  <div className={"w-full h-0.5 bg-primary-container"}></div>
                  <div className={"absolute left-1/2 top-3 bottom-3 w-0.5 bg-primary-container -translate-x-1/2"}></div>
                </div>
                <div className={"col-span-4 flex flex-col gap-2"}>
                  <div className={"flex items-center gap-2 bg-surface-container-high/90 p-space-xs px-space-sm rounded-lg shadow-inner"}>
                    <span className={"w-2 h-2 rounded-full bg-tertiary shrink-0"}></span>
                    <div className={"flex items-center justify-between w-full min-w-0"}>
                      <span className={"font-body-sm text-[12px] font-semibold text-on-surface truncate"}>
                        {"2. Log analysis"}
                      </span>
                      <span className={"font-mono-badge text-[11px] text-tertiary"}>
                        {"14.6s"}
                      </span>
                    </div>
                  </div>
                  <div className={"flex items-center gap-2 bg-surface-container-high/90 p-space-xs px-space-sm rounded-lg shadow-inner"}>
                    <span className={"w-2 h-2 rounded-full bg-tertiary shrink-0"}></span>
                    <div className={"flex items-center justify-between w-full min-w-0"}>
                      <span className={"font-body-sm text-[12px] font-semibold text-on-surface truncate"}>
                        {"3. Deploy correlation"}
                      </span>
                      <span className={"font-mono-badge text-[11px] text-tertiary"}>
                        {"18.2s"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={"col-span-1 flex flex-col items-center justify-center relative h-20"}>
                  <div className={"absolute right-1/2 top-3 bottom-3 w-0.5 bg-primary-container translate-x-1/2"}></div>
                  <div className={"w-full h-0.5 bg-primary-container"}></div>
                </div>
                <div className={"col-span-2 flex items-center gap-2 bg-surface-container-high/70 p-space-sm rounded-lg shadow-inner"}>
                  <span className={"w-2.5 h-2.5 rounded-full bg-tertiary shrink-0 shadow-[0_0_8px_rgba(174,198,255,0.7)]"}></span>
                  <div className={"flex flex-col min-w-0"}>
                    <span className={"font-body-sm text-body-sm font-semibold text-on-surface truncate"}>
                      {"4. Synthesis"}
                    </span>
                    <span className={"font-mono-badge text-[11px] text-tertiary"}>
                      {"completed • 6.4s"}
                    </span>
                  </div>
                </div>
                <div className={"col-span-1 flex items-center gap-1.5 bg-primary-container/20 p-space-sm rounded-lg shadow-inner"}>
                  <span className={"material-symbols-outlined text-primary text-[18px]"}>
                    {"verified"}
                  </span>
                  <div className={"flex flex-col min-w-0"}>
                    <span className={"font-body-sm text-body-sm font-semibold text-on-primary-container truncate"}>
                      {"5. Report"}
                    </span>
                    <span className={"font-mono-badge text-[10px] text-primary"}>
                      {"2.4s"}
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <div className={"grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start"}>
              <div className={"lg:col-span-8 flex flex-col gap-space-lg"}>
                <div className={"flex flex-wrap items-end justify-between gap-space-sm"}>
                  <div>
                    <div className={"flex items-center gap-space-xs"}>
                      <h2 className={"font-headline-md text-headline-md text-on-surface"}>
                        {"Ranked Hypotheses"}
                      </h2>
                      <span className={"px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-mono-badge text-mono-badge"}>
                        {"AI Synthesis"}
                      </span>
                    </div>
                    <p className={"font-body-sm text-body-sm text-on-surface-variant mt-1"}>
                      {"Causal confidence derived from 1,420 distributed traces, 48,000 log events, and git deployment delta."}
                    </p>
                  </div>
                  <div className={"font-mono-badge text-mono-badge text-on-surface-variant bg-surface-container-high px-space-sm py-1 rounded"}>
                    {"3 evaluated • 1 primary identified"}
                  </div>
                </div>
                <article className={"relative bg-surface-container-low rounded-xl p-space-xl shadow-2xl flex flex-col gap-space-lg overflow-hidden"}>
                  <div className={"absolute -top-10 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-primary-container/30 rounded-full blur-2xl pointer-events-none"}></div>
                  <div className={"relative flex flex-col md:flex-row md:items-center justify-between gap-space-md pb-space-md bg-surface-container/40 p-space-md rounded-lg"}>
                    <div className={"flex flex-col gap-1"}>
                      <span className={"inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded bg-primary-container text-on-primary font-mono-badge text-mono-badge font-bold uppercase tracking-wider w-fit"}>
                        <span className={"material-symbols-outlined text-[14px]"}>
                          {"bolt"}
                        </span>
                        {"RANK #1 • PRIMARY CAUSAL DRIVER"}
                      </span>
                      <span className={"font-mono-code text-[12px] text-tertiary"}>
                        {"Deterministic correlation: 0.9482"}
                      </span>
                    </div>
                    <div className={"flex items-center gap-space-md"}>
                      <div className={"flex flex-col items-end"}>
                        <span className={"font-mono-metric text-mono-metric text-secondary font-bold leading-none"}>
                          {"94.8%"}
                        </span>
                        <span className={"font-mono-badge text-mono-badge text-outline uppercase tracking-wider mt-1"}>
                          {"Confidence Score"}
                        </span>
                      </div>
                      <div className={"w-32 h-3 bg-surface-container-highest rounded-full overflow-hidden p-0.5"}>
                        <div className={"h-full bg-linear-to-r from-primary-container to-secondary rounded-full"} style={{"width":"94.8%"}}></div>
                      </div>
                    </div>
                  </div>
                  <div className={"text-on-surface font-headline-sm text-headline-sm leading-relaxed"}>
                    {"Database connection pool exhaustion caused by unindexed query introduced in commit"}
                    <code className={"font-mono-code text-primary bg-surface-container-highest px-1.5 py-0.5 rounded"}>
                      {"sha:8f12a4b"}
                    </code>
                    {"during"}
                    <span className={"text-secondary font-semibold"}>
                      {"v2.10.4 canary rollout"}
                    </span>
                    {"."}
                  </div>
                  <div className={"flex flex-col gap-space-sm bg-surface-container-lowest/90 p-space-md rounded-lg shadow-inner"}>
                    <div className={"flex items-center justify-between"}>
                      <div className={"flex items-center gap-space-xs font-mono-base text-mono-base font-semibold text-on-surface"}>
                        <span className={"material-symbols-outlined text-primary text-[20px]"}>
                          {"fact_check"}
                        </span>
                        <span>
                          {"Corroborated Evidence (4 items verified)"}
                        </span>
                      </div>
                      <span className={"font-mono-badge text-mono-badge text-tertiary"}>
                        {"100% Signal Alignment"}
                      </span>
                    </div>
                    <div className={"flex flex-col gap-space-xs mt-1"}>
                      <div className={"p-space-sm rounded bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-2"}>
                        <div className={"flex items-start gap-space-xs"}>
                          <span className={"material-symbols-outlined text-secondary text-[18px] mt-0.5"}>
                            {"database"}
                          </span>
                          <div className={"flex flex-col"}>
                            <span className={"font-mono-code text-mono-code text-on-surface font-semibold"}>
                              {"postgres.active_connections >= 5000/5000 (100% cap)"}
                            </span>
                            <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                              {"Connection pool maxed out 90s after checkout-service-v2.10.4 canary started receiving 10% traffic."}
                            </span>
                          </div>
                        </div>
                        <span className={"font-mono-badge text-mono-badge text-secondary bg-secondary-container/20 px-2 py-0.5 rounded whitespace-nowrap self-start md:self-auto"}>
                          {"SATURATED"}
                        </span>
                      </div>
                      <div className={"p-space-sm rounded bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-2"}>
                        <div className={"flex items-start gap-space-xs"}>
                          <span className={"material-symbols-outlined text-primary text-[18px] mt-0.5"}>
                            {"commit"}
                          </span>
                          <div className={"flex flex-col"}>
                            <span className={"font-mono-code text-mono-code text-on-surface font-semibold"}>
                              {"git commit 8f12a4b (\"feat: order idempotency cache check\")"}
                            </span>
                            <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                              {"Added sequential SELECT query on `orders.idempotency_key` without compound index on `tenant_id`."}
                            </span>
                          </div>
                        </div>
                        <span className={"font-mono-badge text-mono-badge text-primary bg-primary-container/20 px-2 py-0.5 rounded whitespace-nowrap self-start md:self-auto"}>
                          {"DELTA INTRODUCED"}
                        </span>
                      </div>
                      <div className={"p-space-sm rounded bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-2"}>
                        <div className={"flex items-start gap-space-xs"}>
                          <span className={"material-symbols-outlined text-tertiary text-[18px] mt-0.5"}>
                            {"conversion_path"}
                          </span>
                          <div className={"flex flex-col"}>
                            <span className={"font-mono-code text-mono-code text-on-surface font-semibold"}>
                              {"trace_id: 48f92f3577c34da6 (p99 latency 8,420ms)"}
                            </span>
                            <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                              {"checkout-service span blocked on db.acquire_connection for 7,980ms leading to gateway 504."}
                            </span>
                          </div>
                        </div>
                        <span className={"font-mono-badge text-mono-badge text-tertiary bg-tertiary-container/20 px-2 py-0.5 rounded whitespace-nowrap self-start md:self-auto"}>
                          {"P99 SPIKE"}
                        </span>
                      </div>
                      <div className={"p-space-sm rounded bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-2"}>
                        <div className={"flex items-start gap-space-xs"}>
                          <span className={"material-symbols-outlined text-secondary text-[18px] mt-0.5"}>
                            {"memory"}
                          </span>
                          <div className={"flex flex-col"}>
                            <span className={"font-mono-code text-mono-code text-on-surface font-semibold"}>
                              {"pod/checkout-service-7d49b5c8-x9kz2 OOMKilled"}
                            </span>
                            <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                              {"Thread pool pile-up caused memory starvation and container crash restart at 03:16:11 UTC."}
                            </span>
                          </div>
                        </div>
                        <span className={"font-mono-badge text-mono-badge text-secondary bg-secondary-container/20 px-2 py-0.5 rounded whitespace-nowrap self-start md:self-auto"}>
                          {"CRASHLOOP"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={"bg-surface-container/60 p-space-md rounded-lg"}>
                    <h4 className={"font-mono-base text-mono-base font-bold text-primary mb-1 uppercase tracking-wider text-[12px]"}>
                      {"Root Cause Reasoning Analysis"}
                    </h4>
                    <p className={"font-body-base text-body-base text-on-surface leading-relaxed"}>
                      {"The causal graph isolates commit"}
                      <span className={"font-mono-code font-bold text-primary"}>
                        {"8f12a4b"}
                      </span>
                      {"as the trigger event. The new idempotency validation queries perform table scans against the 42M-row orders table under production concurrency. Because database connections failed to return to the pool within the 2.5s client SLA, upstream Nginx ingress controllers threw HTTP 504 Gateway Timeouts to end users."}
                    </p>
                  </div>
                  <div className={"flex flex-wrap items-center justify-between gap-space-md pt-space-xs"}>
                    <div className={"flex items-center gap-space-sm"}>
                      <button className={"flex items-center gap-2 px-space-lg py-2.5 rounded bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-body-base text-body-base font-semibold shadow-lg transition-all"}>
                        <span className={"material-symbols-outlined text-[20px]"}>
                          {"check_circle"}
                        </span>
                        <span>
                          {"Confirm hypothesis"}
                        </span>
                      </button>
                      <button className={"px-space-md py-2.5 rounded bg-surface-container-high hover:bg-surface-variant text-on-surface font-body-base text-body-base font-medium transition-colors"}>
                        {"Reject hypothesis"}
                      </button>
                    </div>
                    <span className={"font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1"}>
                      <span className={"material-symbols-outlined text-[16px] text-tertiary"}>
                        {"info"}
                      </span>
                      {"Confirming updates model weights for checkout-service."}
                    </span>
                  </div>
                </article>
                <article className={"bg-surface-container-low rounded-xl p-space-lg shadow-md hover:bg-surface-container transition-colors cursor-pointer group"}>
                  <div className={"flex items-center justify-between gap-space-md"}>
                    <div className={"flex items-center gap-space-md min-w-0"}>
                      <span className={"px-space-xs py-1 rounded bg-surface-container-highest text-on-surface-variant font-mono-badge text-mono-badge font-semibold uppercase whitespace-nowrap"}>
                        {"RANK #2"}
                      </span>
                      <span className={"font-body-base text-body-base text-on-surface font-medium truncate"}>
                        {"Redis replica memory fragmentation spike causing session lock timeouts."}
                      </span>
                    </div>
                    <div className={"flex items-center gap-space-md shrink-0"}>
                      <div className={"flex items-center gap-2"}>
                        <span className={"font-mono-base text-mono-base text-outline font-semibold"}>
                          {"38.2%"}
                        </span>
                        <div className={"w-16 h-1.5 bg-surface-container-highest rounded-full overflow-hidden"}>
                          <div className={"h-full bg-outline rounded-full"} style={{"width":"38.2%"}}></div>
                        </div>
                      </div>
                      <span className={"material-symbols-outlined text-outline group-hover:text-on-surface transition-transform group-hover:translate-y-0.5"}>
                        {"expand_more"}
                      </span>
                    </div>
                  </div>
                </article>
                <article className={"bg-surface-container-low rounded-xl p-space-lg shadow-md hover:bg-surface-container transition-colors cursor-pointer group"}>
                  <div className={"flex items-center justify-between gap-space-md"}>
                    <div className={"flex items-center gap-space-md min-w-0"}>
                      <span className={"px-space-xs py-1 rounded bg-surface-container-highest text-on-surface-variant font-mono-badge text-mono-badge font-semibold uppercase whitespace-nowrap"}>
                        {"RANK #3"}
                      </span>
                      <span className={"font-body-base text-body-base text-on-surface font-medium truncate"}>
                        {"Upstream Cloudflare edge routing flap during BGP re-convergence in us-east1."}
                      </span>
                    </div>
                    <div className={"flex items-center gap-space-md shrink-0"}>
                      <div className={"flex items-center gap-2"}>
                        <span className={"font-mono-base text-mono-base text-outline font-semibold"}>
                          {"12.4%"}
                        </span>
                        <div className={"w-16 h-1.5 bg-surface-container-highest rounded-full overflow-hidden"}>
                          <div className={"h-full bg-outline rounded-full"} style={{"width":"12.4%"}}></div>
                        </div>
                      </div>
                      <span className={"material-symbols-outlined text-outline group-hover:text-on-surface transition-transform group-hover:translate-y-0.5"}>
                        {"expand_more"}
                      </span>
                    </div>
                  </div>
                </article>
                <div className={"bg-surface-container-low rounded-xl p-space-lg shadow-md"}>
                  <div className={"flex items-center justify-between mb-space-sm"}>
                    <span className={"font-headline-sm text-headline-sm text-on-surface font-semibold"}>
                      {"Telemetry Divergence (Canary vs Baseline)"}
                    </span>
                    <div className={"flex items-center gap-space-md font-mono-badge text-mono-badge"}>
                      <span className={"flex items-center gap-1 text-secondary"}>
                        <span className={"w-2 h-2 rounded-full bg-secondary"}></span>
                        {"Canary v2.10.4"}
                      </span>
                      <span className={"flex items-center gap-1 text-tertiary"}>
                        <span className={"w-2 h-2 rounded-full bg-tertiary"}></span>
                        {"Baseline v2.10.3"}
                      </span>
                    </div>
                  </div>
                  <div className={"w-full h-32 bg-surface-container-lowest rounded-lg p-space-sm flex flex-col justify-end"}>
                    <svg className={"w-full h-24 overflow-visible"} preserveAspectRatio={"none"} viewBox={"0 0 600 100"}>
                      <line stroke={"#33343c"} strokeDasharray={"4,4"} strokeWidth={"1"} x1={"0"} x2={"600"} y1={"20"} y2={"20"}></line>
                      <line stroke={"#33343c"} strokeDasharray={"4,4"} strokeWidth={"1"} x1={"0"} x2={"600"} y1={"60"} y2={"60"}></line>
                      <path d={"M0,75 L80,74 L160,76 L240,73 L320,75 L400,74 L480,75 L600,74"} fill={"none"} stroke={"#aec6ff"} strokeWidth={"2"}></path>
                      <path d={"M0,75 L120,74 L200,72 L260,65 L300,35 L340,15 L420,10 L500,12 L600,10"} fill={"none"} stroke={"#ffb1c0"} strokeWidth={"2.5"}></path>
                      <circle cx={"340"} cy={"15"} fill={"#e00363"} r={"4"}></circle>
                      <text fill={"#ffb1c0"} fontFamily={"JetBrains Mono"} fontSize={"10"} fontWeight={"600"} x={"348"} y={"18"}>
                        {"504 Surge"}
                      </text>
                    </svg>
                    <div className={"flex justify-between font-mono-badge text-[10px] text-outline mt-1 px-1"}>
                      <span>
                        {"03:10 UTC"}
                      </span>
                      <span>
                        {"03:12 (Deploy)"}
                      </span>
                      <span>
                        {"03:14 (Spike)"}
                      </span>
                      <span>
                        {"03:16 (RCA complete)"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"lg:col-span-4 flex flex-col gap-space-lg"}>
                <section className={"relative bg-surface-container rounded-xl p-space-lg shadow-2xl overflow-hidden"}>
                  <div className={"absolute -top-12 -right-12 w-32 h-32 bg-primary-container/40 rounded-full blur-2xl"}></div>
                  <div className={"relative z-10 flex flex-col gap-space-md"}>
                    <div className={"flex items-center gap-space-xs"}>
                      <span className={"material-symbols-outlined text-primary text-[22px]"}>
                        {"build_circle"}
                      </span>
                      <h3 className={"font-headline-sm text-headline-sm text-on-surface font-semibold"}>
                        {"Suggested Remediation"}
                      </h3>
                    </div>
                    <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                      {"Rollback canary deployment to"}
                      <span className={"font-mono-code text-on-surface font-semibold"}>
                        {"v2.10.3"}
                      </span>
                      {"or apply hotfix index migration."}
                    </p>
                    <div className={"bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-1"}>
                      <div className={"flex items-center justify-between text-outline text-[11px] font-mono-badge"}>
                        <span>
                          {"ROLLBACK COMMAND"}
                        </span>
                        <button className={"hover:text-on-surface flex items-center gap-1 transition-colors"} title={"Copy to clipboard"}>
                          <span className={"material-symbols-outlined text-[14px]"}>
                            {"content_copy"}
                          </span>
                          <span>
                            {"Copy"}
                          </span>
                        </button>
                      </div>
                      <code className={"font-mono-code text-[12px] text-primary break-all"}>
                        {"kubectl rollout undo deployment/checkout-service -n payments"}
                      </code>
                    </div>
                    <div className={"bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-1"}>
                      <div className={"flex items-center justify-between text-outline text-[11px] font-mono-badge"}>
                        <span>
                          {"SQL IMMEDIATE INDEX"}
                        </span>
                        <button className={"hover:text-on-surface flex items-center gap-1 transition-colors"} title={"Copy to clipboard"}>
                          <span className={"material-symbols-outlined text-[14px]"}>
                            {"content_copy"}
                          </span>
                          <span>
                            {"Copy"}
                          </span>
                        </button>
                      </div>
                      <code className={"font-mono-code text-[11px] text-on-surface break-all"}>
                        {"CREATE INDEX CONCURRENTLY idx_orders_idempotency ON orders(tenant_id, idempotency_key);"}
                      </code>
                    </div>
                    <div className={"flex flex-col gap-space-xs pt-space-xs"}>
                      <button className={"w-full flex items-center justify-center gap-2 py-2.5 rounded bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-body-base text-body-base font-semibold shadow-md transition-all"}>
                        <span className={"material-symbols-outlined text-[18px]"}>
                          {"history"}
                        </span>
                        <span>
                          {"Trigger Automated Rollback"}
                        </span>
                      </button>
                      <Link className={"w-full flex items-center justify-center gap-1.5 py-2 rounded bg-surface-container-high hover:bg-surface-variant text-on-surface font-body-sm text-body-sm font-medium transition-colors"} to={"/incidents"}>
                        <span className={"material-symbols-outlined text-[16px]"}>
                          {"open_in_new"}
                        </span>
                        <span>
                          {"View PR in GitHub"}
                        </span>
                      </Link>
                    </div>
                  </div>
                </section>
                <section className={"bg-surface-container-low rounded-xl p-space-lg shadow-md flex flex-col gap-space-md"}>
                  <div className={"flex items-center justify-between"}>
                    <div className={"flex items-center gap-space-xs"}>
                      <span className={"material-symbols-outlined text-primary text-[20px]"}>
                        {"timeline"}
                      </span>
                      <h3 className={"font-headline-sm text-headline-sm text-on-surface font-semibold"}>
                        {"Causal Timeline"}
                      </h3>
                    </div>
                    <span className={"font-mono-badge text-mono-badge text-tertiary"}>
                      {"3 systems"}
                    </span>
                  </div>
                  <div className={"relative pl-6 flex flex-col gap-space-md before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-container-highest"}>
                    <div className={"relative flex flex-col gap-0.5"}>
                      <span className={"absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-surface-container-low"}></span>
                      <div className={"flex items-center gap-space-xs"}>
                        <span className={"font-mono-code text-[11px] text-outline"}>
                          {"03:12:01 UTC"}
                        </span>
                        <span className={"px-1.5 py-0.2 rounded bg-primary-container/20 text-primary font-mono-badge text-[10px] uppercase font-bold"}>
                          {"DEPLOY"}
                        </span>
                      </div>
                      <p className={"font-body-sm text-body-sm text-on-surface"}>
                        {"Canary rollout of"}
                        <code className={"font-mono-code text-primary text-[12px]"}>
                          {"checkout:v2.10.4"}
                        </code>
                        {"initiated via ArgoCD"}
                      </p>
                    </div>
                    <div className={"relative flex flex-col gap-0.5"}>
                      <span className={"absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-secondary ring-4 ring-surface-container-low animate-ping"}></span>
                      <span className={"absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-secondary ring-4 ring-surface-container-low"}></span>
                      <div className={"flex items-center gap-space-xs"}>
                        <span className={"font-mono-code text-[11px] text-outline"}>
                          {"03:13:30 UTC"}
                        </span>
                        <span className={"px-1.5 py-0.2 rounded bg-secondary-container/30 text-secondary font-mono-badge text-[10px] uppercase font-bold"}>
                          {"FIRST ERROR"}
                        </span>
                      </div>
                      <p className={"font-body-sm text-body-sm text-on-surface"}>
                        {"First HTTP 504 recorded on"}
                        <span className={"font-mono-code text-[12px]"}>
                          {"ingress-nginx"}
                        </span>
                        {"(rate: 0.2%)"}
                      </p>
                    </div>
                    <div className={"relative flex flex-col gap-0.5"}>
                      <span className={"absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-secondary-fixed-dim ring-4 ring-surface-container-low"}></span>
                      <span className={"font-mono-code text-[11px] text-outline"}>
                        {"03:14:02 UTC"}
                      </span>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                        {"Aurora read-replica max client connections reached"}
                        <span className={"font-mono-code text-secondary text-[12px] font-semibold"}>
                          {"(5000/5000)"}
                        </span>
                      </p>
                    </div>
                    <div className={"relative flex flex-col gap-0.5"}>
                      <span className={"absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-secondary ring-4 ring-surface-container-low"}></span>
                      <div className={"flex items-center gap-space-xs"}>
                        <span className={"font-mono-code text-[11px] text-outline"}>
                          {"03:14:45 UTC"}
                        </span>
                        <span className={"px-1.5 py-0.2 rounded bg-secondary-container/20 text-secondary font-mono-badge text-[10px] uppercase"}>
                          {"SEV-1"}
                        </span>
                      </div>
                      <p className={"font-body-sm text-body-sm text-on-surface"}>
                        {"PagerDuty Sev-1 alert triggered:"}
                        <span className={"font-mono-code text-[12px]"}>
                          {"CheckoutSuccessRate < 95%"}
                        </span>
                      </p>
                    </div>
                    <div className={"relative flex flex-col gap-0.5"}>
                      <span className={"absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-surface-container-low"}></span>
                      <span className={"font-mono-code text-[11px] text-outline"}>
                        {"03:15:10 UTC"}
                      </span>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                        {"IncidentIQ automated RCA pipeline spawned with 48k events"}
                      </p>
                    </div>
                    <div className={"relative flex flex-col gap-0.5"}>
                      <span className={"absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-tertiary ring-4 ring-surface-container-low"}></span>
                      <div className={"flex items-center gap-space-xs"}>
                        <span className={"font-mono-code text-[11px] text-outline"}>
                          {"03:15:52 UTC"}
                        </span>
                        <span className={"px-1.5 py-0.2 rounded bg-tertiary-container/30 text-tertiary font-mono-badge text-[10px] uppercase font-bold"}>
                          {"RESOLVED"}
                        </span>
                      </div>
                      <p className={"font-body-sm text-body-sm text-on-surface"}>
                        {"Causal synthesis concluded: Root cause isolated to"}
                        <code className={"font-mono-code text-primary text-[12px]"}>
                          {"commit 8f12a4b"}
                        </code>
                      </p>
                    </div>
                  </div>
                </section>
                <section className={"bg-surface-container-low rounded-xl p-space-lg shadow-md flex flex-col gap-space-md"}>
                  <div className={"flex items-center gap-space-xs"}>
                    <span className={"material-symbols-outlined text-tertiary text-[20px]"}>
                      {"shield"}
                    </span>
                    <h3 className={"font-headline-sm text-headline-sm text-on-surface font-semibold"}>
                      {"Prevention Guards"}
                    </h3>
                  </div>
                  <div className={"flex flex-col gap-space-sm"}>
                    <div className={"p-space-sm rounded bg-surface-container flex items-start gap-space-xs"}>
                      <span className={"material-symbols-outlined text-primary text-[18px] mt-0.5"}>
                        {"gavel"}
                      </span>
                      <p className={"font-body-sm text-body-sm text-on-surface"}>
                        {"Add CI linter rule to block non-indexed"}
                        <code className={"font-mono-code text-[12px] text-primary"}>
                          {"WHERE"}
                        </code>
                        {"clauses on high-volume tables (>10M rows)."}
                      </p>
                    </div>
                    <div className={"p-space-sm rounded bg-surface-container flex items-start gap-space-xs"}>
                      <span className={"material-symbols-outlined text-tertiary text-[18px] mt-0.5"}>
                        {"timer"}
                      </span>
                      <p className={"font-body-sm text-body-sm text-on-surface"}>
                        {"Tune client-side connection acquisition timeout from 15s to 2.5s with aggressive circuit-breaker trip."}
                      </p>
                    </div>
                  </div>
                  <div className={"flex items-center gap-space-sm pt-space-xs"}>
                    <button className={"flex-1 py-2 rounded bg-surface-container-high hover:bg-surface-variant text-on-surface font-body-sm text-body-sm font-medium transition-colors flex items-center justify-center gap-1"}>
                      <span className={"material-symbols-outlined text-[16px]"}>
                        {"confirmation_number"}
                      </span>
                      <span>
                        {"Create Jira Ticket"}
                      </span>
                    </button>
                    <button className={"flex-1 py-2 rounded bg-surface-container-high hover:bg-surface-variant text-on-surface font-body-sm text-body-sm font-medium transition-colors flex items-center justify-center gap-1"}>
                      <span className={"material-symbols-outlined text-[16px]"}>
                        {"post_add"}
                      </span>
                      <span>
                        {"Add to Postmortem"}
                      </span>
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

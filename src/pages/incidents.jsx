import { Link } from "@tanstack/react-router";

export default function IncidentsPage() {
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
          <div className={"flex flex-col w-full max-w-max-content-width mx-auto gap-space-lg"}>
            <div className={"relative w-full"}>
              <div className={"absolute -top-16 left-1/2 -translate-x-1/2 w-175 h-45 bg-linear-to-b from-primary-container/15 via-primary-container/5 to-transparent blur-3xl pointer-events-none -z-10"}></div>
            </div>
            <section className={"flex flex-col md:flex-row md:items-center justify-between gap-space-md"}>
              <div className={"flex flex-col gap-space-xxs"}>
                <div className={"flex items-center gap-space-sm"}>
                  <h1 className={"font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight"}>
                    {"Incidents"}
                  </h1>
                  <span className={"inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded-full bg-surface-container-high font-mono-badge text-mono-badge text-tertiary"}>
                    <span className={"w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"}></span>
                    {"REALTIME CAUSAL ENGINE"}
                  </span>
                </div>
                <p className={"font-body-base text-body-base text-on-surface-variant"}>
                  {"Live causal analysis pipeline & automated triage across production clusters"}
                </p>
              </div>
              <div className={"flex items-center gap-space-sm"}>
                <button className={"flex items-center justify-center w-10 h-10 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors shadow-sm"} title={"Export incident telemetry CSV/JSON"}>
                  <span className={"material-symbols-outlined text-[20px]"}>
                    {"download"}
                  </span>
                </button>
                <button className={"flex items-center justify-center w-10 h-10 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors shadow-sm"} title={"Refresh state"}>
                  <span className={"material-symbols-outlined text-[20px] transition-transform duration-500"}>
                    {"sync"}
                  </span>
                </button>
                <button className={"flex items-center gap-space-xs px-space-md py-2.5 rounded-xl bg-primary-container hover:bg-inverse-primary text-on-primary font-body-base text-body-base font-semibold transition-all shadow-[0_0_24px_rgba(110,74,255,0.35)] active:scale-[0.98]"}>
                  <span className={"material-symbols-outlined text-[20px]"}>
                    {"add"}
                  </span>
                  <span>
                    {"New incident"}
                  </span>
                </button>
              </div>
            </section>
            <section className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md"}>
              <div className={"flex flex-col justify-between p-space-lg rounded-2xl bg-surface-container-low shadow-sm relative overflow-hidden group"}>
                <div className={"flex items-center justify-between"}>
                  <span className={"font-body-sm text-body-sm text-on-surface-variant font-medium"}>
                    {"Incidents this month"}
                  </span>
                  <span className={"p-1 rounded-lg bg-surface-container-high text-primary-fixed"}>
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"crisis_alert"}
                    </span>
                  </span>
                </div>
                <div className={"flex items-baseline justify-between mt-space-md"}>
                  <span className={"font-mono-metric text-mono-metric text-on-surface tracking-tight font-bold"}>
                    {"142"}
                  </span>
                  <span className={"inline-flex items-center gap-0.5 px-space-xs py-0.5 rounded-full bg-surface-container font-mono-badge text-mono-badge text-secondary"}>
                    <span className={"material-symbols-outlined text-[14px]"}>
                      {"trending_up"}
                    </span>
                    {"+12% vs last mo"}
                  </span>
                </div>
                <div className={"mt-space-sm pt-space-xs flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm"}>
                  <span>
                    {"MTTR:"}
                    <span className={"font-mono-code text-on-surface font-semibold"}>
                      {"14m 20s"}
                    </span>
                  </span>
                  <span className={"font-mono-badge text-mono-badge text-outline"}>
                    {"98 resolved"}
                  </span>
                </div>
              </div>
              <div className={"flex flex-col justify-between p-space-lg rounded-2xl bg-surface-container-low shadow-sm relative overflow-hidden group"}>
                <div className={"flex items-center justify-between"}>
                  <span className={"font-body-sm text-body-sm text-on-surface-variant font-medium"}>
                    {"Average analysis time"}
                  </span>
                  <span className={"p-1 rounded-lg bg-surface-container-high text-tertiary"}>
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"speed"}
                    </span>
                  </span>
                </div>
                <div className={"flex items-baseline justify-between mt-space-md"}>
                  <div className={"flex items-baseline gap-space-xxs"}>
                    <span className={"font-mono-metric text-mono-metric text-on-surface tracking-tight font-bold"}>
                      {"87"}
                    </span>
                    <span className={"font-mono-base text-mono-base text-on-surface-variant"}>
                      {"s"}
                    </span>
                  </div>
                  <span className={"inline-flex items-center gap-0.5 px-space-xs py-0.5 rounded-full bg-surface-container font-mono-badge text-mono-badge text-tertiary"}>
                    <span className={"material-symbols-outlined text-[14px]"}>
                      {"arrow_downward"}
                    </span>
                    {"-14.2s efficiency"}
                  </span>
                </div>
                <div className={"mt-space-sm pt-space-xs flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm"}>
                  <span>
                    {"p95 Duration:"}
                    <span className={"font-mono-code text-on-surface font-semibold"}>
                      {"112s"}
                    </span>
                  </span>
                  <span className={"font-mono-badge text-mono-badge text-tertiary"}>
                    {"ML accelerated"}
                  </span>
                </div>
              </div>
              <div className={"flex flex-col justify-between p-space-lg rounded-2xl bg-surface-container-low shadow-sm relative overflow-hidden group"}>
                <div className={"flex items-center justify-between"}>
                  <span className={"font-body-sm text-body-sm text-on-surface-variant font-medium"}>
                    {"Hypotheses confirmed"}
                  </span>
                  <span className={"p-1 rounded-lg bg-surface-container-high text-primary"}>
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"verified"}
                    </span>
                  </span>
                </div>
                <div className={"flex items-baseline justify-between mt-space-md"}>
                  <span className={"font-mono-metric text-mono-metric text-on-surface tracking-tight font-bold"}>
                    {"98.4%"}
                  </span>
                  <span className={"font-mono-code text-mono-code text-primary-fixed-dim bg-primary-container/20 px-space-xs py-0.5 rounded"}>
                    {"139/142"}
                  </span>
                </div>
                <div className={"mt-space-sm pt-space-xs flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm"}>
                  <span>
                    {"Confidence factor"}
                  </span>
                  <span className={"font-mono-badge text-mono-badge text-primary font-semibold"}>
                    {"HIGH • 0.96 AUC"}
                  </span>
                </div>
              </div>
              <div className={"flex flex-col justify-between p-space-lg rounded-2xl bg-surface-container-low shadow-sm relative overflow-hidden group"}>
                <div className={"flex items-center justify-between"}>
                  <span className={"font-body-sm text-body-sm text-on-surface-variant font-medium"}>
                    {"Connected sources"}
                  </span>
                  <span className={"p-1 rounded-lg bg-surface-container-high text-on-surface-variant"}>
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"hub"}
                    </span>
                  </span>
                </div>
                <div className={"flex items-baseline justify-between mt-space-md"}>
                  <span className={"font-mono-metric text-mono-metric text-on-surface tracking-tight font-bold"}>
                    {"18"}
                  </span>
                  <div className={"flex items-center -space-x-1.5"}>
                    <span className={"w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center font-mono-badge text-[10px] text-tertiary"}>
                      {"GCP"}
                    </span>
                    <span className={"w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center font-mono-badge text-[10px] text-primary"}>
                      {"K8s"}
                    </span>
                    <span className={"w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center font-mono-badge text-[10px] text-secondary"}>
                      {"DD"}
                    </span>
                  </div>
                </div>
                <div className={"mt-space-sm pt-space-xs flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm"}>
                  <span className={"flex items-center gap-1"}>
                    <span className={"w-1.5 h-1.5 rounded-full bg-tertiary"}></span>
                    {"All feeds nominal"}
                  </span>
                  <span className={"font-mono-badge text-mono-badge text-outline"}>
                    {"0 throttled"}
                  </span>
                </div>
              </div>
            </section>
            <section className={"flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pt-space-xs"}>
              <div className={"inline-flex p-1 rounded-xl bg-surface-container-low shadow-inner self-start max-w-full overflow-x-auto"}>
                <button className={"px-space-md py-1.5 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm font-semibold transition-all shadow-[0_0_12px_rgba(110,74,255,0.25)] flex items-center gap-space-xs whitespace-nowrap"}>
                  <span>
                    {"All"}
                  </span>
                  <span className={"font-mono-badge text-mono-badge px-1.5 py-0.2 rounded-full bg-primary-container text-on-primary"}>
                    {"24"}
                  </span>
                </button>
                <button className={"px-space-md py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm transition-colors flex items-center gap-space-xs whitespace-nowrap"}>
                  <span className={"w-2 h-2 rounded-full bg-tertiary animate-pulse"}></span>
                  <span>
                    {"Processing"}
                  </span>
                  <span className={"font-mono-badge text-mono-badge text-on-surface-variant"}>
                    {"1"}
                  </span>
                </button>
                <button className={"px-space-md py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm transition-colors flex items-center gap-space-xs whitespace-nowrap"}>
                  <span>
                    {"Completed"}
                  </span>
                  <span className={"font-mono-badge text-mono-badge text-on-surface-variant"}>
                    {"138"}
                  </span>
                </button>
                <button className={"px-space-md py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm transition-colors flex items-center gap-space-xs whitespace-nowrap"}>
                  <span>
                    {"Failed"}
                  </span>
                  <span className={"font-mono-badge text-mono-badge text-secondary"}>
                    {"3"}
                  </span>
                </button>
              </div>
              <div className={"flex flex-col sm:flex-row items-center gap-space-sm w-full lg:w-auto"}>
                <div className={"relative w-full sm:w-80"}>
                  <span className={"material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-outline"}>
                    {"search"}
                  </span>
                  <input className={"w-full h-[42px] pl-10 pr-16 bg-surface-container-low text-on-surface placeholder-outline font-mono-code text-mono-code rounded-xl outline-none focus:bg-surface-container transition-all"} placeholder={"Search incidents, SHAs, or services..."} type={"text"} />
                  <span className={"absolute right-2.5 top-1/2 -translate-y-1/2 font-mono-badge text-[10px] text-outline px-1.5 py-0.5 rounded bg-surface-container"}>
                    {"⌘K"}
                  </span>
                </div>
                <div className={"relative w-full sm:w-auto"}>
                  <button className={"w-full sm:w-auto h-[42px] px-space-md bg-surface-container-low hover:bg-surface-container text-on-surface font-body-sm text-body-sm rounded-xl flex items-center justify-between gap-space-md transition-colors"}>
                    <div className={"flex items-center gap-space-xs"}>
                      <span className={"flex items-center gap-1"}>
                        <span className={"w-2 h-2 rounded-full bg-secondary-container"}></span>
                        <span className={"w-2 h-2 rounded-full bg-secondary"}></span>
                        <span className={"w-2 h-2 rounded-full bg-tertiary"}></span>
                      </span>
                      <span className={"font-medium"}>
                        {"All Severities"}
                      </span>
                    </div>
                    <span className={"material-symbols-outlined text-[18px] text-outline"}>
                      {"arrow_drop_down"}
                    </span>
                  </button>
                </div>
                <button className={"h-[42px] px-space-sm bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface rounded-xl flex items-center gap-space-xs transition-colors"} title={"Auto-refreshing every 5s"}>
                  <span className={"w-2 h-2 rounded-full bg-tertiary animate-ping"}></span>
                  <span className={"font-mono-badge text-mono-badge uppercase tracking-wider"}>
                    {"Live"}
                  </span>
                </button>
              </div>
            </section>
            <section className={"rounded-2xl bg-surface-container-low overflow-hidden shadow-xl"}>
              <div className={"w-full overflow-x-auto"}>
                <table className={"w-full text-left border-collapse"}>
                  <thead>
                    <tr className={"bg-surface-container text-on-surface-variant font-mono-badge text-mono-badge uppercase tracking-wider"}>
                      <th className={"py-space-md px-space-lg font-semibold w-28"}>
                        {"Incident ID"}
                      </th>
                      <th className={"py-space-md px-space-md font-semibold min-w-[320px]"}>
                        {"Description / Target Service"}
                      </th>
                      <th className={"py-space-md px-space-md font-semibold w-28"}>
                        {"Severity"}
                      </th>
                      <th className={"py-space-md px-space-md font-semibold w-48"}>
                        {"Status"}
                      </th>
                      <th className={"py-space-md px-space-md font-semibold w-28"}>
                        {"Triggered"}
                      </th>
                      <th className={"py-space-md px-space-md font-semibold w-24"}>
                        {"Duration"}
                      </th>
                      <th className={"py-space-md px-space-md font-semibold w-32"}>
                        {"Reported"}
                      </th>
                      <th className={"py-space-md px-space-lg font-semibold text-right w-16"}></th>
                    </tr>
                  </thead>
                  <tbody className={"font-body-sm text-body-sm text-on-surface"}>
                    <tr className={"group hover:bg-surface-container/70 bg-primary-container/5 transition-colors cursor-pointer relative"}>
                      <td className={"py-space-md px-space-lg align-top"}>
                        <div className={"flex items-center gap-space-xs"}>
                          <span className={"font-mono-base text-mono-base text-primary-fixed-dim font-bold tracking-tight"}>
                            {"INC-8492"}
                          </span>
                        </div>
                      </td>
                      <td className={"py-space-md px-space-md align-top"}>
                        <div className={"flex flex-col gap-1 min-w-0"}>
                          <div className={"flex items-center gap-space-xs flex-wrap"}>
                            <span className={"font-body-base text-body-base font-semibold text-on-surface group-hover:text-primary-fixed transition-colors line-clamp-1"}>
                              {"High HTTP 504 Gateway Timeout Rate on checkout-service"}
                            </span>
                          </div>
                          <div className={"flex items-center gap-space-xs font-mono-code text-mono-code text-on-surface-variant text-xs"}>
                            <span className={"px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant"}>
                              {"checkout-service"}
                            </span>
                            <span>
                              {"•"}
                            </span>
                            <span className={"text-secondary"}>
                              {"pod eviction cascade"}
                            </span>
                            <span>
                              {"•"}
                            </span>
                            <span className={"text-outline"}>
                              {"cluster: prod-us-east1-a"}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap"}>
                        <span className={"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container/20 text-secondary-container font-mono-badge text-mono-badge"}>
                          <span className={"w-1.5 h-1.5 rounded-full bg-secondary-container animate-ping"}></span>
                          {"CRITICAL"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap"}>
                        <div className={"flex flex-col gap-1"}>
                          <span className={"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-container/30 text-tertiary font-mono-badge text-mono-badge"}>
                            <span className={"w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"}></span>
                            {"Processing (Step 3/4: Causal Tree)"}
                          </span>
                          <span className={"font-mono-badge text-[10px] text-outline pl-1"}>
                            {"Analyzing 1,420 span traces..."}
                          </span>
                        </div>
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap"}>
                        <span className={"inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-mono-badge text-mono-badge"}>
                          <span className={"material-symbols-outlined text-[13px] text-secondary"}>
                            {"bolt"}
                          </span>
                          {"Auto"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap font-mono-code text-mono-code text-on-surface font-semibold"}>
                        {"01m 27s"}
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap font-mono-code text-mono-code text-on-surface-variant"}>
                        {"3 mins ago"}
                      </td>
                      <td className={"py-space-md px-space-lg align-top text-right whitespace-nowrap"}>
                        <button className={"p-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"}>
                          <span className={"material-symbols-outlined text-[18px]"}>
                            {"chevron_right"}
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className={"p-0"} colSpan={"8"}>
                        <div className={"w-full h-[3px] bg-surface-container overflow-hidden"}>
                          <div className={"h-full bg-linear-to-r from-primary-container via-tertiary to-primary-container animate-[pulse_1.5s_ease-in-out_infinite] w-3/4"}></div>
                        </div>
                      </td>
                    </tr>
                    <tr className={"group hover:bg-surface-container/60 transition-colors cursor-pointer bg-surface-container-low"}>
                      <td className={"py-space-md px-space-lg align-top"}>
                        <span className={"font-mono-base text-mono-base text-on-surface font-semibold"}>
                          {"INC-8489"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top"}>
                        <div className={"flex flex-col gap-1 min-w-0"}>
                          <span className={"font-body-base text-body-base font-semibold text-on-surface group-hover:text-primary-fixed transition-colors line-clamp-1"}>
                            {"PostgreSQL read-replica connection pool exhaustion caused by deploy commit #8f12a4b"}
                          </span>
                          <div className={"flex items-center gap-space-xs font-mono-code text-mono-code text-on-surface-variant text-xs"}>
                            <span className={"px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant"}>
                              {"aurora-pg-primary"}
                            </span>
                            <span>
                              {"•"}
                            </span>
                            <span className={"font-mono-code text-primary-fixed-dim"}>
                              {"sha:8f12a4b"}
                            </span>
                            <span>
                              {"•"}
                            </span>
                            <span className={"text-outline"}>
                              {"Max clients reached (5000/5000)"}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap"}>
                        <span className={"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container/15 text-secondary-container font-mono-badge text-mono-badge"}>
                          <span className={"w-1.5 h-1.5 rounded-full bg-secondary-container"}></span>
                          {"CRITICAL"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap"}>
                        <span className={"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-tertiary font-mono-badge text-mono-badge"}>
                          <span className={"w-1.5 h-1.5 rounded-full bg-tertiary"}></span>
                          {"Completed"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap"}>
                        <span className={"inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-mono-badge text-mono-badge"}>
                          <span className={"material-symbols-outlined text-[13px] text-secondary"}>
                            {"bolt"}
                          </span>
                          {"Auto"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap font-mono-code text-mono-code text-on-surface"}>
                        {"01m 42s"}
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap font-mono-code text-mono-code text-on-surface-variant"}>
                        {"42 mins ago"}
                      </td>
                      <td className={"py-space-md px-space-lg align-top text-right whitespace-nowrap"}>
                        <button className={"p-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"}>
                          <span className={"material-symbols-outlined text-[18px]"}>
                            {"chevron_right"}
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className={"group hover:bg-surface-container/60 transition-colors cursor-pointer bg-surface-container-low"}>
                      <td className={"py-space-md px-space-lg align-top"}>
                        <span className={"font-mono-base text-mono-base text-on-surface font-semibold"}>
                          {"INC-8485"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top"}>
                        <div className={"flex flex-col gap-1 min-w-0"}>
                          <span className={"font-body-base text-body-base font-semibold text-on-surface group-hover:text-primary-fixed transition-colors line-clamp-1"}>
                            {"Redis cluster shard memory fragmentation threshold breached (>94% capacity)"}
                          </span>
                          <div className={"flex items-center gap-space-xs font-mono-code text-mono-code text-on-surface-variant text-xs"}>
                            <span className={"px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant"}>
                              {"redis-session-cache-04"}
                            </span>
                            <span>
                              {"•"}
                            </span>
                            <span className={"text-outline"}>
                              {"Fragmentation ratio: 2.18"}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap"}>
                        <span className={"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary/15 text-secondary font-mono-badge text-mono-badge"}>
                          <span className={"w-1.5 h-1.5 rounded-full bg-secondary"}></span>
                          {"HIGH"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap"}>
                        <span className={"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-tertiary font-mono-badge text-mono-badge"}>
                          <span className={"w-1.5 h-1.5 rounded-full bg-tertiary"}></span>
                          {"Completed"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap"}>
                        <span className={"inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-mono-badge text-mono-badge"}>
                          <span className={"material-symbols-outlined text-[13px] text-secondary"}>
                            {"bolt"}
                          </span>
                          {"Auto"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap font-mono-code text-mono-code text-on-surface"}>
                        {"02m 04s"}
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap font-mono-code text-mono-code text-on-surface-variant"}>
                        {"2 hours ago"}
                      </td>
                      <td className={"py-space-md px-space-lg align-top text-right whitespace-nowrap"}>
                        <button className={"p-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"}>
                          <span className={"material-symbols-outlined text-[18px]"}>
                            {"chevron_right"}
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className={"group hover:bg-surface-container/60 transition-colors cursor-pointer bg-surface-container-low"}>
                      <td className={"py-space-md px-space-lg align-top"}>
                        <span className={"font-mono-base text-mono-base text-on-surface font-semibold"}>
                          {"INC-8481"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top"}>
                        <div className={"flex flex-col gap-1 min-w-0"}>
                          <span className={"font-body-base text-body-base font-semibold text-on-surface group-hover:text-primary-fixed transition-colors line-clamp-1"}>
                            {"Manual canary rollout validation failure: p99 latency spike on auth-service v2.14.9"}
                          </span>
                          <div className={"flex items-center gap-space-xs font-mono-code text-mono-code text-on-surface-variant text-xs"}>
                            <span className={"px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant"}>
                              {"auth-service:canary"}
                            </span>
                            <span>
                              {"•"}
                            </span>
                            <span className={"text-outline"}>
                              {"p99 > 820ms threshold"}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap"}>
                        <span className={"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary/15 text-tertiary font-mono-badge text-mono-badge"}>
                          <span className={"w-1.5 h-1.5 rounded-full bg-tertiary"}></span>
                          {"MEDIUM"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap"}>
                        <span className={"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-tertiary font-mono-badge text-mono-badge"}>
                          <span className={"w-1.5 h-1.5 rounded-full bg-tertiary"}></span>
                          {"Completed"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap"}>
                        <span className={"inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-mono-badge text-mono-badge"}>
                          <span className={"material-symbols-outlined text-[13px] text-primary"}>
                            {"person"}
                          </span>
                          {"Elena R."}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap font-mono-code text-mono-code text-on-surface"}>
                        {"00m 58s"}
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap font-mono-code text-mono-code text-on-surface-variant"}>
                        {"5 hours ago"}
                      </td>
                      <td className={"py-space-md px-space-lg align-top text-right whitespace-nowrap"}>
                        <button className={"p-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"}>
                          <span className={"material-symbols-outlined text-[18px]"}>
                            {"chevron_right"}
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className={"group hover:bg-surface-container/60 transition-colors cursor-pointer bg-surface-container-low"}>
                      <td className={"py-space-md px-space-lg align-top"}>
                        <span className={"font-mono-base text-mono-base text-on-surface font-semibold"}>
                          {"INC-8477"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top"}>
                        <div className={"flex flex-col gap-1 min-w-0"}>
                          <span className={"font-body-base text-body-base font-semibold text-on-surface group-hover:text-primary-fixed transition-colors line-clamp-1"}>
                            {"gRPC Deadlock in inventory-allocator worker thread pool"}
                          </span>
                          <div className={"flex items-center gap-space-xs font-mono-code text-mono-code text-on-surface-variant text-xs"}>
                            <span className={"px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant"}>
                              {"inventory-allocator"}
                            </span>
                            <span>
                              {"•"}
                            </span>
                            <span className={"text-secondary"}>
                              {"Mutex lock contention on resource #4102"}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap"}>
                        <span className={"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container/15 text-secondary-container font-mono-badge text-mono-badge"}>
                          <span className={"w-1.5 h-1.5 rounded-full bg-secondary-container"}></span>
                          {"CRITICAL"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap"}>
                        <span className={"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-tertiary font-mono-badge text-mono-badge"}>
                          <span className={"w-1.5 h-1.5 rounded-full bg-tertiary"}></span>
                          {"Completed"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap"}>
                        <span className={"inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-mono-badge text-mono-badge"}>
                          <span className={"material-symbols-outlined text-[13px] text-secondary"}>
                            {"bolt"}
                          </span>
                          {"Auto"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap font-mono-code text-mono-code text-on-surface"}>
                        {"02m 19s"}
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap font-mono-code text-mono-code text-on-surface-variant"}>
                        {"Yesterday, 18:42"}
                      </td>
                      <td className={"py-space-md px-space-lg align-top text-right whitespace-nowrap"}>
                        <button className={"p-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"}>
                          <span className={"material-symbols-outlined text-[18px]"}>
                            {"chevron_right"}
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className={"group hover:bg-surface-container/60 transition-colors cursor-pointer bg-surface-container-low"}>
                      <td className={"py-space-md px-space-lg align-top"}>
                        <span className={"font-mono-base text-mono-base text-on-surface font-semibold"}>
                          {"INC-8472"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top"}>
                        <div className={"flex flex-col gap-1 min-w-0"}>
                          <span className={"font-body-base text-body-base font-semibold text-on-surface group-hover:text-primary-fixed transition-colors line-clamp-1"}>
                            {"Corrupted log sink buffer: cloudwatch-exporter unauthorized IAM role token expiry"}
                          </span>
                          <div className={"flex items-center gap-space-xs font-mono-code text-mono-code text-on-surface-variant text-xs"}>
                            <span className={"px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant"}>
                              {"cloudwatch-exporter"}
                            </span>
                            <span>
                              {"•"}
                            </span>
                            <span className={"text-outline"}>
                              {"STS AssumeRole expired"}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap"}>
                        <span className={"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-tertiary-fixed-dim font-mono-badge text-mono-badge"}>
                          <span className={"w-1.5 h-1.5 rounded-full bg-tertiary"}></span>
                          {"LOW"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap"}>
                        <span className={"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container/20 text-secondary-container font-mono-badge text-mono-badge"}>
                          <span className={"w-1.5 h-1.5 rounded-full bg-secondary-container"}></span>
                          {"Failed"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap"}>
                        <span className={"inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-mono-badge text-mono-badge"}>
                          <span className={"material-symbols-outlined text-[13px] text-primary"}>
                            {"person"}
                          </span>
                          {"Manual"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap font-mono-code text-mono-code text-on-surface"}>
                        {"00m 34s"}
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap font-mono-code text-mono-code text-on-surface-variant"}>
                        {"Nov 14, 09:15"}
                      </td>
                      <td className={"py-space-md px-space-lg align-top text-right whitespace-nowrap"}>
                        <button className={"p-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"}>
                          <span className={"material-symbols-outlined text-[18px]"}>
                            {"chevron_right"}
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className={"group hover:bg-surface-container/60 transition-colors cursor-pointer bg-surface-container-low"}>
                      <td className={"py-space-md px-space-lg align-top"}>
                        <span className={"font-mono-base text-mono-base text-on-surface font-semibold"}>
                          {"INC-8468"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top"}>
                        <div className={"flex flex-col gap-1 min-w-0"}>
                          <span className={"font-body-base text-body-base font-semibold text-on-surface group-hover:text-primary-fixed transition-colors line-clamp-1"}>
                            {"Ingress Nginx controller OOMKilled following traffic surge on payment webhooks"}
                          </span>
                          <div className={"flex items-center gap-space-xs font-mono-code text-mono-code text-on-surface-variant text-xs"}>
                            <span className={"px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant"}>
                              {"ingress-nginx-controller"}
                            </span>
                            <span>
                              {"•"}
                            </span>
                            <span className={"text-outline"}>
                              {"Memory > 4Gi limit (cgroup killed)"}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap"}>
                        <span className={"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary/15 text-secondary font-mono-badge text-mono-badge"}>
                          <span className={"w-1.5 h-1.5 rounded-full bg-secondary"}></span>
                          {"HIGH"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap"}>
                        <span className={"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-tertiary font-mono-badge text-mono-badge"}>
                          <span className={"w-1.5 h-1.5 rounded-full bg-tertiary"}></span>
                          {"Completed"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap"}>
                        <span className={"inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-mono-badge text-mono-badge"}>
                          <span className={"material-symbols-outlined text-[13px] text-secondary"}>
                            {"bolt"}
                          </span>
                          {"Auto"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap font-mono-code text-mono-code text-on-surface"}>
                        {"01m 15s"}
                      </td>
                      <td className={"py-space-md px-space-md align-top whitespace-nowrap font-mono-code text-mono-code text-on-surface-variant"}>
                        {"Nov 13, 22:04"}
                      </td>
                      <td className={"py-space-md px-space-lg align-top text-right whitespace-nowrap"}>
                        <button className={"p-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"}>
                          <span className={"material-symbols-outlined text-[18px]"}>
                            {"chevron_right"}
                          </span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={"px-space-lg py-space-md bg-surface-container flex flex-col sm:flex-row items-center justify-between gap-space-sm"}>
                <div className={"font-body-sm text-body-sm text-on-surface-variant"}>
                  {"Showing"}
                  <span className={"font-mono-code text-on-surface font-semibold"}>
                    {"1"}
                  </span>
                  {"to"}
                  <span className={"font-mono-code text-on-surface font-semibold"}>
                    {"7"}
                  </span>
                  {"of"}
                  <span className={"font-mono-code text-on-surface font-semibold"}>
                    {"142"}
                  </span>
                  {"incidents"}
                </div>
                <div className={"flex items-center gap-space-xs"}>
                  <button className={"p-1.5 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface disabled:opacity-40 disabled:pointer-events-none transition-colors"} disabled>
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"chevron_left"}
                    </span>
                  </button>
                  <div className={"flex items-center gap-1 font-mono-code text-mono-code"}>
                    <button className={"w-8 h-8 rounded-lg bg-primary-container text-on-primary font-bold shadow-sm"}>
                      {"1"}
                    </button>
                    <button className={"w-8 h-8 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors"}>
                      {"2"}
                    </button>
                    <button className={"w-8 h-8 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors"}>
                      {"3"}
                    </button>
                    <span className={"px-1 text-outline"}>
                      {"..."}
                    </span>
                    <button className={"w-8 h-8 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors"}>
                      {"21"}
                    </button>
                  </div>
                  <button className={"p-1.5 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors"}>
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"chevron_right"}
                    </span>
                  </button>
                </div>
              </div>
            </section>
            <section className={"p-space-md rounded-xl bg-surface-container-low flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md shadow-sm"}>
              <div className={"flex items-center gap-space-sm min-w-0"}>
                        <div className={"w-8 h-8 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary-fixed shrink-0"}>
                  <span className={"material-symbols-outlined text-[20px]"}>
                    {"smart_toy"}
                  </span>
                </div>
                <div className={"flex flex-col min-w-0"}>
                  <span className={"font-body-sm text-body-sm font-semibold text-on-surface truncate"}>
                    {"Automated Corroboration Engine active on 14 worker nodes"}
                  </span>
                  <span className={"font-mono-code text-[11px] text-on-surface-variant truncate"}>
                    {"Causal graph depth: 4 tiers • Graph neural net latency: 42ms • Auto-rollback triggers armed"}
                  </span>
                </div>
              </div>
              <div className={"flex items-center gap-space-sm self-end md:self-auto shrink-0"}>
                <span className={"inline-flex items-center gap-1.5 font-mono-badge text-mono-badge text-tertiary"}>
                  <span className={"w-2 h-2 rounded-full bg-tertiary"}></span>
                  {"STREAM SYNCED"}
                </span>
                <button className={"px-space-sm py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-mono-badge text-mono-badge transition-colors"}>
                  {"Inspect Topology"}
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

import { ScreenNav } from "@/components/ScreenNav";

export default function ApiKeysPage() {
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
          <div className={"flex flex-col w-full max-w-[1200px] mx-auto space-y-space-lg"}>
            <div className={"flex flex-col md:flex-row md:items-start justify-between gap-space-md pt-space-xs"}>
              <div className={"flex flex-col space-y-space-xxs max-w-3xl"}>
                <div className={"flex items-center gap-space-xs font-mono-badge text-mono-badge text-on-surface-variant uppercase tracking-wider mb-space-xxs"}>
                  <span className={"text-tertiary"}>
                    {"Access Control"}
                  </span>
                  <span>
                    {"/"}
                  </span>
                  <span className={"text-on-surface"}>
                    {"Credentials"}
                  </span>
                </div>
                <h1 className={"font-headline-lg text-headline-lg text-on-surface tracking-tight"}>
                  {"API Keys"}
                </h1>
                <p className={"font-body-base text-body-base text-on-surface-variant leading-relaxed"}>
                  {"Machine access credentials for programmatic telemetry ingestion, CI/CD webhooks, and automated RCA query triggers. Secret keys are displayed once upon generation and never stored in plaintext."}
                </p>
                <div className={"flex flex-wrap items-center gap-space-xs pt-space-xs"}>
                  <div className={"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-mono-badge text-mono-badge shadow-sm"}>
                    <span className={"w-1.5 h-1.5 rounded-full bg-tertiary"}></span>
                    <span>
                      {"3 ACTIVE KEYS"}
                    </span>
                  </div>
                  <div className={"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-mono-badge text-mono-badge shadow-sm"}>
                    <span className={"w-1.5 h-1.5 rounded-full bg-outline"}></span>
                    <span>
                      {"1 REVOKED"}
                    </span>
                  </div>
                  <div className={"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-primary font-mono-badge text-mono-badge shadow-sm"}>
                    <span className={"material-symbols-outlined text-[13px]"}>
                      {"verified_user"}
                    </span>
                    <span>
                      {"mTLS / SHA-256 HMAC ENFORCED"}
                    </span>
                  </div>
                  <div className={"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-mono-badge text-mono-badge shadow-sm"}>
                    <span className={"material-symbols-outlined text-[13px]"}>
                      {"lock_clock"}
                    </span>
                    <span>
                      {"MAX TTL: 90 DAYS"}
                    </span>
                  </div>
                </div>
              </div>
              <div className={"flex items-center gap-space-sm self-start shrink-0"}>
                <button className={"group relative flex items-center gap-space-xs px-space-md py-2.5 bg-primary-container text-on-primary-container rounded-lg font-headline-sm text-body-base hover:bg-inverse-primary transition-all duration-150 shadow-[0_0_24px_rgba(110,74,255,0.35)] active:scale-95"} id={"createKeyBtn"}>
                  <span className={"material-symbols-outlined text-[18px]"}>
                    {"add_circle"}
                  </span>
                  <span>
                    {"Create key"}
                  </span>
                </button>
              </div>
            </div>
            <div className={"relative overflow-hidden rounded-xl bg-surface-container-high p-space-lg shadow-xl"} id={"newKeyBanner"}>
              <div className={"absolute -top-24 -right-24 w-80 h-80 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"}></div>
              <div className={"relative z-10 flex flex-col space-y-space-md"}>
                <div className={"flex items-center justify-between"}>
                  <div className={"flex items-center gap-space-sm"}>
                    <div className={"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-mono-badge text-mono-badge tracking-wider"}>
                      <span className={"w-1.5 h-1.5 rounded-full bg-on-secondary-container animate-ping"}></span>
                      <span>
                        {"JUST GENERATED • EXPOSED ONCE"}
                      </span>
                    </div>
                    <span className={"font-mono-badge text-mono-badge text-tertiary uppercase"}>
                      {"Created 42s ago"}
                    </span>
                  </div>
                  <button aria-label={"Dismiss key revelation alert"} className={"flex items-center justify-center w-8 h-8 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors"} id={"dismissBannerBtn"}>
                    <span className={"material-symbols-outlined text-[18px]"}>
                      {"close"}
                    </span>
                  </button>
                </div>
                <div className={"space-y-1"}>
                  <h2 className={"font-headline-sm text-headline-sm text-secondary flex items-center gap-space-xs font-bold"}>
                    <span className={"material-symbols-outlined text-[20px]"}>
                      {"warning"}
                    </span>
                    {"Save your secret key now — this key will not be shown again."}
                  </h2>
                  <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                    {"IncidentIQ only stores cryptographic digests ("}
                    <span className={"font-mono-code text-mono-code text-on-surface font-semibold"}>
                      {"bcrypt / SHA-256 HMAC"}
                    </span>
                    {"). If you lose access to this secret token, you will need to re-provision the integration and revoke this credential immediately."}
                  </p>
                </div>
                <div className={"flex flex-col lg:flex-row lg:items-center justify-between gap-space-md p-space-md rounded-lg bg-surface-container-lowest"}>
                  <div className={"flex flex-col space-y-1.5 min-w-0"}>
                    <div className={"flex items-center gap-space-xs"}>
                      <span className={"material-symbols-outlined text-[16px] text-primary"}>
                        {"terminal"}
                      </span>
                      <span className={"font-mono-code text-mono-code font-semibold text-primary"}>
                        {"ci-cd-github-actions-pipeline"}
                      </span>
                      <span className={"px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-mono-badge text-mono-badge"}>
                        {"prod-telemetry-sink"}
                      </span>
                    </div>
                    <div className={"flex items-center gap-space-xs font-mono-base text-mono-base text-on-surface tracking-wide select-all overflow-x-auto py-1"}>
                      <span className={"text-tertiary"}>
                        {"iiq_live_"}
                      </span>
                      <span id={"secretRawKey"}>
                        {"9f83a8b21c4e72d603a19b882e75fae04bc12"}
                      </span>
                    </div>
                    <div className={"flex items-center gap-space-xs text-on-surface-variant font-mono-badge text-mono-badge"}>
                      <span className={"material-symbols-outlined text-[14px]"}>
                        {"event_available"}
                      </span>
                      <span>
                        {"Never expires"}
                      </span>
                      <span>
                        {"•"}
                      </span>
                      <span className={"text-tertiary"}>
                        {"Scope: ingest:telemetry, read:incidents, trigger:rca"}
                      </span>
                    </div>
                  </div>
                  <div className={"flex items-center gap-space-xs shrink-0 self-end lg:self-center"}>
                    <button className={"flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-primary text-on-primary font-mono-base text-mono-base font-semibold hover:bg-primary-fixed-dim active:scale-95 transition-all shadow-md"} id={"copyKeyBtn"}>
                      <span className={"material-symbols-outlined text-[18px]"} id={"copyIcon"}>
                        {"content_copy"}
                      </span>
                      <span id={"copyLabel"}>
                        {"Copy full key"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={"flex flex-col rounded-xl bg-surface-container shadow-xl overflow-hidden"}>
              <div className={"flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-md p-space-md bg-surface-container-high"}>
                <div className={"relative flex-1 max-w-md"}>
                  <span className={"absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-[18px]"}>
                    {"search"}
                  </span>
                  <input className={"w-full h-10 pl-10 pr-space-md rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline font-mono-code text-mono-code focus:outline-none focus:bg-surface-container-low transition-all"} id={"keySearchInput"} placeholder={"Filter keys by identifier, prefix or tag..."} type={"text"} />
                </div>
                <div className={"flex items-center gap-space-xs overflow-x-auto pb-1 md:pb-0"}>
                  <button className={"px-space-sm py-1 rounded-full bg-primary-container text-on-primary font-mono-badge text-mono-badge tracking-wider transition-colors shrink-0"}>
                    {"ALL (4)"}
                  </button>
                  <button className={"px-space-sm py-1 rounded-full bg-surface-container-low text-on-surface-variant hover:text-on-surface font-mono-badge text-mono-badge tracking-wider transition-colors shrink-0"}>
                    {"ACTIVE (3)"}
                  </button>
                  <button className={"px-space-sm py-1 rounded-full bg-surface-container-low text-on-surface-variant hover:text-on-surface font-mono-badge text-mono-badge tracking-wider transition-colors shrink-0"}>
                    {"CI/CD WEBHOOKS"}
                  </button>
                  <button className={"px-space-sm py-1 rounded-full bg-surface-container-low text-on-surface-variant hover:text-on-surface font-mono-badge text-mono-badge tracking-wider transition-colors shrink-0"}>
                    {"REVOKED (1)"}
                  </button>
                </div>
              </div>
              <div className={"overflow-x-auto w-full"}>
                <table className={"w-full text-left border-collapse"}>
                  <thead>
                    <tr className={"bg-surface-container-lowest font-mono-badge text-mono-badge text-on-surface-variant uppercase tracking-wider"}>
                      <th className={"py-3 px-space-md font-semibold"}>
                        {"Credential Name & Scope"}
                      </th>
                      <th className={"py-3 px-space-md font-semibold"}>
                        {"Key Prefix"}
                      </th>
                      <th className={"py-3 px-space-md font-semibold"}>
                        {"Created Date"}
                      </th>
                      <th className={"py-3 px-space-md font-semibold"}>
                        {"Last Used"}
                      </th>
                      <th className={"py-3 px-space-md font-semibold"}>
                        {"Status"}
                      </th>
                      <th className={"py-3 px-space-md text-right font-semibold"}>
                        {"Actions"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className={"divide-y-0 font-body-sm text-body-sm"}>
                    <tr className={"group hover:bg-surface-container-high/60 transition-colors"}>
                      <td className={"py-space-md px-space-md align-top"}>
                        <div className={"flex flex-col"}>
                          <span className={"font-headline-sm text-body-base font-semibold text-on-surface group-hover:text-primary transition-colors flex items-center gap-1.5"}>
                            <span className={"material-symbols-outlined text-[16px] text-tertiary"}>
                              {"hub"}
                            </span>
                            {"datadog-webhook-sink"}
                          </span>
                          <div className={"flex items-center gap-space-xs mt-1"}>
                            <span className={"font-mono-badge text-[10px] px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface-variant"}>
                              {"ingest:events"}
                            </span>
                            <span className={"font-mono-badge text-[10px] px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface-variant"}>
                              {"write:telemetry"}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className={"py-space-md px-space-md align-top"}>
                        <div className={"flex items-center gap-space-xs font-mono-code text-mono-code text-on-surface"}>
                          <span className={"bg-surface-container-low px-2 py-1 rounded"}>
                            {"iiq_live_8f12••••••••••••••••"}
                          </span>
                          <button className={"opacity-40 hover:opacity-100 text-on-surface-variant transition-opacity p-1"} title={"Copy prefix"}>
                            <span className={"material-symbols-outlined text-[15px]"}>
                              {"content_copy"}
                            </span>
                          </button>
                        </div>
                      </td>
                      <td className={"py-space-md px-space-md align-top font-mono-code text-mono-code text-on-surface-variant"}>
                        {"Jan 02, 2025"}
                      </td>
                      <td className={"py-space-md px-space-md align-top"}>
                        <div className={"flex items-center gap-1.5 font-mono-code text-mono-code text-on-surface"}>
                          <span className={"w-1.5 h-1.5 rounded-full bg-tertiary"}></span>
                          <span>
                            {"12 seconds ago"}
                          </span>
                        </div>
                      </td>
                      <td className={"py-space-md px-space-md align-top"}>
                        <span className={"inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container-lowest text-tertiary font-mono-badge text-mono-badge"}>
                          <span className={"w-1.5 h-1.5 rounded-full bg-tertiary"}></span>
                          {"ACTIVE"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top text-right"}>
                        <button className={"font-mono-code text-mono-code text-secondary hover:text-secondary-fixed font-semibold hover:underline transition-all"}>
                          {"Revoke"}
                        </button>
                      </td>
                    </tr>
                    <tr className={"group hover:bg-surface-container-high/60 transition-colors"}>
                      <td className={"py-space-md px-space-md align-top"}>
                        <div className={"flex flex-col"}>
                          <span className={"font-headline-sm text-body-base font-semibold text-on-surface group-hover:text-primary transition-colors flex items-center gap-1.5"}>
                            <span className={"material-symbols-outlined text-[16px] text-tertiary"}>
                              {"alt_route"}
                            </span>
                            {"github-actions-deploy-reporter"}
                          </span>
                          <div className={"flex items-center gap-space-xs mt-1"}>
                            <span className={"font-mono-badge text-[10px] px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface-variant"}>
                              {"ci:deployment_hook"}
                            </span>
                            <span className={"font-mono-badge text-[10px] px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface-variant"}>
                              {"read:incidents"}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className={"py-space-md px-space-md align-top"}>
                        <div className={"flex items-center gap-space-xs font-mono-code text-mono-code text-on-surface"}>
                          <span className={"bg-surface-container-low px-2 py-1 rounded"}>
                            {"iiq_live_4a91••••••••••••••••"}
                          </span>
                          <button className={"opacity-40 hover:opacity-100 text-on-surface-variant transition-opacity p-1"} title={"Copy prefix"}>
                            <span className={"material-symbols-outlined text-[15px]"}>
                              {"content_copy"}
                            </span>
                          </button>
                        </div>
                      </td>
                      <td className={"py-space-md px-space-md align-top font-mono-code text-mono-code text-on-surface-variant"}>
                        {"Feb 18, 2025"}
                      </td>
                      <td className={"py-space-md px-space-md align-top"}>
                        <div className={"flex items-center gap-1.5 font-mono-code text-mono-code text-on-surface"}>
                          <span className={"w-1.5 h-1.5 rounded-full bg-tertiary"}></span>
                          <span>
                            {"4 minutes ago"}
                          </span>
                        </div>
                      </td>
                      <td className={"py-space-md px-space-md align-top"}>
                        <span className={"inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container-lowest text-tertiary font-mono-badge text-mono-badge"}>
                          <span className={"w-1.5 h-1.5 rounded-full bg-tertiary"}></span>
                          {"ACTIVE"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top text-right"}>
                        <button className={"font-mono-code text-mono-code text-secondary hover:text-secondary-fixed font-semibold hover:underline transition-all"}>
                          {"Revoke"}
                        </button>
                      </td>
                    </tr>
                    <tr className={"group hover:bg-surface-container-high/60 transition-colors"}>
                      <td className={"py-space-md px-space-md align-top"}>
                        <div className={"flex flex-col"}>
                          <span className={"font-headline-sm text-body-base font-semibold text-on-surface group-hover:text-primary transition-colors flex items-center gap-1.5"}>
                            <span className={"material-symbols-outlined text-[16px] text-tertiary"}>
                              {"lan"}
                            </span>
                            {"terraform-cluster-provisioner"}
                          </span>
                          <div className={"flex items-center gap-space-xs mt-1"}>
                            <span className={"font-mono-badge text-[10px] px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface-variant"}>
                              {"admin:clusters"}
                            </span>
                            <span className={"font-mono-badge text-[10px] px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface-variant"}>
                              {"read:topology"}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className={"py-space-md px-space-md align-top"}>
                        <div className={"flex items-center gap-space-xs font-mono-code text-mono-code text-on-surface"}>
                          <span className={"bg-surface-container-low px-2 py-1 rounded"}>
                            {"iiq_live_2c77••••••••••••••••"}
                          </span>
                          <button className={"opacity-40 hover:opacity-100 text-on-surface-variant transition-opacity p-1"} title={"Copy prefix"}>
                            <span className={"material-symbols-outlined text-[15px]"}>
                              {"content_copy"}
                            </span>
                          </button>
                        </div>
                      </td>
                      <td className={"py-space-md px-space-md align-top font-mono-code text-mono-code text-on-surface-variant"}>
                        {"Oct 14, 2024"}
                      </td>
                      <td className={"py-space-md px-space-md align-top"}>
                        <div className={"flex items-center gap-1.5 font-mono-code text-mono-code text-on-surface-variant"}>
                          <span className={"w-1.5 h-1.5 rounded-full bg-outline"}></span>
                          <span>
                            {"3 hours ago"}
                          </span>
                        </div>
                      </td>
                      <td className={"py-space-md px-space-md align-top"}>
                        <span className={"inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container-lowest text-tertiary font-mono-badge text-mono-badge"}>
                          <span className={"w-1.5 h-1.5 rounded-full bg-tertiary"}></span>
                          {"ACTIVE"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top text-right"}>
                        <button className={"font-mono-code text-mono-code text-secondary hover:text-secondary-fixed font-semibold hover:underline transition-all"}>
                          {"Revoke"}
                        </button>
                      </td>
                    </tr>
                    <tr className={"opacity-50 line-through bg-surface-container-lowest/30"}>
                      <td className={"py-space-md px-space-md align-top"}>
                        <div className={"flex flex-col"}>
                          <span className={"font-headline-sm text-body-base font-medium text-on-surface-variant flex items-center gap-1.5"}>
                            <span className={"material-symbols-outlined text-[16px] text-outline"}>
                              {"cancel"}
                            </span>
                            {"legacy-pagerduty-relay"}
                          </span>
                          <div className={"flex items-center gap-space-xs mt-1"}>
                            <span className={"font-mono-badge text-[10px] px-1.5 py-0.5 rounded bg-surface-container text-outline"}>
                              {"sync:incidents"}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className={"py-space-md px-space-md align-top"}>
                        <div className={"flex items-center gap-space-xs font-mono-code text-mono-code text-outline"}>
                          <span className={"bg-surface-container-lowest px-2 py-1 rounded"}>
                            {"iiq_live_0b33••••••••••••••••"}
                          </span>
                        </div>
                      </td>
                      <td className={"py-space-md px-space-md align-top font-mono-code text-mono-code text-outline"}>
                        {"Aug 20, 2024"}
                      </td>
                      <td className={"py-space-md px-space-md align-top font-mono-code text-mono-code text-outline"}>
                        {"Oct 12, 2024"}
                      </td>
                      <td className={"py-space-md px-space-md align-top no-underline"}>
                        <span className={"inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-mono-badge text-mono-badge"}>
                          <span className={"w-1.5 h-1.5 rounded-full bg-outline"}></span>
                          {"REVOKED"}
                        </span>
                      </td>
                      <td className={"py-space-md px-space-md align-top text-right no-underline font-mono-badge text-mono-badge text-outline"}>
                        {"Revoked Oct 14"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={"flex items-center justify-between px-space-md py-space-sm bg-surface-container-lowest text-on-surface-variant font-mono-badge text-mono-badge"}>
                <span>
                  {"Showing 4 of 4 credentials"}
                </span>
                <div className={"flex items-center gap-space-xs"}>
                  <span className={"w-2 h-2 rounded-full bg-tertiary"}></span>
                  <span className={"text-on-surface font-semibold"}>
                    {"Audit logs synced"}
                  </span>
                </div>
              </div>
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-3 gap-space-md"}>
              <div className={"p-space-md rounded-xl bg-surface-container flex flex-col space-y-space-xs"}>
                <div className={"flex items-center gap-space-xs text-primary"}>
                  <span className={"material-symbols-outlined text-[20px]"}>
                    {"sync_lock"}
                  </span>
                  <span className={"font-headline-sm text-body-base font-semibold"}>
                    {"Quarterly Key Rotation"}
                  </span>
                </div>
                <p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed"}>
                  {"Production credentials should be rotated every 90 days. For zero-downtime rollover, create a secondary key before decommissioning the deprecated token."}
                </p>
              </div>
              <div className={"p-space-md rounded-xl bg-surface-container flex flex-col space-y-space-xs"}>
                <div className={"flex items-center gap-space-xs text-tertiary"}>
                  <span className={"material-symbols-outlined text-[20px]"}>
                    {"vpn_key"}
                  </span>
                  <span className={"font-headline-sm text-body-base font-semibold"}>
                    {"External Secrets Sync"}
                  </span>
                </div>
                <p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed"}>
                  {"Avoid manual copy-pasting into CI runners. Configure automated rotation via our native"}
                  <a className={"text-tertiary underline font-mono-code text-mono-code"} href={"#"}>
                    {"HashiCorp Vault"}
                  </a>
                  {"or"}
                  <a className={"text-tertiary underline font-mono-code text-mono-code"} href={"#"}>
                    {"AWS Secrets Manager"}
                  </a>
                  {"plugins."}
                </p>
              </div>
              <div className={"p-space-md rounded-xl bg-surface-container flex flex-col space-y-space-xs"}>
                <div className={"flex items-center gap-space-xs text-secondary"}>
                  <span className={"material-symbols-outlined text-[20px]"}>
                    {"shield"}
                  </span>
                  <span className={"font-headline-sm text-body-base font-semibold"}>
                    {"Automated Compromise Guard"}
                  </span>
                </div>
                <p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed"}>
                  {"Public GitHub repositories and plaintext commit traces are actively scanned by IncidentIQ Secret Hound. Compromised keys trigger instant emergency revocation."}
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ScreenNav>
  );
}

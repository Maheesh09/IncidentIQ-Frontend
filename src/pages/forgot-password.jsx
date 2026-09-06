import { Link } from "@tanstack/react-router";

export default function ForgotPasswordPage() {
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
        <div className={"flex flex-col w-full"}>
          <div className={"w-full max-w-max-content-width mx-auto px-space-md lg:px-space-xl py-space-xl lg:py-space-2xl min-h-[calc(100vh-4rem)] flex items-center justify-center"}>
            <div className={"w-full grid grid-cols-1 lg:grid-cols-12 rounded-xl overflow-hidden shadow-2xl bg-surface-container-lowest"}>
              <div className={"lg:col-span-5 relative bg-surface-container-low p-space-xl lg:p-space-2xl flex flex-col justify-between overflow-hidden"}>
                <div className={"absolute -top-24 -left-24 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"}></div>
                <div className={"absolute -bottom-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-2xl pointer-events-none"}></div>
                <div className={"absolute inset-0 p-space-md opacity-[0.04] pointer-events-none select-none font-mono-code text-mono-code text-on-surface leading-relaxed overflow-hidden"}>
                  {"[03:14:01.890] INF SYS_KERNEL_INIT SECCOMP_MODE=STRICT"}
                  <br />
                  {"[03:14:02.109] INF RECOVERY_ORCHESTRATOR::CHALLENGE_GENERATE ID=REC-99481"}
                  <br />
                  {"[03:14:02.214] DBG KMS_SESSION_SIGNATURE SHA256=9f8a3c...d81e"}
                  <br />
                  {"[03:14:02.321] DBG KMS_ENCLAVE_VERIFY HARDWARE_ROOT_ATTESTATION=PASSED"}
                  <br />
                  {"[03:14:02.502] INF AUDIT_TRAIL_APPEND USER_EVENT=AUTH_RESET_REQUESTED"}
                  <br />
                  {"[03:14:02.610] INF GEOIP_LOOKUP IP=198.51.100.41 COORD=US-EAST-VA"}
                  <br />
                  {"[03:14:02.784] DBG RATE_LIMIT_CHECK BURST=0/5 INTERVAL=15M STATUS=ALLOW"}
                  <br />
                  {"[03:14:02.991] INF EPHEMERAL_LINK_ISSUE ENCRYPT_CIPHER=AES256-GCM"}
                  <br />
                  {"[03:14:03.110] DBG FIDO2_ATTESTATION_CHALLENGE PROTO=CTAP2_1"}
                  <br />
                  {"[03:14:03.402] INF VAULT_AUDIT_DISPATCH ENDPOINT=SIEM-KINESIS-04"}
                  <br />
                  {"[03:14:03.882] INF ZERO_TRUST_SYNC CLUSTERS=ALL_SYNCHRONIZED"}
                </div>
                <div className={"relative z-10 space-y-space-md"}>
                  <div className={"flex items-center justify-between gap-space-sm flex-wrap"}>
                    <div className={"flex items-center gap-space-xs"}>
                      <img alt={"IncidentIQ Logo"} className={"h-7 w-auto object-contain"} src={"/logo.svg"} />
                      <span className={"font-headline-sm text-headline-sm text-on-surface tracking-tight font-semibold"}>
                        {"IncidentIQ"}
                      </span>
                    </div>
                    <div className={"inline-flex items-center gap-space-xxs bg-surface-container-high px-space-xs py-1 rounded-full shadow-sm"}>
                      <span className={"w-1.5 h-1.5 rounded-full bg-secondary-container animate-ping"}></span>
                      <span className={"font-mono-badge text-mono-badge uppercase text-secondary tracking-wider"}>
                        {"Account Recovery Gateway"}
                      </span>
                    </div>
                  </div>
                  <div className={"mt-space-lg bg-surface-container p-space-md rounded-lg shadow-sm"}>
                    <div className={"flex items-center justify-between mb-space-xs"}>
                      <span className={"font-mono-badge text-mono-badge uppercase text-on-surface-variant tracking-wider"}>
                        {"Vault Integrity Check"}
                      </span>
                      <span className={"font-mono-badge text-mono-badge text-primary uppercase"}>
                        {"Active Enclave"}
                      </span>
                    </div>
                    <div className={"flex items-baseline gap-space-xs"}>
                      <span className={"font-mono-metric text-mono-metric text-on-surface font-semibold"}>
                        {"100%"}
                      </span>
                      <span className={"font-mono-badge text-mono-badge text-on-surface-variant"}>
                        {"HW ATTESTED"}
                      </span>
                    </div>
                    <div className={"w-full bg-surface-container-highest h-1.5 rounded-full mt-space-xs overflow-hidden"}>
                      <div className={"bg-primary h-full rounded-full w-full"}></div>
                    </div>
                  </div>
                </div>
                <div className={"relative z-10 my-space-xl space-y-space-sm"}>
                  <div className={"inline-flex items-center gap-space-xxs text-primary font-mono-badge text-mono-badge uppercase tracking-wider"}>
                    <span className={"material-symbols-outlined text-primary text-[14px]"}>
                      {"terminal"}
                    </span>
                    <span>
                      {"SecOps Protocol v2.4.9"}
                    </span>
                  </div>
                  <h2 className={"font-headline-lg text-headline-lg text-on-surface tracking-tight leading-snug"}>
                    {"Cryptographic identity recovery. Fast, secure, audit-trailed."}
                  </h2>
                  <p className={"font-body-base text-body-base text-on-surface-variant"}>
                    {"Regain access to your production telemetry war rooms with hardware security key or ephemeral magic token verification."}
                  </p>
                </div>
                <div className={"relative z-10 pt-space-md space-y-space-sm bg-surface-container-lowest/50 p-space-md rounded-xl backdrop-blur-sm"}>
                  <div className={"grid grid-cols-2 gap-space-sm"}>
                    <div className={"bg-surface-container p-space-xs rounded-lg flex items-center gap-space-xs"}>
                      <div className={"w-7 h-7 rounded bg-surface-container-high flex items-center justify-center shrink-0"}>
                        <span className={"material-symbols-outlined text-primary text-[16px]"}>
                          {"verified_user"}
                        </span>
                      </div>
                      <div className={"min-w-0"}>
                        <div className={"font-mono-badge text-mono-badge text-on-surface uppercase truncate"}>
                          {"Audit SIEM"}
                        </div>
                        <div className={"font-mono-code text-[11px] text-on-surface-variant truncate"}>
                          {"Immutable Stream"}
                        </div>
                      </div>
                    </div>
                    <div className={"bg-surface-container p-space-xs rounded-lg flex items-center gap-space-xs"}>
                      <div className={"w-7 h-7 rounded bg-surface-container-high flex items-center justify-center shrink-0"}>
                        <span className={"material-symbols-outlined text-primary text-[16px]"}>
                          {"timer"}
                        </span>
                      </div>
                      <div className={"min-w-0"}>
                        <div className={"font-mono-badge text-mono-badge text-on-surface uppercase truncate"}>
                          {"Token TTL"}
                        </div>
                        <div className={"font-mono-code text-[11px] text-on-surface-variant truncate"}>
                          {"15 Mins Expiry"}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"flex items-center justify-between text-on-surface-variant font-mono-badge text-mono-badge uppercase pt-space-xxs"}>
                    <span className={"flex items-center gap-1"}>
                      <span className={"w-1.5 h-1.5 rounded-full bg-primary"}></span>
                      {"FIDO2 / WebAuthn Level 3"}
                    </span>
                    <span className={"text-on-surface"}>
                      {"Security practices"}
                    </span>
                  </div>
                </div>
              </div>
              <div className={"lg:col-span-7 bg-surface-container-lowest p-space-xl lg:p-space-2xl flex flex-col justify-center items-center"}>
                <div className={"w-full max-w-105 space-y-space-lg"}>
                  <div className={"space-y-space-xs"}>
                    <div className={"inline-flex items-center gap-space-xxs bg-surface-container px-space-xs py-1 rounded-full"}>
                      <span className={"w-1.5 h-1.5 rounded-full bg-primary-container"}></span>
                      <span className={"font-mono-badge text-mono-badge uppercase text-primary tracking-wider"}>
                        {"Terminal Access Recovery / Auth-v2"}
                      </span>
                    </div>
                    <h1 className={"font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold"}>
                      {"Reset your password"}
                    </h1>
                    <p className={"font-body-base text-body-base text-on-surface-variant"}>
                      {"Enter the verified work email associated with your SRE or platform engineering organization. We will transmit an encrypted recovery link."}
                    </p>
                  </div>
                  <form className={"space-y-space-md"} id={"recovery-form"}>
                    <div className={"space-y-space-xxs"}>
                      <div className={"flex items-center justify-between"}>
                        <label className={"font-mono-badge text-mono-badge uppercase text-on-surface tracking-wider"} htmlFor={"work-email"}>
                          {"Work Email"}
                        </label>
                        <span className={"font-mono-badge text-mono-badge text-on-surface-variant"}>
                          {"SEC-LEVEL 4"}
                        </span>
                      </div>
                      <div className={"relative"}>
                        <div className={"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant"}>
                          <span className={"material-symbols-outlined text-[18px]"}>
                            {"alternate_email"}
                          </span>
                        </div>
                        <input className={"w-full h-11 pl-10 pr-4 bg-surface-container-low text-on-surface font-mono-code text-mono-code rounded-xl outline-none focus:ring-2 focus:ring-primary-container shadow-inner placeholder:text-outline transition-all"} id={"work-email"} name={"email"} placeholder={"sre.oncall@datadog-ops.io"} required type={"email"} />
                      </div>
                    </div>
                    <div className={"bg-surface-container-low p-space-md rounded-xl space-y-space-xxs shadow-sm"}>
                      <div className={"flex items-center gap-space-xs text-secondary-fixed"}>
                        <span className={"material-symbols-outlined text-[18px]"}>
                          {"corporate_fare"}
                        </span>
                        <span className={"font-mono-badge text-mono-badge uppercase tracking-wider font-semibold"}>
                          {"Enterprise SSO Note"}
                        </span>
                      </div>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                        {"For corporate SSO accounts (Google Workspace, Okta, Azure AD), password resets are federated directly through your organization's identity provider."}
                      </p>
                    </div>
                    <button className={"w-full h-12 bg-primary-container hover:bg-inverse-primary text-on-primary-container rounded-xl font-headline-sm text-headline-sm font-semibold flex items-center justify-center gap-space-xs shadow-lg transition-all duration-200 active:scale-[0.99] cursor-pointer"} id={"submit-btn"} type={"submit"}>
                      <span>
                        {"Send encrypted recovery token"}
                      </span>
                      <span className={"material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1"}>
                        {"arrow_forward"}
                      </span>
                    </button>
                  </form>
                  <div className={"hidden p-space-md rounded-xl bg-surface-container space-y-space-xxs animate-fade-in shadow-md"} id={"feedback-panel"}>
                    <div className={"flex items-center gap-space-xs text-primary"}>
                      <span className={"material-symbols-outlined text-[20px]"}>
                        {"mark_email_read"}
                      </span>
                      <span className={"font-mono-badge text-mono-badge uppercase font-semibold"}>
                        {"Transmission Dispatched"}
                      </span>
                    </div>
                    <p className={"font-body-sm text-body-sm text-on-surface-variant"} id={"feedback-msg"}>
                      {"A 256-bit signed cryptographic challenge has been routed. Verify your inbox within 15 minutes."}
                    </p>
                  </div>
                  <div className={"relative flex py-2 items-center"}>
                    <div className={"grow h-px bg-surface-container-high"}></div>
                    <span className={"shrink mx-4 font-mono-badge text-mono-badge uppercase text-outline-variant tracking-wider"}>
                      {"Or Alternate Method"}
                    </span>
                    <div className={"grow h-px bg-surface-container-high"}></div>
                  </div>
                  <button className={"w-full h-11 bg-surface-container-low hover:bg-surface-container text-on-surface rounded-xl font-body-sm text-body-sm font-medium flex items-center justify-center gap-space-xs shadow-sm transition-all"} type={"button"}>
                    <span className={"material-symbols-outlined text-primary text-[18px]"}>
                      {"key"}
                    </span>
                    <span>
                      {"Authenticate with WebAuthn / FIDO2 Security Key"}
                    </span>
                  </button>
                  <div className={"text-center pt-space-xs"}>
                    <Link className={"inline-flex items-center gap-space-xxs font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"} to={"/login"}>
                      <span className={"material-symbols-outlined text-[16px]"}>
                        {"west"}
                      </span>
                      <span>
                        {"Remember your credentials? Return to sign in"}
                      </span>
                    </Link>
                  </div>
                  <div className={"pt-space-md space-y-space-xs"}>
                    <div className={"flex items-center justify-center gap-space-sm text-on-surface-variant font-mono-badge text-mono-badge uppercase tracking-wider flex-wrap"}>
                      <span className={"flex items-center gap-1"}>
                        <span className={"w-1.5 h-1.5 rounded-full bg-primary-container"}></span>
                        {"OIDC 2.0 Native"}
                      </span>
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
                        {"Security overview"}
                      </span>
                    </div>
                    <div className={"flex justify-center"}>
                      <div className={"inline-flex items-center gap-space-xxs bg-surface-container-low px-space-xs py-1 rounded-full shadow-sm"}>
                        <span className={"w-1.5 h-1.5 rounded-full bg-primary"}></span>
                        <span className={"font-mono-badge text-mono-badge uppercase text-on-surface-variant tracking-wider"}>
                          {"All clusters operational"}
                        </span>
                      </div>
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

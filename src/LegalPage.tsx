import { useState, useEffect } from 'react'
import saixLabsLogo from '../saixlabs_logo.svg'
import saixLabsWordmark from './assets/saixlabs-wordmark.png'

export type LegalTab = 'privacy' | 'terms' | 'security' | 'cookies'

interface LegalPageProps {
  initialTab?: LegalTab
  onBackToHome: () => void
  onTabChange?: (tab: LegalTab) => void
}

export function LegalPage({ initialTab = 'privacy', onBackToHome, onTabChange }: LegalPageProps) {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab)

  useEffect(() => {
    if (initialTab && initialTab !== activeTab) {
      setActiveTab(initialTab)
    }
  }, [initialTab])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const titles: Record<LegalTab, string> = {
      privacy: 'Privacy Policy | SAiX LABS',
      terms: 'Terms of Service | SAiX LABS',
      security: 'Security Architecture & Practices | SAiX LABS',
      cookies: 'Cookie Policy | SAiX LABS',
    }
    document.title = titles[activeTab] || 'Legal & Security | SAiX LABS'
  }, [activeTab])

  const handleSelectTab = (tab: LegalTab) => {
    setActiveTab(tab)
    if (onTabChange) {
      onTabChange(tab)
    } else {
      window.location.hash = `#/${tab}`
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="legal-page-shell">
      {/* Top Header */}
      <header className="legal-header">
        <div className="legal-header-inner">
          <a
            className="brand"
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              onBackToHome()
            }}
          >
            <img className="brand-logo" src={saixLabsLogo} alt="SAiX LABS Logo" />
            <img className="brand-wordmark" src={saixLabsWordmark} alt="SAiX LABS" />
          </a>

          <button className="button button-ghost legal-back-btn" onClick={onBackToHome}>
            <span aria-hidden="true">‹</span> BACK TO HOME
          </button>
        </div>
      </header>

      <main className="legal-main">
        {/* Hero Banner */}
        <section className="legal-hero">
          <h1>
            {activeTab === 'privacy' && (
              <>
                PRIVACY <span>POLICY</span>
              </>
            )}
            {activeTab === 'terms' && (
              <>
                TERMS OF <span>SERVICE</span>
              </>
            )}
            {activeTab === 'security' && (
              <>
                SECURITY <span>ARCHITECTURE</span>
              </>
            )}
            {activeTab === 'cookies' && (
              <>
                COOKIE <span>POLICY</span>
              </>
            )}
          </h1>

          {/* Tab Selector */}
          <nav className="legal-tabs-nav" aria-label="Legal documents">
            <button
              className={`legal-tab-btn ${activeTab === 'privacy' ? 'active' : ''}`}
              onClick={() => handleSelectTab('privacy')}
            >
              <svg className="legal-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Privacy Policy
            </button>
            <button
              className={`legal-tab-btn ${activeTab === 'terms' ? 'active' : ''}`}
              onClick={() => handleSelectTab('terms')}
            >
              <svg className="legal-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              Terms of Service
            </button>
            <button
              className={`legal-tab-btn ${activeTab === 'security' ? 'active' : ''}`}
              onClick={() => handleSelectTab('security')}
            >
              <svg className="legal-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Security Policy & Practices
            </button>
            <button
              className={`legal-tab-btn ${activeTab === 'cookies' ? 'active' : ''}`}
              onClick={() => handleSelectTab('cookies')}
            >
              <svg className="legal-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5z" />
                <path d="M8.5 8.5v.01M16 15.5v.01M12 12v.01M11 17v.01M7 13v.01" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              Cookie Policy
            </button>
          </nav>
        </section>

        {/* Content Box */}
        <div className="legal-card-shell">
          <div className="legal-corner legal-corner-tl" />
          <div className="legal-corner legal-corner-tr" />
          <div className="legal-corner legal-corner-bl" />
          <div className="legal-corner legal-corner-br" />

          {/* TAB 1: PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <article className="legal-article">
              <div className="legal-intro-banner">
                <div className="legal-intro-icon">🔒</div>
                <div>
                  <strong>Your Privacy is Paramount</strong>
                  <p>
                    SAiX LABS is dedicated to safeguarding student and organizational data. This policy details how we collect, process, and protect your information across our educational web applications and virtual lab sandboxes.
                  </p>
                </div>
              </div>

              <section className="legal-section">
                <h2>1. Information We Collect</h2>
                <p>When you interact with SAiX LABS, we gather necessary data to provide training and access to secure cyber infrastructure:</p>
                <ul>
                  <li>
                    <strong>Personal Identifiers:</strong> Name, email address, country, billing details, and enterprise affiliation when creating an account or subscribing to our Security Dispatch.
                  </li>
                  <li>
                    <strong>Lab & Learning Telemetry:</strong> Machine execution status, flag submissions, CTF challenge scores, lab session logs, and course completion metrics within our cloud practice ranges.
                  </li>
                  <li>
                    <strong>Technical & Network Logs:</strong> IP address, browser user-agent, operating system, timestamped session tokens, and security audit telemetry used to prevent platform abuse.
                  </li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>2. How We Utilize Your Information</h2>
                <p>All data collected is used strictly for legitimate training and operational purposes:</p>
                <ul>
                  <li>Provisioning isolated virtual machines (VMs) and interactive network target topologies.</li>
                  <li>Issuing verifiable course completion certificates and skill credentials.</li>
                  <li>Detecting unauthorized external port scans, malicious payload injections, or denial-of-service attempts against SAiX LABS infrastructure.</li>
                  <li>Delivering curriculum updates, dispatch releases, and transactional receipts.</li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>3. Lab Sandbox Isolation & Data Segregation</h2>
                <p>
                  Our virtual training environments run in strictly isolated tenant sandboxes. Any traffic, keystrokes, exploits, or payload generation executed inside a dedicated student lab machine are purged automatically upon session termination or timeout. SAiX LABS does not persist student virtual machine hard disk states beyond active lab sessions.
                </p>
              </section>

              <section className="legal-section">
                <h2>4. Data Protection & Encryption Standards</h2>
                <p>
                  All data in transit is protected using TLS 1.3 cryptographic protocols with modern cipher suites. User credentials, access tokens, and sensitive account data are encrypted at rest with AES-256 standards. We enforce multi-factor authentication (MFA) across all administrative control planes.
                </p>
              </section>

              <section className="legal-section">
                <h2>5. Third-Party Sharing Policy</h2>
                <p>
                  <strong>We do not sell, rent, or monetize your personal information.</strong> We only share data with vetted infrastructure partners necessary to deliver our services (e.g., Stripe for PCI-DSS compliant payment processing, trusted cloud GPU/compute providers for virtual lab hosting).
                </p>
              </section>

              <section className="legal-section">
                <h2>6. Your Rights & Data Portability</h2>
                <p>
                  Under international privacy frameworks including GDPR and CCPA, you have the right to request access, modification, or complete deletion of your personal account data at any time. To exercise these rights, submit a request to <a href="mailto:privacy@saixlabs.in">privacy@saixlabs.in</a>.
                </p>
              </section>
            </article>
          )}

          {/* TAB 2: TERMS OF SERVICE */}
          {activeTab === 'terms' && (
            <article className="legal-article">
              <div className="legal-intro-banner">
                <div className="legal-intro-icon">⚖️</div>
                <div>
                  <strong>Rules of Engagement & Ethical Training</strong>
                  <p>
                    By accessing SAiX LABS platforms, courses, and interactive targets, you consent to these Terms of Service. As a cybersecurity academy, we uphold strict ethical hacking boundaries.
                  </p>
                </div>
              </div>

              <section className="legal-section">
                <h2>1. Ethical Use & Authorization Policy</h2>
                <p>
                  All penetration testing techniques, exploit code, scanning scripts, and offensive security methodologies taught by SAiX LABS are strictly intended for defense, research, and authorized educational practice:
                </p>
                <div className="legal-alert-box">
                  <strong>⚠️ Strict Prohibition Notice:</strong> You may ONLY deploy offensive tools and techniques against designated, sandboxed virtual targets explicitly provisioned for your user account within SAiX LABS. Testing against external hosts, third parties, or SAiX LABS host hypervisors without explicit written consent is illegal and will result in immediate termination and referral to law enforcement.
                </div>
              </section>

              <section className="legal-section">
                <h2>2. User Accounts & Credential Security</h2>
                <p>
                  You are responsible for maintaining the confidentiality of your platform credentials and VPN configuration profiles. Account sharing or distributing custom VPN certificates is strictly prohibited and monitored via continuous authentication telemetry.
                </p>
              </section>

              <section className="legal-section">
                <h2>3. Intellectual Property Rights</h2>
                <p>
                  All course curricula, video walkthroughs, proprietary challenge source code, machine configurations, and downloadable materials are the exclusive intellectual property of SAiX LABS. You may not record, redistribute, mirror, or republish challenge solutions or proprietary coursework without written authorization.
                </p>
              </section>

              <section className="legal-section">
                <h2>4. Subscriptions, Fees, and Cancellations</h2>
                <ul>
                  <li><strong>Billing:</strong> Fees for specialized course modules and enterprise seats are billed in advance in accordance with stated rates.</li>
                  <li><strong>Refunds:</strong> Digital course enrollments and dedicated lab credits are eligible for refunds within 7 calendar days of purchase, provided less than 20% of the course modules or lab compute hours have been consumed.</li>
                  <li><strong>Cancellation:</strong> Subscription memberships may be cancelled at any time via your account settings with access remaining active through the current billing period.</li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>5. Limitation of Liability & Disclaimers</h2>
                <p>
                  SAiX LABS provides all training materials and virtual simulation environments on an "AS IS" and "AS AVAILABLE" basis. In no event shall SAiX LABS, its instructors, or affiliates be liable for damages resulting from user misuse of cybersecurity tools or techniques outside our sandboxes.
                </p>
              </section>
            </article>
          )}

          {/* TAB 3: SECURITY POLICY */}
          {activeTab === 'security' && (
            <article className="legal-article">
              <div className="legal-intro-banner">
                <div className="legal-intro-icon">🛡️</div>
                <div>
                  <strong>Security Architecture & Vulnerability Disclosure</strong>
                  <p>
                    Security is our core mission. Explore our platform defense architecture, sandbox isolation controls, and our Vulnerability Disclosure Program (VDP).
                  </p>
                </div>
              </div>

              <section className="legal-section">
                <h2>1. Infrastructure Security & Isolation</h2>
                <p>SAiX LABS platform is architected according to Zero-Trust and defense-in-depth principles:</p>
                <ul>
                  <li>
                    <strong>Micro-Segmented Sandboxes:</strong> Every student lab runs inside isolated software-defined virtual private clouds (VPCs). Virtual interfaces are strictly firewall-gated to prevent lateral movement across student subnets.
                  </li>
                  <li>
                    <strong>Automated Ephemeral Teardowns:</strong> Target machines are instantiated from immutable baseline images and wiped automatically post-session to eliminate data persistence and cross-contamination.
                  </li>
                  <li>
                    <strong>Egress Traffic Filtering:</strong> Virtual student targets operate with restricted egress routing, preventing any target instance from being co-opted for outbound DDoS or botnet relays.
                  </li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>2. Application Security Standards</h2>
                <p>
                  Our internal development lifecycle follows secure coding standards (OWASP Top 10, ASVS Level 2):
                </p>
                <ul>
                  <li>Automated Static Application Security Testing (SAST) and Dependency Scanning in CI/CD pipelines.</li>
                  <li>Content Security Policy (CSP) headers, strict CORS validation, and HTTP Strict Transport Security (HSTS).</li>
                  <li>Role-Based Access Control (RBAC) governing administrative interfaces and database clusters.</li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>3. Vulnerability Disclosure Program (VDP)</h2>
                <p>
                  We welcome responsible security research on our public web surfaces and learning management systems. If you believe you have discovered a vulnerability in SAiX LABS platform:
                </p>
                <div className="legal-code-block">
                  <span>REPORTING PROTOCOL:</span>
                  <code>
                    Email: security@saixlabs.in<br />
                    Subject: [VDP-DISCLOSURE] Vulnerability in &#123;Component&#125;<br />
                    PGP Key Fingerprint: 4E9B 28F1 C983 AA14 82D5 701F B46E 90A2
                  </code>
                </div>
                <p>
                  <strong>Responsible Guidelines:</strong> Please provide a detailed description and reproducible proof-of-concept. Do not access, modify, or destroy user data, and allow our team a 30-day remediation window prior to any public disclosure. We acknowledge valid findings promptly and recognize ethical researchers in our Hall of Fame.
                </p>
              </section>

              <section className="legal-section">
                <h2>4. Incident Response & Monitoring</h2>
                <p>
                  Our dedicated SecOps engineers monitor platform logs, anomaly alerts, and telemetry 24/7/365. In the unlikely event of an incident impacting personal student data, affected parties and relevant data protection authorities will be notified in accordance with regulatory requirements within 72 hours.
                </p>
              </section>
            </article>
          )}

          {/* TAB 4: COOKIE POLICY */}
          {activeTab === 'cookies' && (
            <article className="legal-article">
              <div className="legal-intro-banner">
                <div className="legal-intro-icon">🍪</div>
                <div>
                  <strong>Transparent Cookie & Token Architecture</strong>
                  <p>
                    SAiX LABS uses essential cookies, session storage, and security tokens to protect interactive virtual machines, verify student authentication, and analyze telemetry.
                  </p>
                </div>
              </div>

              <div className="legal-cookie-manage-bar">
                <div>
                  <h4>Manage Your Client Preferences</h4>
                  <p>You can adjust, enable, or disable non-essential telemetry cookies at any time.</p>
                </div>
                <button
                  type="button"
                  className="button button-primary"
                  onClick={() => window.dispatchEvent(new CustomEvent('saixlabs_reopen_cookie_modal'))}
                >
                  MANAGE COOKIE PREFERENCES <span>›</span>
                </button>
              </div>

              <section className="legal-section">
                <h2>1. What Are Cookies and Local Tokens?</h2>
                <p>
                  Cookies are small alphanumeric files placed on your browser or device. Along with cookies, we utilize modern browser storage mechanisms (HTML5 LocalStorage and SessionStorage) to maintain state during active cybersecurity training sessions and target VM orchestration.
                </p>
              </section>

              <section className="legal-section">
                <h2>2. Categories of Cookies We Deploy</h2>
                <ul>
                  <li>
                    <strong>Strictly Necessary & Security Cookies (Mandatory):</strong>
                    <br />
                    These tokens are indispensable for core platform operations. They handle JSON Web Token (JWT) user sessions, Anti-CSRF cryptographic tokens, load-balancer routing, and tenant boundary enforcement across our lab hypervisors. The platform cannot function without these cookies.
                  </li>
                  <li>
                    <strong>Lab Telemetry & Performance Analytics (Optional):</strong>
                    <br />
                    These cookies measure anonymized platform metrics, such as CTF challenge loading latency, machine boot durations, and frontend rendering bottlenecks, allowing our infrastructure engineers to provision sufficient compute clusters.
                  </li>
                  <li>
                    <strong>Terminal & User Interface Preferences (Optional):</strong>
                    <br />
                    These store your customized interface settings, including dark/neon editor themes, shell font sizes, and sidebar expansion preferences across training modules.
                  </li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>3. Third-Party Cookies & Service Integrations</h2>
                <p>
                  SAiX LABS does not run third-party behavioral advertising or tracking pixels. The only external cookies permitted on our surfaces are strictly transactional:
                </p>
                <ul>
                  <li><strong>Stripe:</strong> Fraud detection and PCI-DSS Level 1 compliant secure payment tokenization during course enrollments.</li>
                  <li><strong>Cloudflare / Edge DNS:</strong> DDoS mitigation tokens (`__cf_bm`) to distinguish authentic human learners from malicious automated bots.</li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>4. Controlling & Clearing Cookies in Your Browser</h2>
                <p>
                  In addition to our built-in <button type="button" className="cookie-link-btn" onClick={() => window.dispatchEvent(new CustomEvent('saixlabs_reopen_cookie_modal'))}>Preferences Manager</button>, you can configure your browser to reject or delete cookies:
                </p>
                <ul>
                  <li><strong>Google Chrome:</strong> Settings → Privacy and Security → Third-party cookies</li>
                  <li><strong>Mozilla Firefox:</strong> Settings → Privacy & Security → Enhanced Tracking Protection</li>
                  <li><strong>Apple Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                  <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies</li>
                </ul>
                <p>
                  <em>Note: Disabling strictly necessary cookies in your browser settings may prevent login, certificate generation, and virtual machine terminals from launching.</em>
                </p>
              </section>
            </article>
          )}

          {/* Quick Contact Footer Banner inside card */}
          <div className="legal-card-footer">
            <div>
              <h3>Questions or Inquiries?</h3>
              <p>Our legal and compliance team is available to assist enterprise teams and students alike.</p>
            </div>
            <a className="button button-primary" href="mailto:support@saixlabs.in">
              CONTACT COMPLIANCE <span>›</span>
            </a>
          </div>
        </div>
      </main>

      {/* Legal Footer */}
      <footer className="legal-page-footer">
        <p>© 2026 SAiX LABS. All rights reserved. Defending the modern web.</p>
        <div className="legal-footer-switch">
          <button className={activeTab === 'privacy' ? 'active' : ''} onClick={() => handleSelectTab('privacy')}>
            Privacy Policy
          </button>
          <span>·</span>
          <button className={activeTab === 'terms' ? 'active' : ''} onClick={() => handleSelectTab('terms')}>
            Terms of Service
          </button>
          <span>·</span>
          <button className={activeTab === 'security' ? 'active' : ''} onClick={() => handleSelectTab('security')}>
            Security
          </button>
          <span>·</span>
          <button className={activeTab === 'cookies' ? 'active' : ''} onClick={() => handleSelectTab('cookies')}>
            Cookie Policy
          </button>
        </div>
      </footer>
    </div>
  )
}

import { useState, useEffect } from 'react'

export interface CookiePreferences {
  necessary: boolean // always true
  analytics: boolean
  preferences: boolean
}

const STORAGE_KEY = 'saixlabs_cookie_consent_v1'

interface CookieConsentProps {
  onOpenPolicy?: () => void
}

export function CookieConsent({ onOpenPolicy }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: true,
    preferences: true,
  })

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (!saved) {
        // Small delay so page loads smoothly before banner slides in
        const timer = setTimeout(() => setIsVisible(true), 650)
        return () => clearTimeout(timer)
      } else {
        const parsed = JSON.parse(saved)
        if (parsed.preferences) {
          setPreferences(parsed.preferences)
        }
      }
    } catch {
      setIsVisible(true)
    }
  }, [])

  // Listen for custom event to reopen preferences anytime (e.g. from footer link)
  useEffect(() => {
    const handleReopen = () => {
      setShowModal(true)
    }
    window.addEventListener('saixlabs_reopen_cookie_modal', handleReopen)
    return () => window.removeEventListener('saixlabs_reopen_cookie_modal', handleReopen)
  }, [])

  const saveConsent = (prefs: CookiePreferences) => {
    const data = {
      consented: true,
      timestamp: new Date().toISOString(),
      preferences: prefs,
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    } catch {
      // storage disabled
    }
    setPreferences(prefs)
    setIsVisible(false)
    setShowModal(false)
  }

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      preferences: true,
    })
  }

  const handleNecessaryOnly = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      preferences: false,
    })
  }

  const handleSaveCustom = () => {
    saveConsent(preferences)
  }

  return (
    <>
      {/* ── Floating Cookie Banner ─────────────────────────────── */}
      {isVisible && !showModal && (
        <aside className="cookie-banner-wrapper" aria-label="Cookie consent banner" role="region">
          <div className="cookie-banner-box">
            <div className="cookie-banner-corner cookie-corner-tl" />
            <div className="cookie-banner-corner cookie-corner-tr" />
            <div className="cookie-banner-corner cookie-corner-bl" />
            <div className="cookie-banner-corner cookie-corner-br" />

            <div className="cookie-banner-left">
              <div className="cookie-icon-pill" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="cookie-svg">
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5z" />
                  <path d="M8.5 8.5v.01M16 15.5v.01M12 12v.01M11 17v.01M7 13v.01" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>

              <div className="cookie-banner-text">
                <strong>We Value Your Privacy & Sandbox Integrity</strong>
                <p>
                  SAiX LABS utilizes cookies and local tokens to secure interactive labs, authenticate sessions, and monitor security telemetry. You can customize your preferences or read our{' '}
                  <button
                    type="button"
                    className="cookie-link-btn"
                    onClick={() => {
                      if (onOpenPolicy) onOpenPolicy()
                      else window.location.hash = '#/cookies'
                    }}
                  >
                    Cookie Policy
                  </button>
                  .
                </p>
              </div>
            </div>

            <div className="cookie-banner-actions">
              <button
                type="button"
                className="cookie-btn cookie-btn-customize"
                onClick={() => setShowModal(true)}
              >
                Customize
              </button>
              <button
                type="button"
                className="cookie-btn cookie-btn-necessary"
                onClick={handleNecessaryOnly}
              >
                Necessary Only
              </button>
              <button
                type="button"
                className="cookie-btn cookie-btn-accept"
                onClick={handleAcceptAll}
              >
                Accept All
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* ── Granular Preferences Modal ──────────────────────────── */}
      {showModal && (
        <div className="cookie-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="cookie-modal-title">
          <div className="cookie-modal-card">
            <div className="cookie-banner-corner cookie-corner-tl" />
            <div className="cookie-banner-corner cookie-corner-tr" />
            <div className="cookie-banner-corner cookie-corner-bl" />
            <div className="cookie-banner-corner cookie-corner-br" />

            <div className="cookie-modal-header">
              <div className="cookie-modal-title-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="cookie-title-icon">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <h3 id="cookie-modal-title">Cookie & Telemetry Preferences</h3>
              </div>
              <button
                type="button"
                className="cookie-modal-close"
                aria-label="Close preferences modal"
                onClick={() => {
                  setShowModal(false)
                  if (!localStorage.getItem(STORAGE_KEY)) {
                    setIsVisible(true)
                  }
                }}
              >
                ✕
              </button>
            </div>

            <p className="cookie-modal-intro">
              Customize how SAiX LABS processes client-side telemetry and tokens. Strictly necessary tokens are mandatory to maintain sandbox hypervisor isolation and authenticated learning progress.
            </p>

            <div className="cookie-toggles-list">
              {/* Category 1: Necessary */}
              <div className="cookie-toggle-item">
                <div className="cookie-toggle-info">
                  <div className="cookie-category-title">
                    <h4>Strictly Necessary & Security Tokens</h4>
                  </div>
                  <p>
                    Essential for account authentication, CSRF validation, tenant isolation, and safe execution within hands-on lab sandboxes. Cannot be deactivated.
                  </p>
                </div>
                <div className="cookie-switch-locked">
                  <input type="checkbox" checked disabled aria-label="Strictly necessary cookies always enabled" />
                  <span className="cookie-slider locked" />
                </div>
              </div>

              {/* Category 2: Analytics & Performance */}
              <div className="cookie-toggle-item">
                <div className="cookie-toggle-info">
                  <div className="cookie-category-title">
                    <h4>Lab Telemetry & Performance Analytics</h4>
                  </div>
                  <p>
                    Aggregates anonymous lab completion times, target responsiveness, and network latency to optimize compute node allocations across global regions.
                  </p>
                </div>
                <label className="cookie-switch">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) =>
                      setPreferences((prev) => ({ ...prev, analytics: e.target.checked }))
                    }
                    aria-label="Toggle lab telemetry & analytics cookies"
                  />
                  <span className="cookie-slider" />
                </label>
              </div>

              {/* Category 3: Functional Preferences */}
              <div className="cookie-toggle-item">
                <div className="cookie-toggle-info">
                  <div className="cookie-category-title">
                    <h4>Terminal & Environment Preferences</h4>
                  </div>
                  <p>
                    Persists your preferred terminal themes, shell keyboard shortcuts, sidebar collapsibility, and code editor customizations across training sessions.
                  </p>
                </div>
                <label className="cookie-switch">
                  <input
                    type="checkbox"
                    checked={preferences.preferences}
                    onChange={(e) =>
                      setPreferences((prev) => ({ ...prev, preferences: e.target.checked }))
                    }
                    aria-label="Toggle functional preference cookies"
                  />
                  <span className="cookie-slider" />
                </label>
              </div>
            </div>

            <div className="cookie-modal-footer">
              <button
                type="button"
                className="cookie-link-btn"
                onClick={() => {
                  setShowModal(false)
                  if (onOpenPolicy) onOpenPolicy()
                  else window.location.hash = '#/cookies'
                }}
              >
                Read Full Cookie Policy →
              </button>

              <div className="cookie-modal-actions">
                <button
                  type="button"
                  className="cookie-btn cookie-btn-necessary"
                  onClick={handleSaveCustom}
                >
                  Save Preferences
                </button>
                <button
                  type="button"
                  className="cookie-btn cookie-btn-accept"
                  onClick={handleAcceptAll}
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

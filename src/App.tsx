import { useState, useEffect } from 'react'
import './App.css'
import heroImage from './assets/cyber-workstation.png'
import heroMobileImage from './assets/cyber-workstation-mobile.png'
import saixLabsLogo from '../saixlabs_logo.svg'
import saixLabsWordmark from './assets/saixlabs-wordmark.png'
import { LegalPage, type LegalTab } from './LegalPage'
import { CookieConsent } from './CookieConsent'
import { WEB3FORMS_CONFIG } from './config/web3forms'

type CourseType = 'ethical' | 'web' | 'network' | 'digital' | 'cloud'
type FeatureIconType = 'curriculum' | 'practical' | 'experts' | 'career' | 'courses' | 'labs' | 'students' | 'ctf'

const stats: { value: string; label: string; icon: FeatureIconType }[] = [
  { value: '10+', label: 'COURSES', icon: 'courses' },
  { value: '100+', label: 'HANDS-ON LABS', icon: 'labs' },
  { value: '1000+', label: 'STUDENTS', icon: 'students' },
  { value: '50+', label: 'CTF CHALLENGES', icon: 'ctf' },
]

type Course = {
  title: string
  description: string
  level: string
  type: CourseType
}

const courses: Course[] = [
  {
    title: 'ETHICAL\nHACKING',
    description: 'Learn offensive security techniques and ethical hacking from scratch.',
    level: 'BEGINNER TO ADVANCED',
    type: 'ethical',
  },
  {
    title: 'WEB APPLICATION\nSECURITY',
    description: 'Find, exploit and secure modern web applications like a pro.',
    level: 'BEGINNER TO ADVANCED',
    type: 'web',
  },
  {
    title: 'NETWORK\nSECURITY',
    description: 'Understand networks, protocols and secure infrastructure.',
    level: 'INTERMEDIATE',
    type: 'network',
  },
  {
    title: 'DIGITAL\nFORENSICS',
    description: 'Investigate digital evidence and uncover the truth.',
    level: 'INTERMEDIATE',
    type: 'digital',
  },
  {
    title: 'CLOUD\nSECURITY',
    description: 'Secure cloud environments and build secure solutions.',
    level: 'INTERMEDIATE',
    type: 'cloud',
  },
]

type WhyType = 'labs' | 'instructors' | 'scenarios' | 'certifications' | 'career'

const reasons: { title: string; description: string; type: WhyType }[] = [
  { title: 'Practical Labs', description: 'Real environments. Real skills.', type: 'labs' },
  { title: 'Expert Instructors', description: 'Learn from industry professionals.', type: 'instructors' },
  { title: 'Real World Scenarios', description: 'Hands-on training with real world use-cases.', type: 'scenarios' },
  { title: 'Certification Support', description: 'Industry recognized certifications.', type: 'certifications' },
  { title: 'Career Support', description: 'Resume help, interview prep & job referrals.', type: 'career' },
]

function CourseIcon({ type }: { type: CourseType }) {
  const commonProps = {
    className: 'course-icon-svg',
    viewBox: '0 0 90 90',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  switch (type) {
    case 'ethical':
      return (
        <svg {...commonProps}>
          <path d="M13 79c3-17 15-25 28-29l4-2h10l4 2c13 4 25 12 28 29H13Z" fill="#071729" />
          <path d="M20 49V39C20 19 32 9 50 9s30 10 30 30v10l-8 14H28l-8-14Z" fill="#081321" />
          <path d="M28 43c2-13 10-22 22-22s20 9 22 22v8c-3 13-11 20-22 20S31 64 28 51v-8Z" fill="#010713" />
          <path d="M18 43C20 20 32 8 50 8s30 12 32 35M24 60l-6 11M76 60l6 11" />
          <path d="M35 46h8M57 46h8" stroke="#39d5ff" strokeWidth="3.5" />
          <path d="M38 57c4 3 8 4 12 4s8-1 12-4" />
          <path d="m20 79 11-13m49 13L69 66" />
        </svg>
      )
    case 'web':
      return (
        <svg {...commonProps}>
          <path d="M50 8 78 18v21c0 20-11 34-28 44C33 73 22 59 22 39V18L50 8Z" fill="#06182a" />
          <path d="M50 8 78 18v21c0 20-11 34-28 44C33 73 22 59 22 39V18L50 8Z" />
          <circle cx="50" cy="43" r="19" />
          <path d="M31 43h38M50 24c7 6 11 12 11 19S57 56 50 62M50 24c-7 6-11 12-11 19s4 13 11 19M35 32h30M35 54h30" />
          <path d="M50 24c-4 5-6 12-6 19s2 14 6 19" opacity=".65" />
        </svg>
      )
    case 'network':
      return (
        <svg {...commonProps}>
          <path d="m45 44 5-23m-5 23-23-7m23 7-17 18m17-18 22-9m-22 9 20 19m-20-19-2 32m-17-32-9-20m31-3 16-13m5 27 13 10M28 62l-14 7m50-6 9 13" />
          <path d="m32 24 18-3m-28 13 13 10m29-16-18 9m-29 18 18 1m26 2-17-6m-2 12 3 17" opacity=".6" />
          <circle cx="50" cy="21" r="4" fill="#06101e" />
          <circle cx="22" cy="37" r="4" fill="#06101e" />
          <circle cx="28" cy="62" r="4" fill="#06101e" />
          <circle cx="67" cy="28" r="4" fill="#06101e" />
          <circle cx="67" cy="63" r="4" fill="#06101e" />
          <circle cx="12" cy="69" r="3" fill="#06101e" />
          <circle cx="75" cy="76" r="3" fill="#06101e" />
          <path d="m39 39 11-8 11 8-4 14H43l-4-14Z" fill="#06101e" />
          <path d="m45 43 4 4 8-9" />
          <circle cx="50" cy="21" r="2" fill="currentColor" />
          <circle cx="22" cy="37" r="2" fill="currentColor" />
          <circle cx="28" cy="62" r="2" fill="currentColor" />
          <circle cx="67" cy="28" r="2" fill="currentColor" />
          <circle cx="67" cy="63" r="2" fill="currentColor" />
        </svg>
      )
    case 'digital':
      return (
        <svg {...commonProps}>
          {/* Background circuit traces & data nodes */}
          <path d="M14 26h14m-14 8h8m-8 8h12m-12 8h8" stroke="#1d4d7a" strokeWidth="1.8" />
          <circle cx="28" cy="26" r="2" fill="#0d8cff" stroke="#0d8cff" />
          <circle cx="26" cy="42" r="2" fill="#0d8cff" stroke="#0d8cff" />

          {/* Binary data streams in background */}
          <path d="M56 18h18m-12 8h12" stroke="#1d4d7a" strokeWidth="1.8" />
          <circle cx="56" cy="18" r="2" fill="#0d8cff" stroke="#0d8cff" />

          {/* Magnifying lens backdrop fill */}
          <circle cx="42" cy="40" r="22" fill="#06182a" stroke="none" />

          {/* Digital Microchip / Evidence Core inside lens */}
          <rect x="33" y="31" width="18" height="18" rx="3" fill="#07233f" stroke="#39d5ff" strokeWidth="2.2" />
          {/* Microchip pins */}
          <path d="M37 27v4m10-4v4m-10 18v4m10-4v4m-18-14h4m-4 8h4m18-8h4m-4 8h4" stroke="#39d5ff" strokeWidth="1.8" />
          {/* Forensic radar / crosshair focus in chip center */}
          <circle cx="42" cy="40" r="4" stroke="#39d5ff" strokeWidth="1.8" />
          <circle cx="42" cy="40" r="1.5" fill="#39d5ff" stroke="none" />

          {/* Magnifying glass outer lens rim */}
          <circle cx="42" cy="40" r="22" stroke="currentColor" strokeWidth="2.8" />
          {/* Inner lens bevel */}
          <circle cx="42" cy="40" r="19" stroke="rgba(57, 213, 255, 0.4)" strokeWidth="1.2" />

          {/* Lens glare / highlight arc */}
          <path d="M26 34a18 18 0 0 1 18-12" stroke="#39d5ff" strokeWidth="2.5" />

          {/* Magnifying glass handle with collar & grip */}
          <path d="M57.5 55.5l5 5" stroke="currentColor" strokeWidth="4.5" />
          <path d="M61 59l15 15" stroke="#39d5ff" strokeWidth="6" />
          <path d="M63 61l13 13" stroke="#06182a" strokeWidth="3" />
          <path d="M65 63l9 9" stroke="#39d5ff" strokeWidth="1.5" />
          <circle cx="76.5" cy="74.5" r="3.2" fill="#06182a" stroke="currentColor" strokeWidth="2.2" />
        </svg>
      )
    case 'cloud':
      return (
        <svg {...commonProps}>
          <path d="M17 52a15 15 0 0 1 15-15c3-12 13-20 25-19 13 1 22 11 23 24 8 2 13 8 13 16 0 9-7 16-17 16H28c-8 0-14-6-14-13 0-4 1-7 3-9Z" fill="#06182a" />
          <path d="M17 52a15 15 0 0 1 15-15c3-12 13-20 25-19 13 1 22 11 23 24 8 2 13 8 13 16 0 9-7 16-17 16H28c-8 0-14-6-14-13 0-4 1-7 3-9Z" />
          <path d="M42 47v-6a9 9 0 0 1 18 0v6" />
          <rect x="38" y="46" width="26" height="22" rx="4" fill="#07508a" />
          <path d="M51 54v6" stroke="#d8f5ff" strokeWidth="3" />
          <circle cx="51" cy="54" r="2" fill="#d8f5ff" />
        </svg>
      )
    default:
      return null
  }
}

function FeatureIcon({ type }: { type: FeatureIconType }) {
  const iconProps = {
    viewBox: '0 0 48 48',
    className: 'icon-svg',
    'aria-hidden': true,
  }

  switch (type) {
    case 'curriculum':
      return (
        <svg {...iconProps}>
          {/* Cyber Shield with inner gear cog */}
          <path
            d="M24 5.5 C29.5 5.5 38 8.5 38 10 V22 C38 31.5 30.5 38.5 24 42.5 C17.5 38.5 10 31.5 10 22 V10 C10 8.5 18.5 5.5 24 5.5 Z"
            strokeWidth="2.2"
          />
          <circle cx="24" cy="22" r="5" strokeWidth="2" />
          <path
            d="M24 14.5v2.2 M24 27.3v2.2 M16.5 22h2.2 M29.3 22h2.2 M18.7 16.7l1.6 1.6 M27.7 25.7l1.6 1.6 M18.7 27.3l1.6-1.6 M27.7 18.3l1.6-1.6"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <circle cx="24" cy="22" r="2" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'practical':
      return (
        <svg {...iconProps}>
          {/* 4 outer circuit probe pins with nodes */}
          <line x1="24" y1="5" x2="24" y2="10" strokeWidth="2" strokeLinecap="round" />
          <circle cx="24" cy="5" r="2" fill="currentColor" stroke="none" />
          <line x1="24" y1="38" x2="24" y2="43" strokeWidth="2" strokeLinecap="round" />
          <circle cx="24" cy="43" r="2" fill="currentColor" stroke="none" />
          <line x1="5" y1="24" x2="10" y2="24" strokeWidth="2" strokeLinecap="round" />
          <circle cx="5" cy="24" r="2" fill="currentColor" stroke="none" />
          <line x1="38" y1="24" x2="43" y2="24" strokeWidth="2" strokeLinecap="round" />
          <circle cx="43" cy="24" r="2" fill="currentColor" stroke="none" />
          {/* Loop bracket contour */}
          <path
            d="M17 12 C12 18 12 30 17 36 C24 39 24 39 31 36 C36 30 36 18 31 12 C24 9 24 9 17 12 Z"
            strokeWidth="2.2"
          />
          {/* Sync cycle arrows */}
          <path d="M21 20a4.5 4.5 0 0 1 7-2m-1-2.5l2.5 2.5-2.5 2.5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M27 28a4.5 4.5 0 0 1-7 2m1 2.5l-2.5-2.5 2.5-2.5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'experts':
      return (
        <svg {...iconProps}>
          {/* Instructor with visor/cap and V-neck */}
          <circle cx="24" cy="14" r="7" strokeWidth="2.2" />
          <path d="M17 14.5c2-2 12-2 14 0" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M10 40c0-7 6-11.5 14-11.5s14 4.5 14 11.5" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M20 28.5L24 35l4-6.5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'career':
      return (
        <svg {...iconProps}>
          {/* Trio team silhouettes with front lead */}
          <circle cx="24" cy="15" r="5.5" strokeWidth="2.2" />
          <path d="M14 40c0-6 4.5-9.5 10-9.5s10 3.5 10 9.5" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M22 30.5L24 34l2-3.5" strokeWidth="1.8" />
          <circle cx="14" cy="18" r="4" strokeWidth="2" />
          <path d="M8 38c0-4.5 3.5-7.5 7.5-7.5" strokeWidth="2" strokeLinecap="round" />
          <circle cx="34" cy="18" r="4" strokeWidth="2" />
          <path d="M32.5 30.5c4 0 7.5 3 7.5 7.5" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'courses':
      return (
        <svg {...iconProps}>
          {/* Mortarboard graduation cap */}
          <polygon points="24,9 42,17.5 24,26 6,17.5" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M12 21v8c0 4.5 5.5 8 12 8s12-3.5 12-8v-8" strokeWidth="2.2" />
          <path d="M38 18.5v13" strokeWidth="2" strokeLinecap="round" />
          <circle cx="38" cy="33" r="1.6" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'labs':
      return (
        <svg {...iconProps}>
          {/* Monitor with lab silhouettes */}
          <rect x="7" y="9" width="34" height="24" rx="3.5" strokeWidth="2.2" />
          <circle cx="16" cy="17" r="2.2" strokeWidth="1.8" />
          <path d="M12.5 25c0-2.5 2-4 3.5-4s3.5 1.5 3.5 4" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="28" cy="17" r="2.2" strokeWidth="1.8" />
          <path d="M24.5 25c0-2.5 2-4 3.5-4s3.5 1.5 3.5 4" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M24 33v6 M18 39h12" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      )
    case 'students':
      return (
        <svg {...iconProps}>
          {/* Trio students silhouette */}
          <circle cx="24" cy="15" r="5.5" strokeWidth="2.2" />
          <path d="M14 40c0-6 4.5-9.5 10-9.5s10 3.5 10 9.5" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M23 32h2" strokeWidth="2" strokeLinecap="round" />
          <circle cx="14" cy="18" r="4" strokeWidth="2" />
          <path d="M8 38c0-4.5 3.5-7.5 7.5-7.5" strokeWidth="2" strokeLinecap="round" />
          <circle cx="34" cy="18" r="4" strokeWidth="2" />
          <path d="M32.5 30.5c4 0 7.5 3 7.5 7.5" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'ctf':
      return (
        <svg {...iconProps}>
          {/* Trophy cup */}
          <path d="M15 9h18v12c0 5.5-4 9.5-9 9.5s-9-4-9-9.5V9z" strokeWidth="2.2" />
          <path d="M15 13H9c-1 0-2 1-2 2v2c0 4 3 6.5 8 6.5" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M33 13h6c1 0 2 1 2 2v2c0 4-3 6.5-8 6.5" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M24 30.5v6.5 M16 37h16" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      )
  }
}

function WhyIcon({ type }: { type: WhyType }) {
  const commonProps = {
    className: 'why-icon-svg',
    viewBox: '0 0 48 48',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  switch (type) {
    case 'labs':
      return (
        <svg {...commonProps}>
          {/* Flask rim & top */}
          <line x1="18" y1="11" x2="30" y2="11" strokeWidth="2.4" />
          <path d="M20 11v6.5L10.5 35.5A3 3 0 0 0 13 40h22a3 3 0 0 0 2.5-4.5L28 17.5V11" />
          {/* Wave liquid line */}
          <path d="M14.5 31c2.5-1.5 5.5-1.5 8.5 0s6 1.5 9 0" strokeWidth="1.8" />
          {/* Liquid bubbles */}
          <circle cx="19" cy="35" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="28" cy="34" r="1.8" fill="currentColor" stroke="none" />
          {/* Vapor float */}
          <circle cx="24" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      )
    case 'instructors':
      return (
        <svg {...commonProps}>
          {/* Instructor circular head */}
          <circle cx="24" cy="14" r="7" strokeWidth="2.2" />
          {/* Cap brim / visor */}
          <path d="M17 14.5c2-2 12-2 14 0" strokeWidth="2.2" strokeLinecap="round" />
          {/* Shoulders and torso */}
          <path d="M10 40c0-7 6-11.5 14-11.5s14 4.5 14 11.5" strokeWidth="2.2" strokeLinecap="round" />
          {/* V-neck collar */}
          <path d="M20 28.5L24 35l4-6.5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'scenarios':
      return (
        <svg {...commonProps}>
          {/* Globe circle */}
          <circle cx="24" cy="24" r="15" strokeWidth="2.2" />
          {/* Center meridian */}
          <ellipse cx="24" cy="24" rx="7.5" ry="15" strokeWidth="2" />
          {/* Equator */}
          <line x1="9" y1="24" x2="39" y2="24" strokeWidth="2" />
          {/* Upper & lower latitude arcs */}
          <path d="M13 16.5c3.2 2 7.2 2.8 11 2.8s7.8-.8 11-2.8" strokeWidth="2" />
          <path d="M13 31.5c3.2-2 7.2-2.8 11-2.8s7.8.8 11 2.8" strokeWidth="2" />
        </svg>
      )
    case 'certifications':
      return (
        <svg {...commonProps}>
          {/* Rosette scalloped perimeter */}
          <circle cx="24" cy="20" r="12.5" strokeWidth="2.2" />
          {/* 5-pointed star inside */}
          <polygon
            points="24,13.5 25.8,17.4 30.2,17.9 26.9,20.8 27.8,25 24,22.8 20.2,25 21.1,20.8 17.8,17.9 22.2,17.4"
            strokeWidth="1.8"
            strokeLinejoin="round"
            fill="rgba(0, 229, 255, 0.25)"
          />
          {/* Ribbon tails with V-notches */}
          <path d="M17 30l-3.5 11 5.5-2.5 3 2.5" strokeWidth="2" strokeLinejoin="round" />
          <path d="M31 30l3.5 11-5.5-2.5-3 2.5" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      )
    case 'career':
      return (
        <svg {...commonProps}>
          {/* Briefcase shell */}
          <rect x="8" y="15" width="32" height="23" rx="4" strokeWidth="2.2" />
          {/* Top handle */}
          <path d="M17 15v-3.5a2.5 2.5 0 0 1 2.5-2.5h9a2.5 2.5 0 0 1 2.5 2.5V15" strokeWidth="2.2" strokeLinecap="round" />
          {/* Seam line */}
          <line x1="8" y1="24.5" x2="40" y2="24.5" strokeWidth="2" />
          {/* Center latch */}
          <rect x="21" y="22.5" width="6" height="4.5" rx="1" fill="#00e5ff" stroke="none" />
        </svg>
      )
  }
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false)
  const [newsletterError, setNewsletterError] = useState<string | null>(null)

  const [contactSubmitted, setContactSubmitted] = useState(false)
  const [contactSubmitting, setContactSubmitting] = useState(false)
  const [contactError, setContactError] = useState<string | null>(null)

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setContactSubmitting(true)
    setContactError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    if (!WEB3FORMS_CONFIG.contactAccessKey) {
      setContactError('Web3Forms Access Key is not configured. Please add VITE_WEB3FORMS_CONTACT_ACCESS_KEY in your .env file.')
      setContactSubmitting(false)
      return
    }

    try {
      const response = await fetch(WEB3FORMS_CONFIG.endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setContactSubmitted(true)
        form.reset()
      } else {
        setContactError(data.message || 'Failed to send message. Please verify your Web3Forms access key or try again.')
      }
    } catch {
      setContactError('Network error. Please check your connection and try again.')
    } finally {
      setContactSubmitting(false)
    }
  }

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setNewsletterSubmitting(true)
    setNewsletterError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    if (!WEB3FORMS_CONFIG.newsletterAccessKey) {
      setNewsletterError('Web3Forms Access Key is not configured. Please add VITE_WEB3FORMS_NEWSLETTER_ACCESS_KEY in your .env file.')
      setNewsletterSubmitting(false)
      return
    }

    try {
      const response = await fetch(WEB3FORMS_CONFIG.endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setSubscribed(true)
      } else {
        setNewsletterError(data.message || 'Failed to subscribe. Please verify your Web3Forms access key or try again.')
      }
    } catch {
      setNewsletterError('Network error. Please check your connection and try again.')
    } finally {
      setNewsletterSubmitting(false)
    }
  }

  const [activeSection, setActiveSection] = useState('top')

  const getRouteFromHash = (): LegalTab | null => {
    const hash = window.location.hash.toLowerCase()
    if (hash === '#/privacy' || hash === '#privacy') return 'privacy'
    if (hash === '#/terms' || hash === '#terms') return 'terms'
    if (hash === '#/security' || hash === '#security') return 'security'
    if (hash === '#/cookies' || hash === '#cookies') return 'cookies'
    return null
  }

  const [legalRoute, setLegalRoute] = useState<LegalTab | null>(getRouteFromHash)

  useEffect(() => {
    const handleHashChange = () => {
      const route = getRouteFromHash()
      setLegalRoute(route)
      if (route) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const openLegalPage = (tab: LegalTab) => {
    window.location.hash = `#/${tab}`
    setLegalRoute(tab)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const backToHome = () => {
    window.location.hash = ''
    setLegalRoute(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    document.title = 'SAiX LABS | Next-Gen Cybersecurity Training'
  }

  useEffect(() => {
    if (legalRoute) return

    const sectionIds = ['top', 'courses', 'about', 'contact', 'resources']

    const handleScroll = () => {
      // If user is near the bottom of the page, activate resources (footer)
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveSection('resources')
        return
      }

      // Check from bottom to top with an offset for sticky navbar
      const scrollPos = window.scrollY + 140
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i]
        const el = document.getElementById(id)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY
          if (scrollPos >= top) {
            setActiveSection(id)
            return
          }
        }
      }
      setActiveSection('top')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [legalRoute])

  if (legalRoute) {
    return (
      <>
        <LegalPage
          initialTab={legalRoute}
          onBackToHome={backToHome}
          onTabChange={(tab) => {
            setLegalRoute(tab)
            window.location.hash = `#/${tab}`
          }}
        />
        <CookieConsent onOpenPolicy={() => openLegalPage('cookies')} />
      </>
    )
  }

  return (
    <div className="page-shell">
      <header className="site-header" id="top">
        <a
          className="brand"
          href="#top"
          aria-label="SAiX LABS home"
          onClick={(e) => {
            e.preventDefault()
            closeMenu()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <img className="brand-logo" src={saixLabsLogo} alt="SAiX LABS Logo" />
          <img className="brand-wordmark" src={saixLabsWordmark} alt="SAiX LABS" />
        </a>

        <button
          className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="main-nav" className={`nav-links${menuOpen ? ' nav-links--open' : ''}`} aria-label="Primary navigation">
          <a className={activeSection === 'top' ? 'active' : ''} href="#top" onClick={closeMenu}>Home</a>
          <a className={activeSection === 'courses' ? 'active' : ''} href="#courses" onClick={closeMenu}>Courses</a>
          <a className={activeSection === 'about' ? 'active' : ''} href="#about" onClick={closeMenu}>About Us</a>
          <a className={activeSection === 'contact' ? 'active' : ''} href="#contact" onClick={closeMenu}>Contact</a>
          <a className={activeSection === 'resources' ? 'active' : ''} href="#resources" onClick={closeMenu}>Resources</a>
          <a className="button button-primary" href="#contact" onClick={closeMenu}>Enroll Now</a>
        </nav>
      </header>

      <main>
        <section className="hero section-shell">
          <div className="hero-visual" aria-hidden="true">
            <picture>
              <source media="(max-width: 860px)" srcSet={heroMobileImage} />
              <img
                className="hero-photo"
                src={heroImage}
                alt="Hooded cybersecurity specialist working at multiple computer monitors with secure shield"
                width="1600"
                height="661"
                loading="eager"
                decoding="async"
              />
            </picture>
          </div>

          <div className="hero-copy">
            <h1>
              MASTER <span>CYBERSECURITY.</span>
              <br />
              BUILD A SECURE FUTURE.
            </h1>
            <p className="intro">
              SAiX LABS provides industry-aligned cybersecurity training with hands-on labs,
              real tools and real-world scenarios.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#courses">
                EXPLORE COURSES <span>›</span>
              </a>
              <a className="button button-ghost button-community" href="#contact">
                <svg className="btn-icon-community" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                JOIN COMMUNITY
              </a>
            </div>
          </div>

        </section>

        <section className="stats section-shell" aria-label="SAiX LABS achievements">
          {stats.map(({ value, label, icon }) => (
            <div className="stat-item" key={label}>
              <span className="stat-icon" aria-hidden="true">
                <FeatureIcon type={icon} />
              </span>
              <div>
                <strong>{value}</strong>
                <small>{label}</small>
              </div>
            </div>
          ))}
        </section>

        <section className="courses section-shell" id="courses">
          <div className="section-head">
            <p className="eyebrow">OUR COURSES</p>
            <h2>
              LEARN. PRACTICE. <span>DEFEND.</span>
            </h2>
          </div>

          <div className="course-grid">
            {courses.map((course) => (
              <article className="course-card" key={course.type}>
                <div className="course-icon">
                  <CourseIcon type={course.type} />
                </div>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <span className={`course-tag ${course.level === 'INTERMEDIATE' ? 'muted' : ''}`}>
                  {course.level}
                </span>
              </article>
            ))}
          </div>

          <div className="centered-button">
            <a className="button button-primary" href="#contact">
              VIEW ALL COURSES <span>›</span>
            </a>
          </div>
        </section>

        <section className="why section-shell" id="about">
          <h2>
            <span>WHY CHOOSE</span> SAiX LABS?
          </h2>

          <div className="why-grid" id="labs">
            {reasons.map((reason) => (
              <article className="why-item" key={reason.title}>
                <span className="why-corner why-corner-tl" aria-hidden="true" />
                <span className="why-corner why-corner-tr" aria-hidden="true" />
                <span className="why-corner why-corner-bl" aria-hidden="true" />
                <span className="why-corner why-corner-br" aria-hidden="true" />
                <span className="why-icon" aria-hidden="true">
                  <WhyIcon type={reason.type} />
                </span>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-shell" id="contact">
          <div className="contact-header">
            <p className="eyebrow">CONTACT US</p>
            <h2>
              ASK US ABOUT YOUR <span>CYBERSECURITY GOALS</span>
            </h2>
            <p>
              Tell us what you're looking for and we'll guide you to the best learning path for your
              career.
            </p>
          </div>

          {contactSubmitted ? (
            <div className="contact-success" role="status" aria-live="polite">
              <span className="contact-success-check" aria-hidden="true">✓</span>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. We'll get back to you shortly.</p>
              <button
                type="button"
                className="button button-ghost contact-reset-btn"
                onClick={() => {
                  setContactSubmitted(false)
                  setContactError(null)
                }}
              >
                SEND ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <form
              className="contact-form"
              name="contact"
              action={WEB3FORMS_CONFIG.endpoint}
              method="POST"
              onSubmit={handleContactSubmit}
            >
              {/* Web3Forms Access Key */}
              <input type="hidden" name="access_key" value={WEB3FORMS_CONFIG.contactAccessKey} />
              {/* Web3Forms Anti-Spam Botcheck */}
              <input type="checkbox" name="botcheck" className="hidden-honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="subject" value="New Contact Inquiry - SAiX LABS" />
              <input type="hidden" name="from_name" value="SAiX LABS Contact" />

              <div className="form-grid">
                <label>
                  <span>Name</span>
                  <input type="text" name="name" placeholder="Your name" required />
                </label>

                <label>
                  <span>Email</span>
                  <input type="email" name="email" placeholder="Your email" required />
                </label>

                <label>
                  <span>Phone (optional)</span>
                  <input type="tel" name="phone" placeholder="Your phone number" />
                </label>

                <label className="full-width">
                  <span>Question</span>
                  <textarea name="question" rows={5} placeholder="Tell us about your goals or questions..." required />
                </label>
              </div>

              {contactError && (
                <div className="form-error-msg" role="alert">
                  <span className="form-error-icon" aria-hidden="true">⚠️</span>
                  <span>{contactError}</span>
                </div>
              )}

              <button type="submit" className="button button-primary" disabled={contactSubmitting}>
                {contactSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          )}
        </section>
      </main>

      <footer className="site-footer" id="resources">
        {/* Newsletter CTA Banner */}
        <div className="footer-cta-shell section-shell">
          <div className="footer-cta-card">
            <div className="footer-cta-glow" aria-hidden="true" />
            <div className="footer-cta-content">
              <h3>Subscribe to <span className="brand-name">SAiX</span> Security Dispatch</h3>
              <p>
                Weekly zero-day breakdowns, practical CTF writeups, curriculum drops, and offensive security playbooks delivered directly to your inbox.
              </p>
            </div>

            <div className="footer-cta-form-wrap">
              {subscribed ? (
                <div className="subscribe-success" role="status" aria-live="polite">
                  <span className="subscribe-check" aria-hidden="true">✓</span>
                  <div>
                    <strong>Subscribed Successfully!</strong>
                    <p>You're all set with <span className="subscribe-email">{newsletterEmail}</span></p>
                  </div>
                </div>
              ) : (
                <form
                  className="subscribe-form"
                  name="newsletter"
                  action={WEB3FORMS_CONFIG.endpoint}
                  method="POST"
                  onSubmit={handleNewsletterSubmit}
                >
                  {/* Web3Forms Access Key */}
                  <input type="hidden" name="access_key" value={WEB3FORMS_CONFIG.newsletterAccessKey} />
                  {/* Web3Forms Anti-Spam Botcheck */}
                  <input type="checkbox" name="botcheck" className="hidden-honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                  <input type="hidden" name="subject" value="New Newsletter Subscription - SAiX LABS" />
                  <input type="hidden" name="from_name" value="SAiX Security Dispatch" />

                  <div className="subscribe-row">
                    <div className="subscribe-input-wrap">
                      <svg className="input-mail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        aria-label="Email address"
                        required
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                      />
                    </div>
                    <button type="submit" className="button button-primary" disabled={newsletterSubmitting}>
                      {newsletterSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
                    </button>
                  </div>

                  {newsletterError && (
                    <div className="form-error-msg form-error-msg--sm" role="alert">
                      <span className="form-error-icon" aria-hidden="true">⚠️</span>
                      <span>{newsletterError}</span>
                    </div>
                  )}

                  <span className="subscribe-disclaimer">Zero spam. Instant one-click unsubscribe anytime.</span>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Multi-Column Footer Grid */}
        <div className="footer-main section-shell">
          <div className="footer-grid">
            {/* Column 1: Brand & Bio */}
            <div className="footer-col footer-col-brand">
              <a
                className="brand footer-brand-link"
                href="#top"
                aria-label="SAiX LABS home"
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <img className="brand-logo brand-logo-footer" src={saixLabsLogo} alt="SAiX LABS Logo" />
                <img className="brand-wordmark brand-wordmark-footer" src={saixLabsWordmark} alt="SAiX LABS" />
              </a>
              <p className="footer-brand-desc">
                Industry-aligned cybersecurity training platform providing practical defense, offense, and digital forensics education for next-generation security engineers.
              </p>
              <div className="footer-social-wrap">
                <p className="footer-heading-sm">CONNECT WITH US</p>
                <div className="social-links" aria-label="Social media links">
                  <a href="https://linkedin.com/company/saixlabs" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.44v6.3ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45Z" />
                    </svg>
                  </a>
                  <a href="https://wa.me" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.14-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.6.13-.13.3-.34.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.24-.25-.6-.5-.51-.68-.52H8.1c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.34Z" />
                      <path d="M12 2a10 10 0 0 0-8.45 15.33L2 22l4.81-1.52A10 10 0 1 0 12 2Zm0 18.18a8.18 8.18 0 0 1-4.17-1.14l-.3-.18-3.1.98.98-3.01-.2-.31A8.18 8.18 0 1 1 12 20.18Z" />
                    </svg>
                  </a>
                  <a href="https://x.com/saixlabs" target="_blank" rel="noopener noreferrer" aria-label="X">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18.24 3h3.28l-7.17 8.2L22.75 21h-6.6l-5.17-6.76L5.1 21H1.8l7.67-8.77L1.5 3h6.77l4.67 6.12L18.24 3Zm-1.15 16.17h1.82L7 4.82H5.07l12.02 14.35Z" />
                    </svg>
                  </a>
                  <a href="https://instagram.com/saixlabs" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4.5" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Courses */}
            <div className="footer-col">
              <h4 className="footer-heading">TRAINING</h4>
              <ul className="footer-links">
                <li><a href="#courses">Ethical Hacking</a></li>
                <li><a href="#courses">Web App Security</a></li>
                <li><a href="#courses">Network Security</a></li>
                <li><a href="#courses">Digital Forensics</a></li>
                <li><a href="#courses">Cloud Security</a></li>
              </ul>
            </div>

            {/* Column 3: Platform */}
            <div className="footer-col">
              <h4 className="footer-heading">PLATFORM</h4>
              <ul className="footer-links">
                <li><a href="#labs">Hands-On Labs</a></li>
                <li><a href="#courses">CTF Challenges</a></li>
                <li><a href="#about">Practical Scenarios</a></li>
                <li><a href="#about">Certifications</a></li>
                <li><a href="#contact">Career Support</a></li>
              </ul>
            </div>

            {/* Column 4: Company */}
            <div className="footer-col">
              <h4 className="footer-heading">RESOURCES</h4>
              <ul className="footer-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact Admissions</a></li>
                <li><a href="#contact">Join Community</a></li>
                <li><a href="#contact">Hire Graduates</a></li>
                <li><a href="#contact">Enroll Now</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Legal & Status */}
        <div className="footer-bottom-bar section-shell">
          <div className="footer-bottom-content">
            <p className="copyright-text">© 2026 SAiX LABS. All rights reserved.</p>
            <div className="footer-legal-links">
              <a
                href="#/privacy"
                onClick={(e) => {
                  e.preventDefault()
                  openLegalPage('privacy')
                }}
              >
                Privacy Policy
              </a>
              <span className="dot-sep">•</span>
              <a
                href="#/terms"
                onClick={(e) => {
                  e.preventDefault()
                  openLegalPage('terms')
                }}
              >
                Terms of Service
              </a>
              <span className="dot-sep">•</span>
              <a
                href="#/security"
                onClick={(e) => {
                  e.preventDefault()
                  openLegalPage('security')
                }}
              >
                Security
              </a>
              <span className="dot-sep">•</span>
              <a
                href="#/cookies"
                onClick={(e) => {
                  e.preventDefault()
                  openLegalPage('cookies')
                }}
              >
                Cookie Policy
              </a>
              <span className="dot-sep">•</span>
              <button
                type="button"
                className="footer-cookie-trigger-btn"
                onClick={() => window.dispatchEvent(new CustomEvent('saixlabs_reopen_cookie_modal'))}
              >
                Cookie Settings
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Cookie Consent & Preferences Modal */}
      <CookieConsent onOpenPolicy={() => openLegalPage('cookies')} />
    </div>
  )
}

export default App

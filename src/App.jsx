// ─────────────────────────────────────────────────────────────────────────────
// App.jsx — Root component
//
// This file just imports every section component and stacks them in order.
// To reorder sections, just move the lines around below.
// To hide a section, comment it out.
// ─────────────────────────────────────────────────────────────────────────────

import Nav          from './components/Nav'
import Hero         from './components/Hero'
import StatsBand    from './components/StatsBand'
import Features     from './components/Features'
import HowItWorks   from './components/HowItWorks'
import FocusModes   from './components/FocusModes'
import DownloadCTA  from './components/DownloadCTA'
import Footer       from './components/Footer'

export default function App() {
  return (
    <>
      {/* Fixed navigation bar at the top */}
      <Nav />

      {/* Big hero section with headline, subtext, buttons, and mockup */}
      <Hero />

      {/* 4 stats: "25+ Pomodoro presets", "Free", etc. */}
      <StatsBand />

      {/* 6 feature cards grid */}
      <Features />

      {/* "How it works" 4-step explainer */}
      <HowItWorks />

      {/* Focus mode cards: Pomodoro, Sprint, Deep Work, etc. */}
      <FocusModes />

      {/* App Store / Google Play download buttons */}
      <DownloadCTA />

      {/* Footer with logo, copyright, and links */}
      <Footer />
    </>
  )
}

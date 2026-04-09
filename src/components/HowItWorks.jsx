// ─────────────────────────────────────────────────────────────────────────────
// HowItWorks.jsx — 4-step "How it works" explainer
//
// TO EDIT:
//   • Change a step: edit the matching object in the `steps` array
//   • Add/remove steps: add/remove objects — the grid adjusts automatically
//   • Change heading/subtext: edit `heading` and `sub`
// ─────────────────────────────────────────────────────────────────────────────

import './HowItWorks.css'

// ── Section copy ─────────────────────────────────────────────────────────────
const heading = <>Four steps to your<br />best study session</>
const sub     = 'No account needed. No setup. Just open, plan, and cruise.'

// ── Steps data ────────────────────────────────────────────────────────────────
// `icon`  — big emoji displayed in each step card
// `title` — bold step name
// `desc`  — longer explanation
const steps = [
  {
    icon:  '📍',
    title: 'Pick your route',
    desc:  'Search any starting point and destination worldwide. Tap the map to pin locations or type an address — fuzzy search handles typos too.',
  },
  {
    icon:  '⏱️',
    title: 'Set your timer',
    desc:  'Choose how long you want to study. Classic Pomodoro is 25 minutes but you can go anywhere from a quick 5-minute sprint to a full 8-hour marathon.',
  },
  {
    icon:  '🚗',
    title: 'Start Focus',
    desc:  'Hit the button and your virtual car starts driving. The map tilts into immersive 3D, the HUD shows your ETA and timer, and Do Not Disturb kicks in automatically.',
  },
  {
    icon:  '🎉',
    title: 'Arrive & celebrate',
    desc:  'When the timer hits zero your car reaches the destination and confetti fills the screen. Session complete — you earned it.',
  },
]

export default function HowItWorks() {
  return (
    // `how-bg` gives this section a slightly different background colour
    <section id="how" className="how-bg">
      <div className="section-inner">

        <span className="section-tag">How it works</span>
        <h2>{heading}</h2>
        <p className="section-sub">{sub}</p>

        {/* Steps displayed in a bordered grid row */}
        <div className="steps">
          {steps.map((step, i) => (
            <div key={step.title} className="step">
              {/* "STEP 01", "STEP 02" etc — padStart adds a leading zero */}
              <div className="step-num">Step {String(i + 1).padStart(2, '0')}</div>
              <span className="step-icon">{step.icon}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

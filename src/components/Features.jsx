// ─────────────────────────────────────────────────────────────────────────────
// Features.jsx — 6-card features grid
//
// TO EDIT:
//   • Change a feature: edit the matching object in the `features` array
//   • Add a feature: add a new object { icon, title, desc }
//   • Remove a feature: delete an object from the array
//   • Change section heading/subtext: edit `heading` and `sub` below
// ─────────────────────────────────────────────────────────────────────────────

import './Features.css'

// ── Section copy ─────────────────────────────────────────────────────────────
const heading = <>Everything you need to<br />stay in the zone</>
const sub     = 'CruiseMode combines real-world mapping with focus science to keep you locked in, session after session.'

// ── Feature cards data ────────────────────────────────────────────────────────
// `icon`  — emoji shown at the top of the card
// `title` — bold heading
// `desc`  — description paragraph
const features = [
  {
    icon:  '🗺️',
    title: 'Real-World Routes',
    desc:  'Plan any drive using real roads, turn-by-turn directions, and live traffic-aware routing — all inside your study session.',
  },
  {
    icon:  '⏱️',
    title: 'Custom Focus Timer',
    desc:  'Set any study duration from 1 to 480 minutes. The timer and your virtual drive end together — perfect motivation to push through.',
  },
  {
    icon:  '🛣️',
    title: 'Highway Shields',
    desc:  'Accurate Interstate, US Route, Canadian provincial, and state route shields displayed as you cruise through each road segment.',
  },
  {
    icon:  '🌦️',
    title: 'Live Weather',
    desc:  'See real current conditions at your virtual location — temperature, sunrise/sunset, and a day-progress bar updated every 5 seconds.',
  },
  {
    icon:  '🌍',
    title: 'Border Crossings',
    desc:  'Cross into a new country mid-session and watch the flag chip shake, units switch automatically, and the map update in real time.',
  },
  {
    icon:  '🌙',
    title: 'Day & Night Modes',
    desc:  'The map and HUD automatically switch between a crisp day style and a high-contrast navigation night theme based on your system setting.',
  },
]

export default function Features() {
  return (
    <section id="features">
      <div className="section-inner">

        {/* Section label + heading + subtext */}
        <span className="section-tag">Features</span>
        <h2>{heading}</h2>
        <p className="section-sub">{sub}</p>

        {/* Cards grid — auto-fit means it wraps automatically */}
        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <span className="feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

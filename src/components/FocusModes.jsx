// ─────────────────────────────────────────────────────────────────────────────
// FocusModes.jsx — Study style / focus mode cards
//
// TO EDIT:
//   • Add a mode: add a new { emoji, title, desc } to the `modes` array
//   • Remove a mode: delete an object from the array
//   • Change heading/subtext: edit `heading` and `sub`
// ─────────────────────────────────────────────────────────────────────────────

import './FocusModes.css'

// ── Section copy ─────────────────────────────────────────────────────────────
const heading = <>Your session,<br />your pace</>
const sub     = 'CruiseMode adapts to however you like to study — quick sprints or long deep-work sessions.'

// ── Modes data ────────────────────────────────────────────────────────────────
const modes = [
  { emoji: '🍅', title: 'Pomodoro',      desc: 'Classic 25 min focus + short break cycle' },
  { emoji: '⚡', title: 'Sprint',        desc: 'Quick 10–15 min blasts for fast review' },
  { emoji: '🧠', title: 'Deep Work',     desc: '90 min uninterrupted focus blocks' },
  { emoji: '🌅', title: 'Morning Cruise', desc: 'Relaxed 45 min to ease into the day' },
  { emoji: '🌙', title: 'Night Drive',   desc: 'Late-night 60 min sessions in dark mode' },
]

export default function FocusModes() {
  return (
    <section>
      <div className="section-inner">

        <span className="section-tag">Study styles</span>
        <h2>{heading}</h2>
        <p className="section-sub">{sub}</p>

        {/* Mode cards — auto-fit grid wraps automatically */}
        <div className="modes-grid">
          {modes.map((mode) => (
            <div key={mode.title} className="mode-card">
              <span className="emoji">{mode.emoji}</span>
              <h4>{mode.title}</h4>
              <p>{mode.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// StatsBand.jsx — Horizontal stats strip between Hero and Features
//
// TO EDIT:
//   • Change any number or label: edit the `stats` array below
//   • Add a stat: add a new { num, label } object to the array
//   • Remove a stat: delete an object from the array
// ─────────────────────────────────────────────────────────────────────────────

import './StatsBand.css'

// ── Stats data ───────────────────────────────────────────────────────────────
// `num`   — the big gradient number shown at the top (can be any string)
// `label` — the smaller text below the number
const stats = [
  { num: '25+', label: 'Pomodoro presets' },
  { num: 'Free', label: 'Always free to use' },
  { num: '∞',   label: 'Routes to explore' },
  { num: '0',   label: 'Distractions' },
]

export default function StatsBand() {
  return (
    <div className="stats-band">
      {stats.map((stat) => (
        <div key={stat.label} className="stat-item">
          <div className="stat-num">{stat.num}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

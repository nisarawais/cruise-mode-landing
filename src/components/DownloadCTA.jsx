// ─────────────────────────────────────────────────────────────────────────────
// DownloadCTA.jsx — Download call-to-action section
//
// TO EDIT:
//   • Change the headline: edit `heading`
//   • Change the subtext: edit `sub`
//   • Add a real App Store link: replace '#' in `storeButtons[0].href`
//   • Add a real Google Play link: replace '#' in `storeButtons[1].href`
//   • Add a third store (e.g. APK direct): add a new object to `storeButtons`
// ─────────────────────────────────────────────────────────────────────────────

import './DownloadCTA.css'

// ── Copy ─────────────────────────────────────────────────────────────────────
const heading = 'Ready to hit the road?'
const sub     = 'Download CruiseMode free and turn your next study session into a journey.'

// ── Store buttons ─────────────────────────────────────────────────────────────
// `icon`    — emoji shown on the left of the button
// `sub`     — small text above the store name (e.g. "Download on the")
// `name`    — store name in large text
// `href`    — link URL — replace '#' with the real store URL when you have it
const storeButtons = [
  { icon: '🍎', sub: 'Download on the', name: 'App Store',    href: '#' },
  { icon: '🤖', sub: 'Get it on',        name: 'Google Play',  href: '#' },
]

export default function DownloadCTA() {
  return (
    <section id="download" className="cta-section">

      {/* Background radial glow — purely decorative */}
      <div className="cta-glow" />

      <h2>{heading}</h2>
      <p>{sub}</p>

      {/* Store buttons row */}
      <div className="cta-buttons">
        {storeButtons.map((btn) => (
          <a key={btn.name} href={btn.href} className="store-btn">
            <span className="store-icon">{btn.icon}</span>
            <div className="store-btn-text">
              <span className="store-btn-sub">{btn.sub}</span>
              <span className="store-btn-name">{btn.name}</span>
            </div>
          </a>
        ))}
      </div>

    </section>
  )
}

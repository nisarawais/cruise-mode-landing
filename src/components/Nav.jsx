// ─────────────────────────────────────────────────────────────────────────────
// Nav.jsx — Fixed top navigation bar
//
// TO EDIT:
//   • Change nav links: edit the `links` array below
//   • Change the CTA button text/link: find the <a> with className="nav-cta"
//   • Change the logo name: edit the text next to the blue dot
// ─────────────────────────────────────────────────────────────────────────────

import './Nav.css'

// Nav links — add, remove, or rename entries here.
// `href` should match the `id` of the section it scrolls to.
const links = [
  { label: 'Features',    href: '#features' },
  { label: 'How it works', href: '#how' },
]

export default function Nav() {
  return (
    <nav className="nav">

      {/* ── Logo ── */}
      <div className="nav-logo">
        {/* Blue pulsing circle — colour set in Nav.css */}
        <div className="dot pulse" />
        CruiseMode
      </div>

      {/* ── Page links (hidden on mobile via CSS) ── */}
      <div className="nav-links">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      {/* ── CTA button ── */}
      <a href="#download" className="nav-cta">
        Download Free
      </a>

    </nav>
  )
}

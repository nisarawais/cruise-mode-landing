// ─────────────────────────────────────────────────────────────────────────────
// Footer.jsx — Simple footer with logo, copyright, and links
//
// TO EDIT:
//   • Change copyright text: edit `copyright`
//   • Add/remove links: edit the `links` array
//   • Change link URLs: edit the `href` values (replace '#' with real URLs)
// ─────────────────────────────────────────────────────────────────────────────

import './Footer.css'

// ── Footer copy ───────────────────────────────────────────────────────────────
const copyright = '© 2025 CruiseMode. Made for focused minds.'

// ── Footer links ──────────────────────────────────────────────────────────────
const links = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms',   href: '#' },
  { label: 'Contact', href: '#' },
]

export default function Footer() {
  return (
    <footer>

      {/* Logo — same blue dot as the nav */}
      <div className="footer-logo">
        <div className="dot" />
        CruiseMode
      </div>

      {/* Copyright line */}
      <p>{copyright}</p>

      {/* Links row */}
      <div className="footer-links">
        {links.map((link) => (
          <a key={link.label} href={link.href}>{link.label}</a>
        ))}
      </div>

    </footer>
  )
}

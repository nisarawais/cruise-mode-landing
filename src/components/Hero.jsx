// ─────────────────────────────────────────────────────────────────────────────
// Hero.jsx — Full-screen hero section
//
// TO EDIT:
//   • Badge / headline / subtext: edit the constants below
//   • Mockup values (ETA, timer, location, etc.): edit the `nav` object
//   • Map route path: edit the <path d="..."> in the SVG section
// ─────────────────────────────────────────────────────────────────────────────

import './Hero.css'

const badgeText  = '🚗 \u00A0Focus Mode, Activated'
const primaryBtn = { label: 'Get CruiseMode — Free', href: '#download' }
const ghostBtn   = { label: 'See how it works',      href: '#how' }

// ── All the values shown in the navigation mockup ───────────────────────────
const nav = {
  // Turn banner (top-left)
  arrow:       '↱',
  instruction: 'Turn right onto Hoboken Ave',
  shield:      'NJ 139U',
  dist:        '0.2',
  distUnit:    'mi',

  // Weather card (top-right)
  weatherIcon: '☁️',
  temp:        '55°F',
  condition:   'Overcast',
  sunrise:     '6:31 AM',
  sunset:      '7:26 PM',
  sunProgress: 72,          // % through the day (moves the bar fill)
  currentTime: '6:16 PM',

  // Location chips (bottom of map)
  chipCity:    '🏙️  Baldwin Avenue',
  chipCountry: '🇺🇸  United States',

  // Bottom HUD
  eta:      '6:40 PM',
  totalDist:'7.7',
  unit:     'mi',
  locName:  'Hilltop, Jersey City',
  locState: 'New Jersey',
  locFrom:  '🚩  7th Avenue, New York, New York',
  timer:    '24:47',
}

export default function Hero() {
  return (
    <section className="hero">

      {/* Background radial glow */}
      <div className="hero-glow" />

      {/* Badge */}
      <div className="hero-badge fade-up">{badgeText}</div>

      {/* Headline */}
      <h1 className="fade-up-2">
        Study smarter.<br />
        <span className="grad">Drive further.</span>
      </h1>

      {/* Subtext */}
      <p className="fade-up-3">
        CruiseMode turns your study sessions into a simulated road trip.
        Set your destination, pick your focus timer, and watch the miles fly
        by as you power through your work.
      </p>

      {/* CTA buttons */}
      <div className="hero-actions fade-up-4">
        <a href={primaryBtn.href} className="btn-primary">{primaryBtn.label}</a>
        <a href={ghostBtn.href}   className="btn-ghost"  >{ghostBtn.label}</a>
      </div>

      {/* ── App Mockup ─────────────────────────────────────────────────────── */}
      <div className="mockup-wrap fade-up-4">
        <div className="mockup-glow" />
        <div className="mockup">

          {/* macOS traffic-light dots */}
          <div className="mockup-bar">
            <div className="mockup-dot" style={{ background: '#FF5F57' }} />
            <div className="mockup-dot" style={{ background: '#FEBC2E' }} />
            <div className="mockup-dot" style={{ background: '#28C840' }} />
          </div>

          {/* ── Map area with overlays ── */}
          <div className="mockup-map">

            {/* SVG city map — roads, buildings, route line, car dot */}
            <svg
              className="map-svg"
              viewBox="0 0 780 300"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Map base — sandy/beige like a real day map */}
              <rect width="780" height="300" fill="#EDE8DF"/>

              {/* Parks */}
              <rect x="0"   y="205" width="148" height="95"  fill="#C8DDB8"/>
              <rect x="600" y="0"   width="180" height="105" fill="#D0DFBA"/>

              {/* Major horizontal roads (white) */}
              <rect x="0" y="68"  width="780" height="22" fill="#FFFFFF"/>
              <rect x="0" y="153" width="780" height="20" fill="#FFFFFF"/>
              <rect x="0" y="242" width="780" height="18" fill="#F4EFE6"/>

              {/* Major vertical roads (white) */}
              <rect x="120" y="0" width="20"  height="300" fill="#FFFFFF"/>
              <rect x="250" y="0" width="18"  height="300" fill="#FFFFFF"/>
              <rect x="392" y="0" width="22"  height="300" fill="#FFFFFF"/>
              <rect x="532" y="0" width="18"  height="300" fill="#FFFFFF"/>
              <rect x="662" y="0" width="20"  height="300" fill="#FFFFFF"/>

              {/* Yellow centre-line dashes on main roads */}
              <line x1="0" y1="79"  x2="780" y2="79"  stroke="#E8C040" strokeWidth="1.2" strokeDasharray="18 8"/>
              <line x1="0" y1="163" x2="780" y2="163" stroke="#E8C040" strokeWidth="1.2" strokeDasharray="18 8"/>
              <line x1="131" y1="0" x2="131" y2="300" stroke="#E8C040" strokeWidth="1.2" strokeDasharray="18 8"/>
              <line x1="403" y1="0" x2="403" y2="300" stroke="#E8C040" strokeWidth="1.2" strokeDasharray="18 8"/>

              {/* Building blocks — row 1 (above first road) */}
              <rect x="6"   y="6"  width="106" height="56" rx="2" fill="#D8D1C5"/>
              <rect x="148" y="6"  width="94"  height="56" rx="2" fill="#DDD8CE"/>
              <rect x="276" y="6"  width="108" height="56" rx="2" fill="#D4CEC3"/>
              <rect x="422" y="6"  width="102" height="56" rx="2" fill="#DDD6CA"/>
              <rect x="558" y="6"  width="96"  height="56" rx="2" fill="#D8D1C5"/>
              <rect x="690" y="6"  width="84"  height="56" rx="2" fill="#D4CEC3"/>

              {/* Building blocks — row 2 */}
              <rect x="6"   y="98" width="106" height="47" rx="2" fill="#DEDAD1"/>
              <rect x="148" y="98" width="94"  height="47" rx="2" fill="#D8D0C7"/>
              <rect x="276" y="98" width="108" height="47" rx="2" fill="#DDD8CE"/>
              <rect x="422" y="98" width="102" height="47" rx="2" fill="#D4CEC3"/>
              <rect x="558" y="98" width="96"  height="47" rx="2" fill="#DEDAD1"/>
              <rect x="690" y="98" width="84"  height="47" rx="2" fill="#D8D0C7"/>

              {/* Building blocks — row 3 */}
              <rect x="148" y="181" width="94"  height="55" rx="2" fill="#D4CEC3"/>
              <rect x="276" y="181" width="108" height="55" rx="2" fill="#DEDAD1"/>
              <rect x="422" y="181" width="102" height="55" rx="2" fill="#D8D0C7"/>
              <rect x="558" y="181" width="96"  height="55" rx="2" fill="#DDD8CE"/>
              <rect x="690" y="181" width="84"  height="55" rx="2" fill="#D4CEC3"/>

              {/* Route line — glow layer */}
              <path
                d="M 403 300 L 403 242 L 360 242 L 360 153 L 403 153 L 403 68 L 532 68 L 532 0"
                stroke="#2563EB" strokeWidth="12" fill="none"
                strokeLinecap="round" strokeLinejoin="round" opacity="0.18"
              />
              {/* Route line — main */}
              <path
                d="M 403 300 L 403 242 L 360 242 L 360 153 L 403 153 L 403 68 L 532 68 L 532 0"
                stroke="#2563EB" strokeWidth="5" fill="none"
                strokeLinecap="round" strokeLinejoin="round"
              />

              {/* Car position — green pulsing dot */}
              <circle cx="403" cy="196" r="18" fill="#22C55E" opacity="0.15"/>
              <circle cx="403" cy="196" r="9"  fill="#22C55E"/>
              <circle cx="403" cy="196" r="4"  fill="#FFFFFF"/>

              {/* Waypoint dot */}
              <circle cx="360" cy="196" r="6" fill="#2563EB"/>
              <circle cx="360" cy="196" r="3" fill="#FFFFFF"/>
            </svg>

            {/* Turn instruction banner — top left */}
            <div className="nav-turn">
              <div className="nav-turn-arrow">{nav.arrow}</div>
              <div className="nav-turn-info">
                <p>{nav.instruction}</p>
                <span className="nav-shield">{nav.shield}</span>
              </div>
              <div className="nav-turn-dist">
                <strong>{nav.dist}</strong>
                <small>{nav.distUnit}</small>
              </div>
            </div>

            {/* Weather card — top right */}
            <div className="nav-weather">
              <div className="weather-top">
                <span className="weather-icon">{nav.weatherIcon}</span>
                <span className="weather-temp">{nav.temp}</span>
              </div>
              <div className="weather-cond">{nav.condition}</div>
              <div className="weather-sun">
                <span>🌅 {nav.sunrise}</span>
                <span>🌇 {nav.sunset}</span>
              </div>
              <div className="weather-bar-track">
                <div className="weather-bar-fill" style={{ width: `${nav.sunProgress}%` }} />
              </div>
              <div className="weather-now">{nav.currentTime}</div>
            </div>

            {/* Location chips — bottom of map */}
            <div className="nav-chips">
              <div className="nav-chip">{nav.chipCity}</div>
              <div className="nav-chip">{nav.chipCountry}</div>
            </div>

          </div>{/* /mockup-map */}

          {/* ── Bottom navigation HUD ── */}
          <div className="nav-hud">

            {/* Left: ETA */}
            <div className="hud-eta">
              <div className="hud-eta-time">{nav.eta}</div>
              <div className="hud-label">ETA</div>
            </div>

            {/* Centre: location info */}
            <div className="hud-loc">
              <div className="hud-loc-name">📍 {nav.locName}</div>
              <div className="hud-loc-state">{nav.locState}</div>
              <div className="hud-loc-from">{nav.locFrom}</div>
            </div>

            {/* Right: distance + timer + stop */}
            <div className="hud-right">
              <div className="hud-dist">
                <strong>{nav.totalDist}</strong>
                <small>{nav.unit}</small>
              </div>
              <div className="hud-timer">⏱ {nav.timer}</div>
              <div className="hud-stop">■</div>
            </div>

          </div>

        </div>{/* /mockup */}
      </div>

    </section>
  )
}

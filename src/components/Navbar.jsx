import { navLinks, profile } from '../data/content'

export default function Navbar({ solid }) {
  return (
    <header className={`nav ${solid ? 'nav--solid' : ''}`}>
      <div className="shell nav__inner">
        <a className="nav__brand" href="#top">
          <span className="nav__mark">CYX</span>
          <span className="nav__brand-text">{profile.name}</span>
        </a>
        <nav className="nav__links" aria-label="主导航">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav__cta-group">
          <a
            className="btn btn--ghost nav__cta"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a className="btn btn--ghost nav__cta" href="#contact">
            联系我
          </a>
        </div>
      </div>
    </header>
  )
}

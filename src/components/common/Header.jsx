import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { primaryNavigation } from '../../data/navigation.js'
import MobileMenu from './MobileMenu.jsx'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <button
            className="site-header__menu-button"
            type="button"
            aria-label="メニューを開く"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen(true)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>

          <Link className="site-header__logo" to="/" aria-label="GYEOLDAM ホーム">
            GYEOLDAM
          </Link>

          <nav className="site-header__navigation" aria-label="メインメニュー">
            {primaryNavigation.map(({ label, to, end }) => (
              <NavLink
                key={to}
                className={({ isActive }) =>
                  `site-header__link${isActive ? ' site-header__link--active' : ''}`
                }
                to={to}
                end={end}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <span className="site-header__language" aria-label="現在の言語 日本語">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18" />
            </svg>
            <span>JP</span>
          </span>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}

export default Header

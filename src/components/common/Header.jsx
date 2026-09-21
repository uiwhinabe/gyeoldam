import { useLanguage } from '../../i18n/useLanguage.js'
import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { primaryNavigation } from '../../data/navigation.js'
import MobileMenu from './MobileMenu.jsx'
import LanguageSelector from './LanguageSelector.jsx'

function Header() {
  const { t } = useLanguage()
  const { pathname } = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <button
            className="site-header__menu-button"
            type="button"
            aria-label={t("メニューを開く")}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen(true)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>

          <Link className="site-header__logo" to="/" aria-label={t("GYEOLDAM ホーム")}>{t("GYEOLDAM")}</Link>

          <nav className="site-header__navigation" aria-label={t("メインメニュー")}>
            {primaryNavigation.map(({ label, to, end }) => (
              <NavLink
                key={to}
                className={({ isActive }) =>
                  `site-header__link${isActive ? ' site-header__link--active' : ''}`
                }
                to={to}
                end={end}
              >
                {t(label)}
              </NavLink>
            ))}
          </nav>

          <LanguageSelector key={pathname} />
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}

export default Header

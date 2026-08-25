import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { primaryNavigation } from '../../data/navigation.js'

function MobileMenu({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <div className={`mobile-menu${isOpen ? ' mobile-menu--open' : ''}`} aria-hidden={!isOpen}>
      <button
        className="mobile-menu__dim"
        type="button"
        aria-label="メニューを閉じる"
        tabIndex={isOpen ? 0 : -1}
        onClick={onClose}
      />
      <aside id="mobile-navigation" className="mobile-menu__panel" aria-label="モバイルメニュー">
        <div className="mobile-menu__header">
          <span className="mobile-menu__logo">GYEOLDAM</span>
          <button
            className="mobile-menu__close"
            type="button"
            aria-label="メニューを閉じる"
            tabIndex={isOpen ? 0 : -1}
            onClick={onClose}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <nav className="mobile-menu__navigation" aria-label="モバイルメインメニュー">
          {primaryNavigation.map(({ label, to, end }) => (
            <NavLink
              key={to}
              className={({ isActive }) =>
                `mobile-menu__link${isActive ? ' mobile-menu__link--active' : ''}`
              }
              to={to}
              end={end}
              tabIndex={isOpen ? 0 : -1}
              onClick={onClose}
            >
              <span>{label}</span>
              <span aria-hidden="true">→</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </div>
  )
}

export default MobileMenu

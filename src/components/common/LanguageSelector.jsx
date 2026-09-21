import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../../i18n/useLanguage.js'
import { languages } from '../../i18n/translate.js'

function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef(null)
  const triggerRef = useRef(null)
  const optionRefs = useRef([])

  useEffect(() => {
    if (!isOpen) return undefined
    const closeOutside = (event) => {
      if (!rootRef.current?.contains(event.target)) setIsOpen(false)
    }
    document.addEventListener('pointerdown', closeOutside)
    document.addEventListener('focusin', closeOutside)
    return () => {
      document.removeEventListener('pointerdown', closeOutside)
      document.removeEventListener('focusin', closeOutside)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) optionRefs.current[languages.indexOf(language)]?.focus()
  }, [isOpen, language])

  const close = () => { setIsOpen(false); triggerRef.current?.focus() }
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') { event.preventDefault(); close() }
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    if (!isOpen) { setIsOpen(true); return }
    const current = optionRefs.current.indexOf(document.activeElement)
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? languages.length - 1
      : (current + (event.key === 'ArrowDown' ? 1 : -1) + languages.length) % languages.length
    optionRefs.current[next]?.focus()
  }

  return (
    <div className="site-header__language" ref={rootRef} onKeyDown={handleKeyDown}>
      <button
        ref={triggerRef}
        className="language-selector__trigger"
        type="button"
        aria-label={`${t('言語を選択')}: ${language}`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls="language-menu"
        onClick={() => setIsOpen((open) => !open)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18" />
        </svg>
        <span>{language}</span>
        <svg className="language-selector__arrow" viewBox="0 0 12 12" aria-hidden="true">
          <path d={isOpen ? 'M2 8l4-4 4 4' : 'M2 4l4 4 4-4'} />
        </svg>
      </button>
      {isOpen && (
        <div className="language-selector__menu" id="language-menu" role="menu" aria-label={t('言語を選択')}>
          {languages.map((code, index) => (
            <button
              key={code}
              ref={(node) => { optionRefs.current[index] = node }}
              type="button"
              role="menuitemradio"
              aria-checked={language === code}
              tabIndex={-1}
              onClick={() => { setLanguage(code); close() }}
            >
              <span>{code}</span><span aria-hidden="true">{language === code ? '✓' : ''}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSelector

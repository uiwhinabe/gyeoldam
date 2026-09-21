import { useEffect, useMemo, useState } from 'react'
import { languages, languageStorageKey, locales, translate } from './translate.js'
import { LanguageContext } from './useLanguage.js'

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem(languageStorageKey)
      return languages.includes(saved) ? saved : 'JP'
    } catch {
      return 'JP'
    }
  })

  useEffect(() => {
    document.documentElement.lang = locales[language].split('-')[0]
    try { localStorage.setItem(languageStorageKey, language) } catch { /* Storage can be unavailable. */ }
  }, [language])

  useEffect(() => {
    const sync = (event) => {
      if (event.key === languageStorageKey) setLanguageState(languages.includes(event.newValue) ? event.newValue : 'JP')
    }
    window.addEventListener('storage', sync)
    return () => window.removeEventListener('storage', sync)
  }, [])

  const value = useMemo(() => ({
    language,
    locale: locales[language],
    setLanguage: (next) => { if (languages.includes(next)) setLanguageState(next) },
    t: (source) => translate(source, language),
  }), [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

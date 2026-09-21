import { messages } from './messages.js'

export const languages = ['JP', 'KR', 'EN']
export const locales = { JP: 'ja-JP', KR: 'ko-KR', EN: 'en-US' }
export const languageStorageKey = 'gyeoldam-language'
const escapePattern = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const templates = Object.entries(messages)
  .filter(([key]) => key.includes('{0}'))
  .sort(([a], [b]) => b.length - a.length)
  .map(([key, value]) => ({
    pattern: new RegExp(`^${key.split(/\{\d+\}/).map(escapePattern).join('(.+?)')}$`, 's'),
    value,
  }))

// Translate presentation strings only; never mutate source data or form values.
export function translate(value, language = 'JP') {
  if (typeof value !== 'string' || language === 'JP') return value
  const exact = messages[value]
  if (exact) return exact[language] ?? value
  const trimmed = value.trim()
  if (messages[trimmed]) return value.replace(trimmed, messages[trimmed][language])
  for (const { pattern, value: entry } of templates) {
    const match = value.match(pattern)
    if (match) return entry[language].replace(/\{(\d+)\}/g, (_, index) => translate(match[Number(index) + 1], language))
  }
  // Legacy reservation records store multiple Japanese treatment names together.
  if (value.includes(' ＋ ')) return value.split(' ＋ ').map((part) => translate(part, language)).join(' ＋ ')
  return value
}

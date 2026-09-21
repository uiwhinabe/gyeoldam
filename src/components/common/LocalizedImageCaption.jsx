import { useLanguage } from '../../i18n/useLanguage.js'

function LocalizedImageCaption({ lines }) {
  const { language, t } = useLanguage()
  if (language === 'JP') return null
  return (
    <details className="localized-image-caption">
      <summary>{t('画像内のテキスト')}</summary>
      {lines.map((line) => <p key={line}>{t(line)}</p>)}
    </details>
  )
}

export default LocalizedImageCaption

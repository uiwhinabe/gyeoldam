import { useLanguage } from '../../i18n/useLanguage.js'
function SectionTitle({ eyebrow, title, description, align = 'left', id }) {
  const { t } = useLanguage()
  const classes = ['section-title', align === 'center' && 'section-title--center']
    .filter(Boolean)
    .join(' ')

  return (
    <header className={classes}>
      {eyebrow && <p className="section-title__eyebrow">{t(eyebrow)}</p>}
      <h2 id={id} className="section-title__heading">
        {t(title)}
      </h2>
      {description && <p className="section-title__description">{t(description)}</p>}
    </header>
  )
}

export default SectionTitle

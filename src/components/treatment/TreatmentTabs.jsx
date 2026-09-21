import { useLanguage } from '../../i18n/useLanguage.js'
function TreatmentTabs({ categories }) {
  const { t } = useLanguage()
  return (
    <nav className="treatment-tabs" aria-label={t("施術カテゴリー")}>
      <div className="container treatment-tabs__scroll">
        {categories.map(({ id, tabLabel }) => (
          <a key={id} className="treatment-tabs__link" href={`#${id}`}>
            {t(tabLabel)}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default TreatmentTabs

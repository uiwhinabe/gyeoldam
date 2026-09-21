import { useLanguage } from '../../i18n/useLanguage.js'
function ReservationTabs({ categories, activeCategory, onSelect }) {
  const { t } = useLanguage()
  return (
    <nav className="reservation-tabs" aria-label={t("予約施術カテゴリー")}>
      <div className="container reservation-tabs__scroll">
        {categories.map(({ id, tabLabel }) => (
          <button
            key={id}
            className={`reservation-tabs__button${activeCategory === id ? ' reservation-tabs__button--active' : ''}`}
            type="button"
            aria-pressed={activeCategory === id}
            onClick={() => onSelect(id)}
          >
            {t(tabLabel)}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default ReservationTabs

function ReservationTabs({ categories, activeCategory, onSelect }) {
  return (
    <nav className="reservation-tabs" aria-label="予約施術カテゴリー">
      <div className="container reservation-tabs__scroll">
        {categories.map(({ id, tabLabel }) => (
          <button
            key={id}
            className={`reservation-tabs__button${activeCategory === id ? ' reservation-tabs__button--active' : ''}`}
            type="button"
            aria-pressed={activeCategory === id}
            onClick={() => onSelect(id)}
          >
            {tabLabel}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default ReservationTabs

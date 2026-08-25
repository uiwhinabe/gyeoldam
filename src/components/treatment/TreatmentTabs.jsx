function TreatmentTabs({ categories }) {
  return (
    <nav className="treatment-tabs" aria-label="施術カテゴリー">
      <div className="container treatment-tabs__scroll">
        {categories.map(({ id, tabLabel }) => (
          <a key={id} className="treatment-tabs__link" href={`#${id}`}>
            {tabLabel}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default TreatmentTabs

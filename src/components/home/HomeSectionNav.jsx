const homeSections = ['HOME', 'CAMPAIGN', 'GALLERY', 'SNS', 'FAQ', 'ACCESS']

function HomeSectionNav() {
  return (
    <nav className="home-section-nav" aria-label="ホームページ内メニュー">
      <div className="container home-section-nav__scroll">
        {homeSections.map((label) => (
          <a key={label} className="home-section-nav__link" href={`#${label.toLowerCase()}`}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default HomeSectionNav

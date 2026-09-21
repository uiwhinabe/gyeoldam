import { useLanguage } from '../../i18n/useLanguage.js'
const homeSections = ['HOME', 'CAMPAIGN', 'GALLERY', 'SNS', 'FAQ', 'ACCESS']

function HomeSectionNav() {
  const { t } = useLanguage()
  return (
    <nav className="home-section-nav" aria-label={t("ホームページ内メニュー")}>
      <div className="container home-section-nav__scroll">
        {homeSections.map((label) => (
          <a key={label} className="home-section-nav__link" href={`#${label.toLowerCase()}`}>
            {t(label)}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default HomeSectionNav

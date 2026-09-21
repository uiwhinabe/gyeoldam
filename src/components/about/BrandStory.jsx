import { useLanguage } from '../../i18n/useLanguage.js'
import { brandFeatures } from '../../data/about.js'
import Container from '../common/Container.jsx'

function BrandStory() {
  const { t } = useLanguage()
  return (
    <>
      <section className="brand-story" aria-labelledby="brand-story-title">
        <Container>
          <h2 id="brand-story-title" className="visually-hidden">{t("GYEOLDAMのこだわり")}</h2>
          <div className="brand-story__features">
            {brandFeatures.map(({ number, title, description }) => (
              <article key={number} className="brand-feature">
                <span>{t(number)}</span>
                <h3>{t(title)}</h3>
                <p>{t(description)}</p>
              </article>
            ))}
          </div>
          <div className="brand-story__records">
            <div><strong>{t("2019年")}</strong><span>{t("創業年")}</span></div>
            <div><strong>{t("8,000件以上")}</strong><span>{t("累計施術数")}</span></div>
          </div>
        </Container>
      </section>

      <section className="about-flower-banner" aria-label={t("GYEOLDAM ブランドメッセージ")}>
        <img src={`${import.meta.env.BASE_URL}images/about/brand-flower-banner.png`} alt={t("色鮮やかな花々")} />
        <div className="about-flower-banner__overlay" aria-hidden="true" />
        <p>{t("あなたらしい美しさを、ひとつひとつ丁寧に。")}<small>{t("GYEOLDAM")}</small></p>
      </section>
    </>
  )
}

export default BrandStory

import { brandFeatures } from '../../data/about.js'
import Container from '../common/Container.jsx'

function BrandStory() {
  return (
    <>
      <section className="brand-story" aria-labelledby="brand-story-title">
        <Container>
          <h2 id="brand-story-title" className="visually-hidden">GYEOLDAMのこだわり</h2>
          <div className="brand-story__features">
            {brandFeatures.map(({ number, title, description }) => (
              <article key={number} className="brand-feature">
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="brand-story__records">
            <div><strong>2019年</strong><span>創業年</span></div>
            <div><strong>8,000件以上</strong><span>累計施術数</span></div>
          </div>
        </Container>
      </section>

      <section className="about-flower-banner" aria-label="GYEOLDAM ブランドメッセージ">
        <img src={`${import.meta.env.BASE_URL}images/about/brand-flower-banner.png`} alt="色鮮やかな花々" />
        <div className="about-flower-banner__overlay" aria-hidden="true" />
        <p>あなたらしい美しさを、ひとつひとつ丁寧に。<small>GYEOLDAM</small></p>
      </section>
    </>
  )
}

export default BrandStory

import { brandFeatures } from '../../data/about.js'
import Container from '../common/Container.jsx'
import ImagePlaceholder from '../common/ImagePlaceholder.jsx'
import SectionTitle from '../common/SectionTitle.jsx'

function BrandStory() {
  return (
    <>
      <section className="brand-story" aria-labelledby="brand-story-title">
        <Container>
          <SectionTitle id="brand-story-title" eyebrow="OUR STORY" title="美しさを結び、想いを淡く刻む。" align="center" />
          <p className="brand-story__introduction">
            GYEOLDAMは、一人ひとりが持つ本来の美しさを見つめ、
            長く自然に寄り添うアートメイクを届けるために生まれました。
          </p>
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
            <div><strong>2019</strong><span>FOUNDED</span></div>
            <div><strong>20,000+</strong><span>TREATMENTS</span></div>
          </div>
        </Container>
      </section>

      <section className="about-flower-banner" aria-label="GYEOLDAM ブランドメッセージ">
        {/* 브랜드 꽃 배너 이미지
        추후 권장 경로: /images/about/brand-flower-banner.jpg
        실제 이미지 추가 시 이 플레이스홀더를 img 또는 background-image로 교체
        */}
        <ImagePlaceholder label="BRAND FLOWER IMAGE" aspectRatio="16 / 6" ariaLabel="ブランド花画像 準備中" />
        <div className="about-flower-banner__overlay" aria-hidden="true" />
        <p>YOUR NATURAL BEAUTY,<br />OUR TIMELESS DESIGN.</p>
      </section>
    </>
  )
}

export default BrandStory

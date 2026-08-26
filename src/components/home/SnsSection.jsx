import { officialSocials } from '../../data/homeContent.js'
import Container from '../common/Container.jsx'
import SectionTitle from '../common/SectionTitle.jsx'

function SnsSection() {
  return (
    <section id="sns" className="sns-section" aria-labelledby="sns-title">
      <Container>
        <SectionTitle id="sns-title" eyebrow="Official SNS" title="公式SNS" align="center" />

        <div className="sns-section__links">
          {officialSocials.map(({ name, handle, icon }) => (
            <button
              key={name}
              className="sns-link-card"
              type="button"
              title={`${name} 準備中`}
              onClick={() => window.alert(`${name} は準備中です。`)}
            >
              {/* 각 공식 SNS 서비스의 로고 아이콘 */}
              <span className="sns-link-card__icon" aria-hidden="true">
                <img
                  src={`${import.meta.env.BASE_URL}images/home/sns/${icon}`}
                  alt=""
                />
              </span>
              <span className="sns-link-card__content">
                <span className="sns-link-card__name">{name}</span>
                <span className="sns-link-card__handle">{handle}</span>
              </span>
              <span aria-hidden="true">↗</span>
            </button>
          ))}
        </div>

      </Container>
    </section>
  )
}

export default SnsSection

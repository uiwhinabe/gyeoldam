import { Link } from 'react-router-dom'
import { homeCampaigns } from '../../data/homeCampaigns.js'
import Container from '../common/Container.jsx'
import ImagePlaceholder from '../common/ImagePlaceholder.jsx'
import SectionTitle from '../common/SectionTitle.jsx'

function CampaignSection() {
  return (
    <section id="campaign" className="campaign-section" aria-labelledby="campaign-title">
      <Container>
        <SectionTitle
          id="campaign-title"
          eyebrow="SPECIAL OFFER"
          title="CAMPAIGN"
          description="GYEOLDAMから、今だけの特別なご案内です。"
          align="center"
        />

        <div className="campaign-section__intro">
          {/* 홈 캠페인 상단 소개 배너 이미지
          추후 권장 경로: /images/home/campaign-intro.jpg
          실제 이미지 추가 시 이 플레이스홀더를 img 또는 배경 이미지로 교체
          */}
          <ImagePlaceholder
            label="キャンペーン紹介イメージ"
            aspectRatio="16 / 5"
            ariaLabel="キャンペーン紹介画像 準備中"
          />
        </div>

        <div className="campaign-section__grid">
          {homeCampaigns.map((campaign, index) => (
            <article key={campaign.id} className="campaign-card">
              <div className="campaign-card__media">
                {/* 홈 캠페인 카드 이미지
                추후 권장 경로: /images/home/campaign-01.jpg 형식
                data의 image 필드에 경로 추가 시 실제 img로 자동 교체
                */}
                {campaign.image ? (
                  <img src={campaign.image} alt={campaign.imageAlt} />
                ) : (
                  <ImagePlaceholder
                    label={`キャンペーン ${String(index + 1).padStart(2, '0')}`}
                    aspectRatio="4 / 3"
                    ariaLabel={`${campaign.title} 画像準備中`}
                  />
                )}
              </div>
              <div className="campaign-card__body">
                <h3>{campaign.title}</h3>
                <p>{campaign.description}</p>
                <Link className="campaign-card__link" to="/treatment">
                  詳しく見る <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default CampaignSection

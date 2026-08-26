import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { homeCampaigns } from '../../data/homeCampaigns.js'
import Container from '../common/Container.jsx'
import ImagePlaceholder from '../common/ImagePlaceholder.jsx'
import SectionTitle from '../common/SectionTitle.jsx'

const campaignBanners = [
  {
    image: `${import.meta.env.BASE_URL}images/home/campaign/campaign-banner-01.png`,
    alt: '落ち着いた施術室で過ごす美しさの時間',
  },
  {
    image: `${import.meta.env.BASE_URL}images/home/campaign/campaign-banner-02.png`,
    alt: '眉のデザインを丁寧に描く施術風景',
  },
  {
    image: `${import.meta.env.BASE_URL}images/home/campaign/campaign-banner-03.png`,
    alt: '鏡を見ながら自然な美しさを確認する女性',
  },
]

function CampaignSection() {
  const [activeBanner, setActiveBanner] = useState(0)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveBanner((current) => (current + 1) % campaignBanners.length)
    }, 5000)

    return () => window.clearTimeout(timer)
  }, [activeBanner])

  return (
    <section id="campaign" className="campaign-section" aria-labelledby="campaign-title">
      <Container>
        <div className="campaign-section__intro" aria-label="キャンペーン紹介スライド">
          {/* 홈 캠페인 상단 자동 슬라이드 배너 이미지 3장
          저장 경로: /images/home/campaign/campaign-banner-01.png 형식
          5초마다 다음 이미지가 왼쪽에서 오른쪽 방향으로 전환
          */}
          {campaignBanners.map((banner, index) => (
            <img
              key={banner.image}
              className={`campaign-section__intro-slide${activeBanner === index ? ' campaign-section__intro-slide--active' : ''}`}
              src={banner.image}
              alt={banner.alt}
              aria-hidden={activeBanner !== index}
            />
          ))}
          <div className="campaign-section__intro-pagination" aria-label="キャンペーンスライド選択">
            {campaignBanners.map((banner, index) => (
              <button
                key={banner.image}
                type="button"
                aria-label={`${index + 1}枚目のキャンペーン画像を表示`}
                aria-current={activeBanner === index ? 'true' : undefined}
                onClick={() => setActiveBanner(index)}
              />
            ))}
          </div>
        </div>

        <SectionTitle
          id="campaign-title"
          eyebrow="SPECIAL OFFER"
          title="CAMPAIGN"
          description="GYEOLDAMから、今だけの特別なご案内です。"
          align="center"
        />

        <div className="campaign-section__grid">
          {homeCampaigns.map((campaign, index) => (
            <article key={campaign.id} className="campaign-card">
              <div className="campaign-card__media">
                {/* 홈 캠페인 카드 이미지
                저장 경로: /images/home/campaign/cards/campaign-card-01.png 형식
                카드 순서에 맞는 프로모션 이미지를 data의 image 필드에서 연결
                */}
                {campaign.image ? (
                  <img className="campaign-card__image" src={campaign.image} alt={campaign.imageAlt} />
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

        <p className="campaign-section__closing-copy">
          美しさは、日々の小さな瞬間から生まれます。
          <br />
          自分らしさを大切にしながら、心地よく過ごせる時間を。
          <br />
          一人ひとりに寄り添い、自然な美しさを引き出します。
          <br />
          ゆっくりと流れる時間の中で、新しい自分に出会える場所へ。
        </p>
      </Container>
    </section>
  )
}

export default CampaignSection

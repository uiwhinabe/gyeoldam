import Container from '../common/Container.jsx'
import ImagePlaceholder from '../common/ImagePlaceholder.jsx'
import SectionTitle from '../common/SectionTitle.jsx'

const shopDetails = [
  { label: '店舗名', value: 'GYEOLDAM' },
  { label: '住所', value: '韓国 ソウル特別市（詳細はご予約時にご案内します）' },
  { label: '営業時間', value: '10:00–20:00 / 不定休' },
]

// TODO: 매장 위치 확정 후 실제 Google Maps 공유 링크로 교체합니다.
const googleMapsUrl = 'https://maps.google.com/?q=GYEOLDAM'

function AccessSection({ useFlowerImage = true }) {
  return (
    <section id="access" className="access-section" aria-labelledby="access-title">
      <Container>
        <SectionTitle id="access-title" eyebrow="ACCESS" title="アクセス" align="center" />
        <div className="access-section__visual">
          {/* 홈 ACCESS 지도 영역 꽃 배경 이미지
          저장 경로: /images/home/access-map-background.png
          추후 이미지 변경 시 같은 경로의 파일을 교체
          */}
          {useFlowerImage ? (
            <img
              className="access-section__flower-background"
              src={`${import.meta.env.BASE_URL}images/home/access-map-background.png`}
              alt="白い花が咲くGYEOLDAMアクセス背景"
            />
          ) : (
            <ImagePlaceholder
              className="access-section__flower-background"
              label="ACCESS BACKGROUND"
              aspectRatio="16 / 8"
              ariaLabel="ABOUT ACCESS 背景画像 準備中"
            />
          )}

          <div className="access-section__information">
            <p className="access-section__brand">GYEOLDAM</p>
            <dl>
              {shopDetails.map(({ label, value }) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            <div className="access-section__map">
              {/* 흰색 ACCESS 정보 카드 안에 들어갈 지도 이미지
              추후 권장 경로: /images/home/access-map.jpg
              TODO: 실제 주소 확정 후 Google Maps 또는 지도 이미지 연결
              */}
              <a
                className="access-section__map-button"
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Google MapsでGYEOLDAMの位置を見る"
              >
                {/* ACCESS 매장 위치를 표시하는 지도 이미지 */}
                <img
                  className="access-section__map-image"
                  src={`${import.meta.env.BASE_URL}images/home/access-map.png`}
                  alt="GYEOLDAM 매장 위치를 표시한 지도"
                />
              </a>
            </div>
            <a
              className="access-section__notice"
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Google Mapsで見る →
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AccessSection

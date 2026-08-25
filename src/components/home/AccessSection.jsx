import Container from '../common/Container.jsx'
import ImagePlaceholder from '../common/ImagePlaceholder.jsx'
import SectionTitle from '../common/SectionTitle.jsx'

const shopDetails = [
  { label: '店舗名', value: 'GYEOLDAM' },
  { label: '住所', value: '韓国 ソウル特別市（詳細はご予約時にご案内します）' },
  { label: '営業時間', value: '10:00–20:00 / 不定休' },
]

function AccessSection({ useFlowerImage = true }) {
  return (
    <section id="access" className="access-section" aria-labelledby="access-title">
      <Container>
        <SectionTitle id="access-title" eyebrow="ACCESS" title="アクセス" align="center" />
        <div className="access-section__visual">
          {/* 홈 ACCESS 꽃 배경 이미지
          저장 경로: /images/home/access-flower-background.png
          추후 이미지 변경 시 같은 경로의 파일을 교체
          */}
          {useFlowerImage ? (
            <img
              className="access-section__flower-background"
              src="/images/home/access-flower-background.png"
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
              <button
                className="access-section__map-button"
                type="button"
                aria-label="Google Maps リンク準備中"
                title="Google Maps リンク準備中"
              >
                {/* TODO: 매장 위치 확정 후 이 버튼을 Google Maps 외부 링크로 교체 */}
                <ImagePlaceholder
                  label="MAP"
                  aspectRatio="16 / 9"
                  ariaLabel="GYEOLDAM 店舗地図 準備中"
                />
              </button>
            </div>
            <p className="access-section__notice">Google Mapsで見る →</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AccessSection

import { Link } from 'react-router-dom'
import Container from '../common/Container.jsx'
import ImagePlaceholder from '../common/ImagePlaceholder.jsx'

function TreatmentReservationCta() {
  return (
    <aside className="treatment-reservation-cta" aria-label="施術予約">
      {/* 시술 메뉴 하단 예약 CTA 이미지
      추후 권장 경로: /images/treatment/reservation-cta.jpg
      실제 이미지 추가 시 이 플레이스홀더를 img 또는 background-image로 교체
      */}
      <ImagePlaceholder
        className="treatment-reservation-cta__background"
        label="RESERVATION IMAGE"
        aspectRatio="16 / 5"
        ariaLabel="施術予約イメージ 準備中"
      />
      <div className="treatment-reservation-cta__overlay" aria-hidden="true" />
      <Container className="treatment-reservation-cta__content">
        <div>
          <span>RESERVATION</span>
          <p>ご希望の施術をお気軽にご相談ください。</p>
        </div>
        <Link className="primary-button treatment-reservation-cta__button" to="/reservation">
          ご予約はこちら <span aria-hidden="true">→</span>
        </Link>
      </Container>
    </aside>
  )
}

export default TreatmentReservationCta

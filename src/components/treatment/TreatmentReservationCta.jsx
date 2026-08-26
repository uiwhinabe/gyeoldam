import { Link } from 'react-router-dom'
import Container from '../common/Container.jsx'

function TreatmentReservationCta() {
  return (
    <aside className="treatment-reservation-cta" aria-label="施術予約">
      {/* Figma 시술메뉴의 상담 장면을 사용한 하단 예약 CTA 이미지 */}
      <img
        className="treatment-reservation-cta__background"
        src={`${import.meta.env.BASE_URL}images/treatment/reservation-cta.png`}
        alt="眉の仕上がりを確認するカウンセリング風景"
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

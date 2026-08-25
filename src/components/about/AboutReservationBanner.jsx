import { Link } from 'react-router-dom'
import Container from '../common/Container.jsx'
import ImagePlaceholder from '../common/ImagePlaceholder.jsx'

function AboutReservationBanner() {
  return (
    <section className="about-reservation-banner" aria-labelledby="about-reservation-title">
      {/* 상담 예약 배너 이미지
      추후 권장 경로: /images/about/reservation-consultation.jpg
      실제 상담 사진 추가 시 이 플레이스홀더를 img 또는 background-image로 교체
      */}
      <ImagePlaceholder className="about-reservation-banner__background" label="COUNSELING IMAGE" aspectRatio="16 / 6" ariaLabel="相談予約背景画像 準備中" />
      <div className="about-reservation-banner__overlay" aria-hidden="true" />
      <Container className="about-reservation-banner__content">
        <p>RESERVATION</p>
        <h2 id="about-reservation-title">あなたの美しさについて、<br />ゆっくりお話ししませんか。</h2>
        <Link className="primary-button" to="/reservation">ご予約はこちら <span aria-hidden="true">→</span></Link>
      </Container>
    </section>
  )
}

export default AboutReservationBanner

import { Link } from 'react-router-dom'
import Container from '../common/Container.jsx'
import ImagePlaceholder from '../common/ImagePlaceholder.jsx'

function HomeReservationBanner() {
  return (
    <section className="home-reservation-banner" aria-labelledby="reservation-banner-title">
      {/* 홈 시술 상담 예약 배너 배경 이미지
      추후 권장 경로: /images/home/reservation-consultation.jpg
      실제 이미지 추가 시 이 플레이스홀더를 img 또는 background-image로 교체
      */}
      <ImagePlaceholder
        className="home-reservation-banner__background"
        label="カウンセリングイメージ"
        aspectRatio="16 / 6"
        ariaLabel="施術カウンセリング画像 準備中"
      />
      <div className="home-reservation-banner__overlay" aria-hidden="true" />
      <Container className="home-reservation-banner__content">
        <p className="home-reservation-banner__eyebrow">RESERVATION</p>
        <h2 id="reservation-banner-title">あなたらしい美しさを、一緒に。</h2>
        <p>まずはカウンセリングから、お気軽にご相談ください。</p>
        <Link className="primary-button home-reservation-banner__button" to="/reservation">
          ご予約はこちら <span aria-hidden="true">→</span>
        </Link>
      </Container>
    </section>
  )
}

export default HomeReservationBanner

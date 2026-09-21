import { useLanguage } from '../../i18n/useLanguage.js'
import { Link } from 'react-router-dom'
import Container from '../common/Container.jsx'

function HomeReservationBanner() {
  const { t } = useLanguage()
  return (
    <section className="home-reservation-banner" aria-labelledby="reservation-banner-title">
      {/* 홈 시술 상담 예약 배너 배경 이미지
      저장 경로: /images/home/reservation-cta.png
      상담 장면을 담은 HOME 가로형 예약 CTA 배경 이미지
      */}
      <img
        className="home-reservation-banner__background"
        src={`${import.meta.env.BASE_URL}images/home/reservation-cta.png`}
        alt={t("眉のデザインを確認するカウンセリング風景")}
      />
      <div className="home-reservation-banner__overlay" aria-hidden="true" />
      <Container className="home-reservation-banner__content">
        <h2 id="reservation-banner-title">{t("アートメイクの感動を、")}<br />{t("あなたに。")}</h2>
        <p className="home-reservation-banner__guide">{t("ご予約はこちら")}<span aria-hidden="true">↓</span>
        </p>
        <Link
          className="home-reservation-banner__button"
          to="/reservation"
          state={{ scrollToTop: true }}
          aria-label={t("ご予約はこちら")}
        >
          <span>{t("ご予約")}</span>
        </Link>
      </Container>
    </section>
  )
}

export default HomeReservationBanner

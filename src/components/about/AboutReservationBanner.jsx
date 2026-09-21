import { useLanguage } from '../../i18n/useLanguage.js'
import { Link } from 'react-router-dom'
import Container from '../common/Container.jsx'

function AboutReservationBanner() {
  const { t } = useLanguage()
  return (
    <section className="about-reservation-banner" aria-labelledby="about-reservation-title">
      <img className="about-reservation-banner__background" src={`${import.meta.env.BASE_URL}images/about/reservation-consultation.png`} alt={t("カウンセリングを行うスタッフとお客様")} />
      <div className="about-reservation-banner__overlay" aria-hidden="true" />
      <Container className="about-reservation-banner__content">
        <h2 id="about-reservation-title">{t("アートメイクの感動を、")}<br />{t("あなたに。")}</h2>
        <p>{t("ご予約はこちら")}</p>
        <span className="about-reservation-banner__down" aria-hidden="true">↓</span>
        <Link className="primary-button" to="/reservation">{t("ご予約")}</Link>
      </Container>
    </section>
  )
}

export default AboutReservationBanner

import { Link } from 'react-router-dom'
import Container from '../common/Container.jsx'

function AboutReservationBanner() {
  return (
    <section className="about-reservation-banner" aria-labelledby="about-reservation-title">
      <img className="about-reservation-banner__background" src={`${import.meta.env.BASE_URL}images/about/reservation-consultation.png`} alt="カウンセリングを行うスタッフとお客様" />
      <div className="about-reservation-banner__overlay" aria-hidden="true" />
      <Container className="about-reservation-banner__content">
        <h2 id="about-reservation-title">アートメイクの感動を、<br />あなたに。</h2>
        <p>ご予約はこちら</p>
        <span className="about-reservation-banner__down" aria-hidden="true">↓</span>
        <Link className="primary-button" to="/reservation">ご予約</Link>
      </Container>
    </section>
  )
}

export default AboutReservationBanner

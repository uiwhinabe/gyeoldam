import { Link } from 'react-router-dom'

function HomeHero() {
  return (
    <section id="home" className="home-hero" aria-labelledby="home-hero-title">
      {/* 홈 히어로 전체 매장 배경 이미지
      저장 경로: /images/home/gyeoldam-main.png
      Vite BASE_URL을 사용해 로컬과 GitHub Pages에서 같은 이미지로 연결
      히어로 전체를 채우는 메인 배경 이미지로 사용
      */}
      <img
        className="home-hero__background"
        src={`${import.meta.env.BASE_URL}images/home/gyeoldam-main.png`}
        alt="GYEOLDAM サロンの受付と施術スペース"
      />

      <div className="container home-hero__inner">
        <article className="home-hero__reservation-card">
          {/* 홈 히어로 예약 안내 카드 이미지
          저장 경로: /images/home/reservation-visual.png
          Vite BASE_URL을 사용해 로컬과 GitHub Pages에서 같은 이미지로 연결
          세로형 예약 카드 전체를 채우는 상담 이미지로 사용
          */}
          <img src={`${import.meta.env.BASE_URL}images/home/reservation-visual.png`} alt="眉の施術前カウンセリング" />
          <div className="home-hero__reservation-overlay" aria-hidden="true" />
          <div className="home-hero__reservation-content">
            <h1 id="home-hero-title">
              <span>あなたらしい美しさを、もっと美しく。</span>
              <span>一人ひとりに寄り添う、丁寧な施術を。</span>
            </h1>
            <Link className="home-hero__reservation-button" to="/reservation">
              ご予約はこちら
              <span aria-hidden="true">▲</span>
            </Link>
          </div>
        </article>
      </div>
    </section>
  )
}

export default HomeHero

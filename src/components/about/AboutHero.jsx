function AboutHero() {
  return (
    <section className="about-hero" aria-labelledby="about-hero-title">
      {/* ABOUT 히어로 배경 이미지
      저장 경로: /images/about/hero-background.png
      추후 이미지 변경 시 같은 경로의 파일을 교체
      */}
      <img
        className="about-hero__background"
        src="/images/about/hero-background.png"
        alt="白い花に囲まれたGYEOLDAM STORYの背景"
      />
      <div className="about-hero__overlay" aria-hidden="true" />
      <div className="about-hero__content">
        <p>ABOUT US</p>
        <h1 id="about-hero-title">GYEOLDAM STORY</h1>
      </div>
    </section>
  )
}

export default AboutHero

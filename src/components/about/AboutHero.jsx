function AboutHero() {
  return (
    <section className="about-hero" aria-labelledby="about-hero-title">
      <div className="about-hero__overlay" aria-hidden="true" />
      <div className="about-hero__content">
        <p>ABOUT US</p>
        <span>アートメイク専門サロン</span>
        <h1 id="about-hero-title">GYEOLDAM STORY</h1>
        <i aria-hidden="true" />
        <div className="about-hero__message">
          <strong>一人ひとりの美しさに、丁寧に向き合う。</strong>
          <span>GYEOLDAMは、その人らしい自然な美しさを大切にし、</span>
          <span>心を込めた施術とサービスをお届けします。</span>
        </div>
      </div>
    </section>
  )
}

export default AboutHero

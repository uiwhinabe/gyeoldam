import Container from '../common/Container.jsx'
import FaqSection from './FaqSection.jsx'
import YoutubeFeature from './YoutubeFeature.jsx'

function HomeMediaFaqSection() {
  return (
    <div className="home-media-faq-section">
      <Container className="home-media-faq-section__grid">
        <YoutubeFeature />
        <FaqSection />
      </Container>
    </div>
  )
}

export default HomeMediaFaqSection

import AccessSection from '../components/home/AccessSection.jsx'
import CampaignSection from '../components/home/CampaignSection.jsx'
import GallerySection from '../components/home/GallerySection.jsx'
import HomeHero from '../components/home/HomeHero.jsx'
import HomeMediaFaqSection from '../components/home/HomeMediaFaqSection.jsx'
import HomeReservationBanner from '../components/home/HomeReservationBanner.jsx'
import HomeSectionNav from '../components/home/HomeSectionNav.jsx'
import SnsSection from '../components/home/SnsSection.jsx'

function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeSectionNav />
      <CampaignSection />
      <HomeReservationBanner />
      <GallerySection />
      <SnsSection />
      <HomeMediaFaqSection />
      <AccessSection />
    </>
  )
}

export default HomePage

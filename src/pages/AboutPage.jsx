import AboutHero from '../components/about/AboutHero.jsx'
import AboutReservationBanner from '../components/about/AboutReservationBanner.jsx'
import BrandStory from '../components/about/BrandStory.jsx'
import DirectorProfile from '../components/about/DirectorProfile.jsx'
import SalonGallery from '../components/about/SalonGallery.jsx'
import StaffCarousel from '../components/about/StaffCarousel.jsx'
import AccessSection from '../components/home/AccessSection.jsx'

function AboutPage() {
  return (
    <div className="about-page">
      <AboutHero />
      <BrandStory />
      <SalonGallery />
      <div className="about-people-frame">
        <DirectorProfile />
        <StaffCarousel />
      </div>
      <AboutReservationBanner />
      <div className="about-access"><AccessSection useFlowerImage /></div>
    </div>
  )
}

export default AboutPage

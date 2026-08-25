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
      <DirectorProfile />
      <StaffCarousel />
      <AboutReservationBanner />
      {/* HomePage의 ACCESS 구조를 재사용하며 About 사진 원칙에 따라 배경은 플레이스홀더로 표시합니다. */}
      <AccessSection useFlowerImage={false} />
    </div>
  )
}

export default AboutPage

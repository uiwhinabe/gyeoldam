import { useState } from 'react'
import { aboutStaff } from '../../data/about.js'
import Container from '../common/Container.jsx'
import ImagePlaceholder from '../common/ImagePlaceholder.jsx'
import SectionTitle from '../common/SectionTitle.jsx'

function StaffCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const lastIndex = aboutStaff.length - 1

  const moveTo = (nextIndex) => setCurrentIndex(Math.min(Math.max(nextIndex, 0), lastIndex))
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') moveTo(currentIndex - 1)
    if (event.key === 'ArrowRight') moveTo(currentIndex + 1)
  }

  return (
    <section className="staff-section" aria-labelledby="staff-title">
      <Container>
        <SectionTitle id="staff-title" eyebrow="OUR TEAM" title="スタッフ紹介" align="center" />
        <div
          className="staff-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="スタッフプロフィール"
          tabIndex="0"
          onKeyDown={handleKeyDown}
        >
          <div className="staff-carousel__viewport">
            <div className="staff-carousel__track" style={{ '--staff-index': currentIndex }}>
              {aboutStaff.map((staff, index) => (
                <article key={staff.id} className="staff-card" aria-hidden={index !== currentIndex ? undefined : false}>
                  <div className="staff-card__media">
                    {/* 직원별 프로필 이미지
                    추후 권장 경로: /images/about/staff-01.jpg 형식
                    data의 image 필드에 실제 직원 사진 경로 추가
                    */}
                    {staff.image ? (
                      <img src={staff.image} alt={staff.imageAlt} />
                    ) : (
                      <ImagePlaceholder label={staff.name} aspectRatio="4 / 5" ariaLabel={`${staff.imageAlt} 画像準備中`} />
                    )}
                  </div>
                  <p>{staff.role}</p>
                  <h3>{staff.name}</h3>
                  {/* TODO: 직원별 Instagram 계정 확정 후 실제 외부 링크 연결 */}
                  <button type="button" title="Instagram 準備中">Instagram ↗</button>
                </article>
              ))}
            </div>
          </div>
          <div className="staff-carousel__controls">
            <button type="button" onClick={() => moveTo(currentIndex - 1)} disabled={currentIndex === 0} aria-label="前のスタッフ">← PREV</button>
            <span aria-live="polite">{currentIndex + 1} / {aboutStaff.length}</span>
            <button type="button" onClick={() => moveTo(currentIndex + 1)} disabled={currentIndex === lastIndex} aria-label="次のスタッフ">NEXT →</button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default StaffCarousel

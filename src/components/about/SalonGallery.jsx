import { useEffect, useRef, useState } from 'react'
import Container from '../common/Container.jsx'
import ImagePlaceholder from '../common/ImagePlaceholder.jsx'
import SectionTitle from '../common/SectionTitle.jsx'

const salonSpaces = [
  { id: 'reception', label: 'RECEPTION', image: null, imageAlt: 'GYEOLDAM受付スペース' },
  { id: 'lounge', label: 'LOUNGE', image: null, imageAlt: 'GYEOLDAMラウンジ' },
  { id: 'counseling', label: 'COUNSELING ROOM', image: null, imageAlt: 'GYEOLDAMカウンセリングルーム' },
  { id: 'powder', label: 'POWDER ROOM', image: null, imageAlt: 'GYEOLDAMパウダールーム' },
  { id: 'treatment', label: 'TREATMENT ROOM', image: null, imageAlt: 'GYEOLDAM施術室' },
]

function SalonGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const viewportRef = useRef(null)

  const moveTo = (nextIndex) => {
    const normalizedIndex = (nextIndex + salonSpaces.length) % salonSpaces.length
    setCurrentIndex(normalizedIndex)
  }

  useEffect(() => {
    const viewport = viewportRef.current
    const target = viewport?.children[currentIndex]
    if (!viewport || !target) return

    viewport.scrollTo({ left: target.offsetLeft - viewport.offsetLeft, behavior: 'smooth' })
  }, [currentIndex])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % salonSpaces.length)
    }, 4000)

    return () => window.clearInterval(timer)
  }, [])

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') moveTo(currentIndex - 1)
    if (event.key === 'ArrowRight') moveTo(currentIndex + 1)
  }

  return (
    <section className="salon-gallery" aria-labelledby="salon-gallery-title">
      <Container>
        <SectionTitle id="salon-gallery-title" eyebrow="OUR SPACE" title="心地よい空間" align="center" />
      </Container>

      <div
        className="salon-gallery__carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="GYEOLDAM店内写真"
        tabIndex="0"
        onKeyDown={handleKeyDown}
      >
        <div ref={viewportRef} className="salon-gallery__viewport">
          {salonSpaces.map((space, index) => (
            <figure key={space.id} className="salon-gallery__slide" aria-label={`${index + 1} / ${salonSpaces.length}`}>
              {/* 매장 공간 가로형 사진
              추후 권장 경로: /images/about/salon-space-01.jpg 형식
              data의 image 필드에 실제 매장 사진 경로 추가
              */}
              {space.image ? (
                <img src={space.image} alt={space.imageAlt} />
              ) : (
                <ImagePlaceholder label={space.label} aspectRatio="16 / 9" ariaLabel={`${space.imageAlt} 画像準備中`} />
              )}
            </figure>
          ))}
        </div>

        <button className="salon-gallery__arrow salon-gallery__arrow--prev" type="button" onClick={() => moveTo(currentIndex - 1)} aria-label="前の店内写真">←</button>
        <button className="salon-gallery__arrow salon-gallery__arrow--next" type="button" onClick={() => moveTo(currentIndex + 1)} aria-label="次の店内写真">→</button>
        <p className="salon-gallery__counter" aria-live="polite">{String(currentIndex + 1).padStart(2, '0')} / {String(salonSpaces.length).padStart(2, '0')}</p>
      </div>
    </section>
  )
}

export default SalonGallery

import { useEffect, useRef, useState } from 'react'

const salonSpaces = [
  { id: 'reception', label: 'RECEPTION', image: 'salon-scenes-a.png', crop: 'reception', imageAlt: 'GYEOLDAM受付スペース' },
  { id: 'lounge', label: 'LOUNGE', image: 'salon-scenes-b.png', crop: 'lounge', imageAlt: 'GYEOLDAMラウンジ' },
  { id: 'counseling', label: 'COUNSELING ROOM', image: 'salon-scenes-a.png', crop: 'counseling', imageAlt: 'GYEOLDAMカウンセリングルーム' },
  { id: 'powder', label: 'POWDER ROOM', image: 'salon-scenes-b.png', crop: 'powder', imageAlt: 'GYEOLDAMパウダールーム' },
  { id: 'treatment', label: 'TREATMENT ROOM', image: 'salon-scenes-a.png', crop: 'treatment', imageAlt: 'GYEOLDAM施術室' },
  { id: 'detail', label: 'SALON DETAIL', image: 'salon-scene-c.png', crop: 'detail', imageAlt: 'GYEOLDAM店内ディテール' },
]

function SalonGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const viewportRef = useRef(null)
  const slideRefs = useRef([])

  const moveTo = (nextIndex) => {
    const index = Math.min(Math.max(nextIndex, 0), salonSpaces.length - 1)
    const viewport = viewportRef.current
    const target = slideRefs.current[index]
    if (!viewport || !target) return
    setCurrentIndex(index)
    viewport.scrollTo({ left: target.offsetLeft - (viewport.clientWidth - target.offsetWidth) / 2, behavior: 'smooth' })
  }

  const handleScroll = () => {
    const viewport = viewportRef.current
    if (!viewport) return
    const center = viewport.scrollLeft + viewport.clientWidth / 2
    const index = slideRefs.current.reduce((best, slide, slideIndex) => {
      if (!slide) return best
      const distance = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - center)
      return distance < best.distance ? { index: slideIndex, distance } : best
    }, { index: 0, distance: Infinity }).index
    setCurrentIndex(index)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') moveTo(currentIndex - 1)
    if (event.key === 'ArrowRight') moveTo(currentIndex + 1)
  }

  useEffect(() => {
    const alignCurrentSlide = () => {
      const viewport = viewportRef.current
      const slide = slideRefs.current[currentIndex]
      if (!viewport || !slide) return
      viewport.scrollTo({ left: slide.offsetLeft - (viewport.clientWidth - slide.offsetWidth) / 2, behavior: 'auto' })
    }
    window.addEventListener('resize', alignCurrentSlide)
    return () => window.removeEventListener('resize', alignCurrentSlide)
  }, [currentIndex])

  return (
    <section className="salon-gallery" aria-label="GYEOLDAM店内写真">
      <div
        className="salon-gallery__carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="GYEOLDAM店内写真"
        tabIndex="0"
        onKeyDown={handleKeyDown}
      >
        <div ref={viewportRef} className="salon-gallery__viewport" onScroll={handleScroll}>
          {salonSpaces.map((space, index) => (
            <figure key={space.id} ref={(node) => { slideRefs.current[index] = node }} className={`salon-gallery__slide salon-gallery__slide--${space.crop}`} aria-label={`${index + 1} / ${salonSpaces.length}: ${space.label}`}>
              <img src={`${import.meta.env.BASE_URL}images/about/space/${space.image}`} alt={space.imageAlt} />
            </figure>
          ))}
        </div>

        <button className="salon-gallery__arrow salon-gallery__arrow--prev" type="button" onClick={() => moveTo(currentIndex - 1)} aria-label="前の店内写真">←</button>
        <button className="salon-gallery__arrow salon-gallery__arrow--next" type="button" onClick={() => moveTo(currentIndex + 1)} aria-label="次の店内写真">→</button>
        <p className="salon-gallery__counter" aria-live="polite">{String(currentIndex + 1).padStart(2, '0')} / {String(salonSpaces.length).padStart(2, '0')}</p>
        <p className="salon-gallery__caption">GYEOLDAMの店内写真です。</p>
      </div>
    </section>
  )
}

export default SalonGallery

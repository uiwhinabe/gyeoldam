import { useEffect, useRef, useState } from 'react'
import { aboutStaff } from '../../data/about.js'
import Container from '../common/Container.jsx'

function StaffCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const viewportRef = useRef(null)
  const cardRefs = useRef([])
  const count = aboutStaff.length
  const positionRef = useRef(count)
  const settleTimer = useRef(null)
  const cards = [0, 1, 2].flatMap((copy) => aboutStaff.map((staff, index) => ({ staff, index, copy })))

  const scrollToCard = (position, behavior = 'instant') => {
    const viewport = viewportRef.current
    const card = cardRefs.current[position]
    if (!viewport || !card) return
    const left = viewport.scrollLeft + card.getBoundingClientRect().left - viewport.getBoundingClientRect().left - (viewport.clientWidth - card.offsetWidth) / 2
    viewport.scrollTo({ left, behavior })
  }

  const moveTo = (direction) => {
    if (!window.matchMedia('(max-width: 1023px)').matches) return
    clearTimeout(settleTimer.current)
    let position = positionRef.current
    if (position < count || position >= count * 2) {
      position = count + ((position % count) + count) % count
      scrollToCard(position)
    }
    positionRef.current = position + direction
    setCurrentIndex(((position + direction) % count + count) % count)
    scrollToCard(position + direction, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth')
  }

  const handleScroll = () => {
    if (!window.matchMedia('(max-width: 1023px)').matches) return
    clearTimeout(settleTimer.current)
    settleTimer.current = setTimeout(() => {
      const viewport = viewportRef.current
      if (!viewport) return
      const center = viewport.getBoundingClientRect().left + viewport.clientWidth / 2
      const position = cardRefs.current.reduce((closest, card, index) => {
        if (!card) return closest
        const rect = card.getBoundingClientRect()
        const distance = Math.abs(rect.left + rect.width / 2 - center)
        return distance < closest.distance ? { index, distance } : closest
      }, { index: count, distance: Infinity }).index
      const index = position % count
      positionRef.current = count + index
      setCurrentIndex(index)
      if (position !== count + index) scrollToCard(count + index)
    }, 140)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault()
      moveTo(event.key === 'ArrowLeft' ? -1 : 1)
    }
  }

  useEffect(() => {
    const alignCurrentCard = () => {
      clearTimeout(settleTimer.current)
      if (window.matchMedia('(max-width: 1023px)').matches) {
        positionRef.current = count + positionRef.current % count
        scrollToCard(positionRef.current)
      } else {
        viewportRef.current?.scrollTo({ left: 0, behavior: 'instant' })
      }
    }
    alignCurrentCard()
    window.addEventListener('resize', alignCurrentCard)
    return () => {
      clearTimeout(settleTimer.current)
      window.removeEventListener('resize', alignCurrentCard)
    }
  }, [count])

  return (
    <section className="staff-section" aria-label="スタッフ紹介">
      <Container>
        <div
          className="staff-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="スタッフプロフィール"
          tabIndex="0"
          onKeyDown={handleKeyDown}
        >
          <div className="staff-carousel__window">
            <div className="staff-carousel__viewport" ref={viewportRef} onScroll={handleScroll}>
              <div className="staff-carousel__track">
                {cards.map(({ staff, index, copy }, position) => (
                  <article
                    key={`${copy}-${staff.id}`}
                    className={`staff-card${copy !== 1 ? ' staff-card--clone' : ''}`}
                    aria-hidden={copy !== 1 ? true : undefined}
                    ref={(node) => { cardRefs.current[position] = node }}
                    aria-label={`${index + 1} / ${aboutStaff.length}: ${staff.name}`}
                  >
                    <div className="staff-card__media">
                      <img className={`staff-card__portrait staff-card__portrait--${staff.imagePosition}`} src={staff.image} alt={staff.imageAlt} />
                    </div>
                    <div className="staff-card__content">
                      <h3>{staff.name}</h3>
                      <p className="staff-card__local-name">{staff.localName}</p>
                      <p className="staff-card__description">{staff.description}</p>
                      <a tabIndex={copy !== 1 ? -1 : undefined} href={staff.instagramUrl} target="_blank" rel="noreferrer" aria-label={`${staff.name} Instagramを開く`}>
                        <img className="staff-card__instagram-icon" src={`${import.meta.env.BASE_URL}images/about/staff/instagram-icon.png`} alt="" aria-hidden="true" />
                        <span>{staff.instagram}</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <button className="staff-carousel__arrow staff-carousel__arrow--prev" type="button" onClick={() => moveTo(-1)} aria-label="前のスタッフ" />
            <button className="staff-carousel__arrow staff-carousel__arrow--next" type="button" onClick={() => moveTo(1)} aria-label="次のスタッフ" />
          </div>
          <div className="staff-carousel__controls">
            <span aria-live="polite">{currentIndex + 1} / {aboutStaff.length}</span>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default StaffCarousel

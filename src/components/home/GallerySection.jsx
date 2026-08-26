import { useState } from 'react'
import { homeGalleryItems } from '../../data/homeGallery.js'
import Container from '../common/Container.jsx'
import ImagePlaceholder from '../common/ImagePlaceholder.jsx'
import SectionTitle from '../common/SectionTitle.jsx'

function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleCategorySelect = (item) => {
    setSelectedCategory(item.category)
    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section id="gallery" className="gallery-section" aria-labelledby="gallery-title">
      <Container>
        <SectionTitle id="gallery-title" eyebrow="GALLERY" title="ギャラリー" align="center" />

        <div className="gallery-section__categories" aria-label="施術カテゴリー">
          {homeGalleryItems.map((item) => (
            <button
              key={item.id}
              className={`gallery-section__category${
                selectedCategory === item.category ? ' gallery-section__category--active' : ''
              }`}
              type="button"
              aria-pressed={selectedCategory === item.category}
              onClick={() => handleCategorySelect(item)}
            >
              {item.category}
            </button>
          ))}
        </div>

        <div className="gallery-section__grid">
          {homeGalleryItems.map((item, index) => (
            <article
              id={item.id}
              key={item.id}
              className={`gallery-card${
                selectedCategory === item.category ? ' gallery-card--selected' : ''
              }`}
            >
              <div className="gallery-card__media">
                {/* 홈 갤러리 비포·애프터 이미지
                저장 경로: /images/home/gallery/gallery-brow.png 형식
                시술 카테고리에 맞는 실제 비포·애프터 이미지를 data에서 연결
                */}
                {item.image ? (
                  <img className="gallery-card__image" src={item.image} alt={item.imageAlt} />
                ) : (
                  <ImagePlaceholder
                    label={`BEFORE / AFTER ${String(index + 1).padStart(2, '0')}`}
                    aspectRatio="4 / 3"
                    ariaLabel={`${item.category} ${item.imageAlt} 画像準備中`}
                  />
                )}
              </div>
              <h3>{item.category}</h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default GallerySection

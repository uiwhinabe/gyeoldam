import Container from '../common/Container.jsx'
import ImagePlaceholder from '../common/ImagePlaceholder.jsx'

function TreatmentCategory({ category }) {
  return (
    <section id={category.id} className="treatment-category" aria-labelledby={`${category.id}-title`}>
      <Container>
        <header className="treatment-category__header">
          <p>{category.tabLabel}</p>
          <h2 id={`${category.id}-title`}>{category.title}</h2>
        </header>

        <div className="treatment-category__items">
          {category.items.map((item, index) => (
            <article key={item.name} className="treatment-item">
              <div className="treatment-item__media">
                {/* 시술 메뉴 이미지
                추후 권장 경로: /images/treatment/{카테고리}-{번호}.jpg
                data의 image 필드에 실제 이미지 경로 추가 시 img로 자동 교체
                */}
                {item.image ? (
                  <img src={item.image} alt={item.imageAlt} />
                ) : (
                  <ImagePlaceholder
                    label={`${category.tabLabel} ${String(index + 1).padStart(2, '0')}`}
                    aspectRatio="1 / 1"
                    ariaLabel={`${item.imageAlt} 画像準備中`}
                  />
                )}
              </div>
              <div className="treatment-item__content">
                <p className="treatment-item__number">{String(index + 1).padStart(2, '0')}</p>
                <h3>{item.name}</h3>
                <p className="treatment-item__description">{item.description}</p>
                <div className="treatment-item__price">
                  <span>施術料金</span>
                  <strong>{item.price}</strong>
                </div>
                {item.directorFee && <p className="treatment-item__director">※ {item.directorFee}</p>}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default TreatmentCategory

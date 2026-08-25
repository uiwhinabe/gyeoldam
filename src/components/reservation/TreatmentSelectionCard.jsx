import ImagePlaceholder from '../common/ImagePlaceholder.jsx'

function TreatmentSelectionCard({ treatment, treatmentId, isSelected, onAdd }) {
  return (
    <article className={`reservation-treatment-card${isSelected ? ' reservation-treatment-card--selected' : ''}`}>
      <div className="reservation-treatment-card__media">
        {/* 예약 시술 카드 이미지
        권장 경로: /images/treatment/{카테고리}-{번호}.jpg
        공통 treatment data의 image 필드에 경로 추가 시 실제 img로 자동 교체
        */}
        {treatment.image ? (
          <img src={treatment.image} alt={treatment.imageAlt} />
        ) : (
          <ImagePlaceholder label="TREATMENT" aspectRatio="4 / 3" ariaLabel={`${treatment.imageAlt} 画像準備中`} />
        )}
      </div>
      <div className="reservation-treatment-card__body">
        <div className="reservation-treatment-card__heading">
          <h2>{treatment.name}</h2>
          {isSelected && <span className="reservation-treatment-card__selected-label">選択済み</span>}
        </div>
        <p className="reservation-treatment-card__description">{treatment.description}</p>
        <div className="reservation-treatment-card__price">
          <span>施術料金</span>
          <strong>{treatment.price}</strong>
        </div>
        {treatment.directorFee && <p className="reservation-treatment-card__director">※ {treatment.directorFee}</p>}
      </div>
      <button
        className="reservation-treatment-card__add"
        type="button"
        aria-label={`${treatment.name}${isSelected ? ' 選択を解除' : ' 追加'}`}
        aria-pressed={isSelected}
        onClick={() => onAdd(treatmentId, treatment)}
      >
        <span aria-hidden="true">{isSelected ? '✓' : '+'}</span>
      </button>
    </article>
  )
}

export default TreatmentSelectionCard

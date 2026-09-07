import ImagePlaceholder from '../common/ImagePlaceholder.jsx'
import { formatDirectorSurcharge, formatTreatmentPrice } from '../../data/treatments.js'

function TreatmentSelectionCard({ treatment, treatmentId, isSelected, onAdd }) {
  return (
    <article className={`reservation-treatment-card${isSelected ? ' reservation-treatment-card--selected' : ''}`}>
      <div className="reservation-treatment-card__media">
        {treatment.reservationImage ? (
          <img src={treatment.reservationImage} alt={treatment.reservationImageAlt} />
        ) : (
          <ImagePlaceholder label={treatment.name} aspectRatio="4 / 3" ariaLabel={`${treatment.reservationImageAlt} 準備中`} />
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
          <strong>{formatTreatmentPrice(treatment)}</strong>
        </div>
        {treatment.directorSurcharge > 0 && <p className="reservation-treatment-card__director">※ 院長指名　{formatDirectorSurcharge(treatment)}</p>}
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

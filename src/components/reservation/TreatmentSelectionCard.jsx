import { useLanguage } from '../../i18n/useLanguage.js'
import ImagePlaceholder from '../common/ImagePlaceholder.jsx'
import { formatDirectorSurcharge, formatTreatmentPrice } from '../../data/treatments.js'

function TreatmentSelectionCard({ treatment, treatmentId, isSelected, onAdd }) {
  const { t } = useLanguage()
  return (
    <article className={`reservation-treatment-card${isSelected ? ' reservation-treatment-card--selected' : ''}`}>
      <div className="reservation-treatment-card__media">
        {treatment.reservationImage ? (
          <img src={treatment.reservationImage} alt={t(treatment.reservationImageAlt)} />
        ) : (
          <ImagePlaceholder label={t(treatment.name)} aspectRatio="4 / 3" ariaLabel={t(`${treatment.reservationImageAlt} 準備中`)} />
        )}
      </div>
      <div className="reservation-treatment-card__body">
        <div className="reservation-treatment-card__heading">
          <h2>{t(treatment.name)}</h2>
          {isSelected && <span className="reservation-treatment-card__selected-label">{t("選択済み")}</span>}
        </div>
        <p className="reservation-treatment-card__description">{t(treatment.description)}</p>
        <div className="reservation-treatment-card__price">
          <span>{t("施術料金")}</span>
          <strong>{t(formatTreatmentPrice(treatment))}</strong>
        </div>
        {treatment.directorSurcharge > 0 && <p className="reservation-treatment-card__director">{t("※ 院長指名　")}{t(formatDirectorSurcharge(treatment))}</p>}
      </div>
      <button
        className="reservation-treatment-card__add"
        type="button"
        aria-label={t(`${treatment.name}${isSelected ? ' 選択を解除' : ' 追加'}`)}
        aria-pressed={isSelected}
        onClick={() => onAdd(treatmentId, treatment)}
      >
        <span aria-hidden="true">{t(isSelected ? '✓' : '+')}</span>
      </button>
    </article>
  )
}

export default TreatmentSelectionCard

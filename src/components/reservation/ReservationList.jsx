import { useLanguage } from '../../i18n/useLanguage.js'
import { formatDirectorSurcharge, formatReservationTotal, formatTreatmentPrice } from '../../data/treatments.js'

function ReservationList({ items, onRemove, onDirectorChange, onAddAnother }) {
  const { t } = useLanguage()
  return (
    <section className="reservation-list-panel" aria-labelledby="reservation-list-title">
      <div className="reservation-list-panel__heading">
        <p>{t("SELECTED TREATMENTS")}</p>
        <h2 id="reservation-list-title">{t("予約リスト")}</h2>
      </div>

      {items.length === 0 ? (
        <div className="reservation-list-panel__empty">
          <p>{t("選択された施術はありません。")}</p>
          <button type="button" onClick={onAddAnother}>{t("施術を選択する")}</button>
        </div>
      ) : (
        <div className="reservation-list-panel__items">
          {items.map((item) => (
            <article key={item.id} className="reservation-list-card">
              <div className="reservation-list-card__top">
                <h3>{t(item.name)}</h3>
                <button type="button" aria-label={t(`${item.name}を削除`)} onClick={() => onRemove(item.id)}>{t("削除")}</button>
              </div>
              <dl>
                <div><dt>{t("基本料金")}</dt><dd>{t(formatTreatmentPrice(item))}</dd></div>
                <div>
                  <dt><label htmlFor={`director-${item.id}`}>{t("院長指名")}</label></dt>
                  <dd>
                    <select
                      id={`director-${item.id}`}
                      value={item.directorSelected ? 'director' : 'none'}
                      onChange={(event) => onDirectorChange(item.id, event.target.value === 'director')}
                    >
                      <option value="none">{t("指名なし")}</option>
                      <option value="director">{t("院長を指名")}</option>
                    </select>
                  </dd>
                </div>
                <div><dt>{t("指名追加料金")}</dt><dd>{t(item.additionalFee > 0 ? formatDirectorSurcharge(item) : '追加料金なし')}</dd></div>
                <div className="reservation-list-card__total"><dt>{t("合計")}</dt><dd>{t(formatReservationTotal(item.finalAmount, item.priceType === 'consultation'))}</dd></div>
              </dl>
            </article>
          ))}
          <button className="reservation-list-panel__add" type="button" onClick={onAddAnother}>{t("＋ 他の施術を追加")}</button>
        </div>
      )}
    </section>
  )
}

export default ReservationList

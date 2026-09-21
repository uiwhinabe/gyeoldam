import { useLanguage } from '../../i18n/useLanguage.js'
import { formatReservationTotal, formatWon, getReservationTotals } from '../../data/treatments.js'

function ReservationSummary({ items, reservationDate, reservationTime }) {
  const { t } = useLanguage()
  const { treatmentTotal, directorFeeTotal, finalAmount, hasConsultation } = getReservationTotals(items)

  return (
    <aside className="reservation-summary" aria-labelledby="reservation-summary-title">
      <p className="reservation-summary__eyebrow">{t("RESERVATION SUMMARY")}</p>
      <h2 id="reservation-summary-title">{t("予約内容")}</h2>

      <div className="reservation-summary__treatments">
        <h3>{t("選択した施術")}</h3>
        {items.length === 0 ? (
          <p>{t("未選択")}</p>
        ) : (
          <ul>{items.map((item) => <li key={item.id}>{t(item.name)}</li>)}</ul>
        )}
      </div>

      <dl className="reservation-summary__schedule">
        <div><dt>{t("予約日")}</dt><dd>{t(reservationDate || '未選択')}</dd></div>
        <div><dt>{t("予約時間")}</dt><dd>{t(reservationTime || '未選択')}</dd></div>
      </dl>

      <dl className="reservation-summary__prices">
        <div><dt>{t("施術料金合計")}</dt><dd>{t(formatReservationTotal(treatmentTotal, hasConsultation))}</dd></div>
        <div><dt>{t("院長指名追加料金")}</dt><dd>{t(formatWon(directorFeeTotal))}</dd></div>
        <div className="reservation-summary__final"><dt>{t("最終金額")}</dt><dd>{t(formatReservationTotal(finalAmount, hasConsultation))}</dd></div>
      </dl>
      {/* TODO: 다음 단계에서 예약 날짜/시간 선택 및 서버 저장 데이터와 연결 */}
    </aside>
  )
}

export default ReservationSummary

import { formatReservationTotal, formatWon, getReservationTotals } from '../../data/treatments.js'

function ReservationSummary({ items, reservationDate, reservationTime }) {
  const { treatmentTotal, directorFeeTotal, finalAmount, hasConsultation } = getReservationTotals(items)

  return (
    <aside className="reservation-summary" aria-labelledby="reservation-summary-title">
      <p className="reservation-summary__eyebrow">RESERVATION SUMMARY</p>
      <h2 id="reservation-summary-title">予約内容</h2>

      <div className="reservation-summary__treatments">
        <h3>選択した施術</h3>
        {items.length === 0 ? (
          <p>未選択</p>
        ) : (
          <ul>{items.map((item) => <li key={item.id}>{item.name}</li>)}</ul>
        )}
      </div>

      <dl className="reservation-summary__schedule">
        <div><dt>予約日</dt><dd>{reservationDate || '未選択'}</dd></div>
        <div><dt>予約時間</dt><dd>{reservationTime || '未選択'}</dd></div>
      </dl>

      <dl className="reservation-summary__prices">
        <div><dt>施術料金合計</dt><dd>{formatReservationTotal(treatmentTotal, hasConsultation)}</dd></div>
        <div><dt>院長指名追加料金</dt><dd>{formatWon(directorFeeTotal)}</dd></div>
        <div className="reservation-summary__final"><dt>最終金額</dt><dd>{formatReservationTotal(finalAmount, hasConsultation)}</dd></div>
      </dl>
      {/* TODO: 다음 단계에서 예약 날짜/시간 선택 및 서버 저장 데이터와 연결 */}
    </aside>
  )
}

export default ReservationSummary

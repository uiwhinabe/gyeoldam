import { Link } from 'react-router-dom'

const formatWon = (amount) => `${amount.toLocaleString('ja-JP')}ウォン`

function ReservationHistoryCard({ reservation, isPast }) {
  return (
    <article className="mypage-reservation-card">
      <div className="mypage-reservation-card__date">
        <span>{reservation.date}</span>
        <strong>{reservation.time}</strong>
        <small>({reservation.weekday})</small>
      </div>
      <div className="mypage-reservation-card__content">
        <div className="mypage-reservation-card__top">
          <span className={`mypage-reservation-card__status${isPast ? ' mypage-reservation-card__status--past' : ''}`}>{reservation.status}</span>
          <small>予約番号 {reservation.id}</small>
        </div>
        <h3>{reservation.treatments.join(' ＋ ')}</h3>
        <dl>
          <div><dt>担当者</dt><dd>{reservation.artist}</dd></div>
          <div><dt>施術料金</dt><dd>{formatWon(reservation.price)}</dd></div>
          <div><dt>所要時間</dt><dd>{reservation.duration}</dd></div>
        </dl>
        <div className="mypage-reservation-card__actions">
          {isPast ? (
            <>
              <button type="button">詳細を見る</button>
              <Link to="/reservation" state={{ rebookTreatments: reservation.treatments }}>もう一度予約する</Link>
            </>
          ) : (
            <Link to={`/mypage/reservation/${reservation.id}/manage`}>予約の変更・キャンセル</Link>
          )}
        </div>
      </div>
    </article>
  )
}

export default ReservationHistoryCard

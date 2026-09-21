import { useLanguage } from '../../i18n/useLanguage.js'
import { Link } from 'react-router-dom'
import { formatReservationTotal } from '../../data/treatments.js'

function ReservationHistoryCard({ reservation, isPast }) {
  const { t } = useLanguage()
  return (
    <article className="mypage-reservation-card">
      <div className="mypage-reservation-card__date">
        <span>{t(reservation.date)}</span>
        <strong>{t(reservation.time)}</strong>
        <small>({t(reservation.weekday)})</small>
      </div>
      <div className="mypage-reservation-card__content">
        <div className="mypage-reservation-card__top">
          <span className={`mypage-reservation-card__status${isPast ? ' mypage-reservation-card__status--past' : ''}`}>{t(reservation.status)}</span>
          <small>{t("予約番号 ")}{t(reservation.id)}</small>
        </div>
        <h3>{t(reservation.treatments.join(' ＋ '))}</h3>
        <dl>
          <div><dt>{t("担当者")}</dt><dd>{t(reservation.artist)}</dd></div>
          <div><dt>{t("施術料金")}</dt><dd>{t(formatReservationTotal(reservation.price, reservation.hasConsultation))}</dd></div>
          <div><dt>{t("所要時間")}</dt><dd>{t(reservation.duration)}</dd></div>
        </dl>
        <div className="mypage-reservation-card__actions">
          {isPast ? (
            <>
              <button type="button">{t("詳細を見る")}</button>
              <Link to="/reservation" state={{ rebookTreatments: reservation.treatments }}>{t("もう一度予約する")}</Link>
            </>
          ) : (
            <Link to={`/mypage/reservation/${reservation.id}/manage`}>{t("予約の変更・キャンセル")}</Link>
          )}
        </div>
      </div>
    </article>
  )
}

export default ReservationHistoryCard

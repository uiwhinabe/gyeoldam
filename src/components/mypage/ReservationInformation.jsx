import { useState } from 'react'
import { mypageReservations } from '../../data/mypageReservations.js'
import { applyDemoReservationOverride, getDemoCreatedReservations } from '../../utils/demoReservations.js'
import ReservationHistoryCard from './ReservationHistoryCard.jsx'

function ReservationGroup({ title, eyebrow, reservations, isPast = false }) {
  return (
    <section className="mypage-reservation-group" aria-labelledby={`mypage-${eyebrow}`}>
      <header>
        <p>{eyebrow}</p>
        <h2 id={`mypage-${eyebrow}`}>{title}</h2>
      </header>
      {reservations.length === 0 ? (
        <p className="mypage-reservation-group__empty">予約情報はありません。</p>
      ) : (
        <div className="mypage-reservation-group__list">
          {reservations.map((reservation) => <ReservationHistoryCard key={reservation.id} reservation={reservation} isPast={isPast} />)}
        </div>
      )}
    </section>
  )
}

function ReservationInformation() {
  const [reservationGroups] = useState(() => {
    const upcomingWithOverrides = [
      ...getDemoCreatedReservations(),
      ...mypageReservations.upcoming,
    ].map(applyDemoReservationOverride)
    return {
      upcoming: upcomingWithOverrides.filter((item) => item.status !== 'キャンセル'),
      past: [
        ...upcomingWithOverrides.filter((item) => item.status === 'キャンセル'),
        ...mypageReservations.past.map(applyDemoReservationOverride),
      ],
    }
  })

  return (
    <>
      <ReservationGroup title="今後の予約" eyebrow="UPCOMING" reservations={reservationGroups.upcoming} />
      <ReservationGroup title="過去の予約・キャンセル" eyebrow="PAST" reservations={reservationGroups.past} isPast />
    </>
  )
}

export default ReservationInformation

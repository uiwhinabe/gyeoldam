import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { mypageReservations } from '../data/mypageReservations.js'
import { applyDemoReservationOverride, getDemoCreatedReservations } from '../utils/demoReservations.js'

const formatWon = (amount) => `${amount.toLocaleString('ja-JP')}ウォン`

function ReservationManagePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [notice, setNotice] = useState('')
  const source = [...getDemoCreatedReservations(), ...mypageReservations.upcoming, ...mypageReservations.past].find((item) => item.id === id)
  const reservation = source ? applyDemoReservationOverride(source) : null

  if (!reservation) return <div className="reservation-manage-empty"><h1>予約情報が見つかりません。</h1><Link to="/mypage">マイページへ戻る</Link></div>

  return (
    <div className="reservation-manage-page">
      <header className="reservation-manage-page__hero"><p>RESERVATION</p><h1>予約の変更・キャンセル</h1></header>
      <div className="container reservation-manage-page__content">
        <section className="reservation-current-card" aria-labelledby="current-reservation-title">
          <p>CURRENT RESERVATION</p><h2 id="current-reservation-title">現在のご予約</h2>
          <dl>
            <div><dt>予約日時</dt><dd>{reservation.date} ({reservation.weekday}) {reservation.time}</dd></div>
            <div><dt>施術</dt><dd>{reservation.treatments.join(' ＋ ')}</dd></div>
            <div><dt>担当者</dt><dd>{reservation.artist}</dd></div>
            <div><dt>金額</dt><dd>{formatWon(reservation.price)}</dd></div>
            <div><dt>予約番号</dt><dd>{reservation.id}</dd></div>
          </dl>
        </section>

        <section className="reservation-manage-menu" aria-label="予約管理メニュー">
          <Link to={`/mypage/reservation/${reservation.id}/change`}><span>日付・時間を変更する</span><b aria-hidden="true">→</b></Link>
          <button type="button" onClick={() => setNotice('メニュー変更画面は準備中です。')}><span>メニューを変更する</span><b aria-hidden="true">→</b></button>
          <Link className="reservation-manage-menu__cancel" to={`/mypage/reservation/${reservation.id}/cancel`}><span>予約をキャンセルする</span><b aria-hidden="true">→</b></Link>
        </section>
        {notice && <p className="reservation-manage-page__notice" role="status">{notice}</p>}
        <button className="reservation-manage-page__back" type="button" onClick={() => navigate(-1)}>← 戻る</button>
      </div>
    </div>
  )
}

export default ReservationManagePage

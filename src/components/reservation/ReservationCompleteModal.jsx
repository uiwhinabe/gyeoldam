import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const formatWon = (amount) => `${amount.toLocaleString('ja-JP')}ウォン`

function ReservationCompleteModal({ reservation, onClose }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!reservation) return undefined
    const previousOverflow = document.body.style.overflow
    const previousFocus = document.activeElement
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      previousFocus?.focus()
    }
  }, [reservation, onClose])

  if (!reservation) return null

  return (
    <div className="reservation-complete" role="dialog" aria-modal="true" aria-labelledby="reservation-complete-title">
      <div className="reservation-complete__panel">
        <button ref={closeButtonRef} className="reservation-complete__close" type="button" aria-label="閉じる" onClick={onClose}>×</button>
        <p className="reservation-complete__eyebrow">RESERVATION COMPLETE</p>
        <h2 id="reservation-complete-title">ご予約を受け付けました。</h2>
        <p className="reservation-complete__number">予約番号 <strong>{reservation.reservationNumber}</strong></p>
        <dl>
          <div><dt>お名前</dt><dd>{reservation.customer.name}</dd></div>
          <div><dt>施術</dt><dd>{reservation.treatments.map((item) => item.name).join('、')}</dd></div>
          <div><dt>予約日時</dt><dd>{reservation.date} {reservation.time}</dd></div>
          <div><dt>合計</dt><dd>{formatWon(reservation.finalAmount)}</dd></div>
        </dl>
        <div className="reservation-complete__actions">
          <button type="button" onClick={onClose}>閉じる</button>
          <Link to="/mypage">マイページの予約情報へ</Link>
        </div>
      </div>
    </div>
  )
}

export default ReservationCompleteModal

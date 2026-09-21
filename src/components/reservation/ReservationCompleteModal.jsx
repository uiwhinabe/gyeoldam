import { useLanguage } from '../../i18n/useLanguage.js'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { formatReservationTotal } from '../../data/treatments.js'

function ReservationCompleteModal({ reservation, onClose }) {
  const { t } = useLanguage()
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
        <button ref={closeButtonRef} className="reservation-complete__close" type="button" aria-label={t("閉じる")} onClick={onClose}>×</button>
        <p className="reservation-complete__eyebrow">{t("RESERVATION COMPLETE")}</p>
        <h2 id="reservation-complete-title">{t("ご予約を受け付けました。")}</h2>
        <p className="reservation-complete__number">{t("予約番号 ")}<strong>{t(reservation.reservationNumber)}</strong></p>
        <dl>
          <div><dt>{t("お名前")}</dt><dd>{reservation.customer.name}</dd></div>
          <div><dt>{t("施術")}</dt><dd>{reservation.treatments.map((item) => t(item.name)).join('、')}</dd></div>
          <div><dt>{t("予約日時")}</dt><dd>{t(reservation.date)} {t(reservation.time)}</dd></div>
          <div><dt>{t("合計")}</dt><dd>{t(formatReservationTotal(reservation.finalAmount, reservation.hasConsultation))}</dd></div>
        </dl>
        <div className="reservation-complete__actions">
          <button type="button" onClick={onClose}>{t("閉じる")}</button>
          <Link to="/mypage" state={{ scrollToUpcoming: true }}>{t("マイページの予約情報へ")}</Link>
        </div>
      </div>
    </div>
  )
}

export default ReservationCompleteModal

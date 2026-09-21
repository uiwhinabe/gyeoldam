import { useLanguage } from '../i18n/useLanguage.js'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import CancelConfirmModal from '../components/mypage/CancelConfirmModal.jsx'
import { mypageReservations } from '../data/mypageReservations.js'
import { applyDemoReservationOverride, getDemoCreatedReservations, saveDemoReservationChange } from '../utils/demoReservations.js'

const cancellationReasons = ['予定が合わなくなった', '体調・個人的な事情', '別の予定が入った', 'その他']

function ReservationCancelPage() {
  const { t } = useLanguage()
  const { id } = useParams()
  const navigate = useNavigate()
  const [reason, setReason] = useState('')
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const source = [...getDemoCreatedReservations(), ...mypageReservations.upcoming].find((item) => item.id === id)
  const reservation = source ? applyDemoReservationOverride(source) : null

  if (!reservation) return <div className="reservation-manage-empty"><h1>{t("予約情報が見つかりません。")}</h1><Link to="/mypage">{t("マイページへ戻る")}</Link></div>

  const confirmCancellation = () => {
    // 실제 서버 취소가 아닌 프로토타입 상태 저장입니다. 실제 예약 취소 API 연결 후 교체하세요.
    saveDemoReservationChange(reservation.id, {
      status: 'キャンセル',
      canceled: true,
      cancellationReason: reason,
      canceledAt: new Date().toISOString(),
    })
    setIsConfirmOpen(false)
    setIsComplete(true)
  }

  if (isComplete) {
    return (
      <div className="reservation-cancel-complete">
        <span aria-hidden="true">✓</span>
        <h1>{t("ご予約をキャンセルしました。")}</h1>
        <p>{t("またのご利用を心よりお待ちしております。")}</p>
        <Link to="/mypage">{t("予約一覧へ戻る")}</Link>
      </div>
    )
  }

  return (
    <div className="reservation-cancel-page">
      <header className="reservation-manage-page__hero"><p>{t("CANCEL RESERVATION")}</p><h1>{t("予約をキャンセル")}</h1></header>
      <div className="container reservation-cancel-page__content">
        <section className="reservation-current-card" aria-labelledby="cancel-reservation-title">
          <p>{t("RESERVATION TO CANCEL")}</p><h2 id="cancel-reservation-title">{t("キャンセルするご予約")}</h2>
          <dl>
            <div><dt>{t("予約日時")}</dt><dd>{t(reservation.date)} ({t(reservation.weekday)}) {t(reservation.time)}</dd></div>
            <div><dt>{t("施術")}</dt><dd>{t(reservation.treatments.join(' ＋ '))}</dd></div>
            <div><dt>{t("担当者")}</dt><dd>{t(reservation.artist)}</dd></div>
            <div><dt>{t("予約番号")}</dt><dd>{t(reservation.id)}</dd></div>
          </dl>
        </section>

        <fieldset className="reservation-cancel-reasons">
          <legend>{t("キャンセル理由を選択してください。")}</legend>
          {cancellationReasons.map((item) => <label key={item}><input type="radio" name="cancel-reason" value={item} checked={reason === item} onChange={(event) => setReason(event.target.value)} /><span>{t(item)}</span></label>)}
        </fieldset>
        <div className="reservation-cancel-page__actions"><button type="button" onClick={() => navigate(-1)}>{t("戻る")}</button><button type="button" disabled={!reason} onClick={() => setIsConfirmOpen(true)}>{t("予約キャンセルを進める")}</button></div>
      </div>
      <CancelConfirmModal isOpen={isConfirmOpen} onClose={() => setIsConfirmOpen(false)} onConfirm={confirmCancellation} />
    </div>
  )
}

export default ReservationCancelPage

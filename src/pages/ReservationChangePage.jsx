import { useLanguage } from '../i18n/useLanguage.js'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReservationCalendar from '../components/reservation/ReservationCalendar.jsx'
import ReservationTimeSelector from '../components/reservation/ReservationTimeSelector.jsx'
import { mypageReservations } from '../data/mypageReservations.js'
import { reservationWeekdays } from '../data/reservationAvailability.js'
import { applyDemoReservationOverride, getDemoCreatedReservations, saveDemoReservationChange } from '../utils/demoReservations.js'

const steps = [
  { number: 1, label: '日付' },
  { number: 2, label: '時間' },
  { number: 3, label: '確認' },
]

function ReservationChangePage() {
  const { t } = useLanguage()
  const { id } = useParams()
  const source = [...getDemoCreatedReservations(), ...mypageReservations.upcoming].find((item) => item.id === id)
  const reservation = source ? applyDemoReservationOverride(source) : null
  const [step, setStep] = useState(1)
  const [displayMonth, setDisplayMonth] = useState(() => {
    const now = new Date()
    return new Date(now.getFullYear(), now.getMonth(), 1)
  })
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)

  if (!reservation) return <div className="reservation-manage-empty"><h1>{t("予約情報が見つかりません。")}</h1><Link to="/mypage">{t("マイページへ戻る")}</Link></div>

  const selectDate = (date) => { setSelectedDate(date); setSelectedTime(null) }
  const completeChange = () => {
    const dateObject = new Date(`${selectedDate}T00:00:00`)
    // TODO: 실제 예약 변경 API 연결 후 prototype localStorage 저장 로직을 교체하세요.
    saveDemoReservationChange(reservation.id, {
      date: selectedDate.replaceAll('-', '.'),
      weekday: reservationWeekdays[dateObject.getDay()],
      time: selectedTime,
    })
    setStep(4)
  }

  return (
    <div className="reservation-change-page">
      <header className="reservation-change-page__hero"><p>{t("CHANGE RESERVATION")}</p><h1>{t("日付・時間を変更")}</h1></header>
      <div className="container reservation-change-page__content">
        {step <= 3 && (
          <ol className="reservation-change-steps" aria-label={t("変更手順")}>
            {steps.map((item) => (
              <li key={item.number} className={`${step === item.number ? 'reservation-change-steps__current ' : ''}${step > item.number ? 'reservation-change-steps__complete' : ''}`} aria-current={step === item.number ? 'step' : undefined}>
                <span>{t(step > item.number ? '✓' : item.number)}</span><b>{t(item.label)}</b>
              </li>
            ))}
          </ol>
        )}

        {step === 1 && (
          <section className="reservation-change-stage">
            <ReservationCalendar displayMonth={displayMonth} selectedDate={selectedDate} onMonthChange={setDisplayMonth} onDateSelect={selectDate} />
            <div className="reservation-change-stage__actions"><Link to={`/mypage/reservation/${id}/manage`}>{t("戻る")}</Link><button type="button" disabled={!selectedDate} onClick={() => setStep(2)}>{t("次へ")}</button></div>
          </section>
        )}

        {step === 2 && (
          <section className="reservation-change-stage">
            <ReservationTimeSelector selectedDate={selectedDate} selectedTime={selectedTime} onTimeSelect={setSelectedTime} />
            <div className="reservation-change-stage__actions"><button type="button" onClick={() => setStep(1)}>{t("戻る")}</button><button type="button" disabled={!selectedTime} onClick={() => setStep(3)}>{t("次へ")}</button></div>
          </section>
        )}

        {step === 3 && (
          <section className="reservation-change-confirm" aria-labelledby="change-confirm-title">
            <h2 id="change-confirm-title">{t("変更内容をご確認ください。")}</h2>
            <div><span>{t("現在の予約")}</span><strong>{t(reservation.date)} {t(reservation.time)}</strong></div>
            <div className="reservation-change-confirm__new"><span>{t("変更後")}</span><strong>{t(selectedDate.replaceAll('-', '.'))} {t(selectedTime)}</strong></div>
            <p>{t(reservation.treatments.join(' ＋ '))}</p>
            <div className="reservation-change-stage__actions"><button type="button" onClick={() => setStep(2)}>{t("戻る")}</button><button type="button" onClick={completeChange}>{t("変更する")}</button></div>
          </section>
        )}

        {step === 4 && (
          <section className="reservation-change-complete">
            <span aria-hidden="true">✓</span><h2>{t("変更完了")}</h2><p>{t("ご予約内容を変更しました。")}</p>
            <Link to="/mypage">{t("予約一覧へ戻る")}</Link>
          </section>
        )}
      </div>
    </div>
  )
}

export default ReservationChangePage

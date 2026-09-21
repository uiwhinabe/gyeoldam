import { useLanguage } from '../../i18n/useLanguage.js'
import { exampleUnavailableTimesByWeekday, reservationTimes } from '../../data/reservationAvailability.js'

function ReservationTimeSelector({ selectedDate, selectedTime, onTimeSelect }) {
  const { t } = useLanguage()
  const weekday = selectedDate ? new Date(`${selectedDate}T00:00:00`).getDay() : null
  const unavailableTimes = weekday === null ? [] : (exampleUnavailableTimesByWeekday[weekday] || [])

  return (
    <section className={`reservation-time${selectedDate ? '' : ' reservation-time--disabled'}`} aria-labelledby="time-title">
      <div className="reservation-time__header">
        <p>{t("AVAILABLE TIME")}</p>
        <h2 id="time-title">{t("時間を選択")}</h2>
        <span>{t(selectedDate || '日付を先に選択してください。')}</span>
      </div>
      <div className="reservation-time__grid">
        {reservationTimes.map((time) => {
          const isUnavailable = !selectedDate || unavailableTimes.includes(time)
          const isSelected = selectedTime === time
          return (
            <button
              key={time}
              type="button"
              disabled={isUnavailable}
              aria-pressed={isSelected}
              onClick={() => onTimeSelect(time)}
            >
              {t(time)}
            </button>
          )
        })}
      </div>
      <div className="reservation-time__legend" aria-hidden="true">
        <span>{t("○ 予約可能")}</span><span>{t("● 選択中")}</span><span>{t("× 予約不可")}</span>
      </div>
    </section>
  )
}

export default ReservationTimeSelector

import { exampleUnavailableTimesByWeekday, reservationTimes } from '../../data/reservationAvailability.js'

function ReservationTimeSelector({ selectedDate, selectedTime, onTimeSelect }) {
  const weekday = selectedDate ? new Date(`${selectedDate}T00:00:00`).getDay() : null
  const unavailableTimes = weekday === null ? [] : (exampleUnavailableTimesByWeekday[weekday] || [])

  return (
    <section className={`reservation-time${selectedDate ? '' : ' reservation-time--disabled'}`} aria-labelledby="time-title">
      <div className="reservation-time__header">
        <p>AVAILABLE TIME</p>
        <h2 id="time-title">時間を選択</h2>
        <span>{selectedDate || '日付を先に選択してください。'}</span>
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
              {time}
            </button>
          )
        })}
      </div>
      <div className="reservation-time__legend" aria-hidden="true">
        <span>○ 予約可能</span><span>● 選択中</span><span>× 予約不可</span>
      </div>
    </section>
  )
}

export default ReservationTimeSelector

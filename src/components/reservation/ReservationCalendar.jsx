import { useLanguage } from '../../i18n/useLanguage.js'
import { exampleUnavailableDates, reservationWeekdays, toLocalISO } from '../../data/reservationAvailability.js'

const sameMonth = (left, right) => left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth()

function ReservationCalendar({ displayMonth, selectedDate, onMonthChange, onDateSelect }) {
  const { t, language, locale } = useLanguage()
  const year = displayMonth.getFullYear()
  const month = displayMonth.getMonth()
  const firstDayIndex = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const isCurrentMonth = sameMonth(displayMonth, today)

  const moveMonth = (offset) => onMonthChange(new Date(year, month + offset, 1))

  return (
    <section className="reservation-calendar" aria-labelledby="calendar-title">
      <div className="reservation-calendar__header">
        <button type="button" onClick={() => moveMonth(-1)} disabled={isCurrentMonth} aria-label={t("前の月")}>←</button>
        <h2 id="calendar-title">{language === 'JP' ? `${year}年 ${String(month + 1).padStart(2, '0')}月` : new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long' }).format(displayMonth)}</h2>
        <button type="button" onClick={() => moveMonth(1)} aria-label={t("次の月")}>→</button>
      </div>

      <div className="reservation-calendar__weekdays" aria-hidden="true">
        {reservationWeekdays.map((weekday) => <span key={weekday}>{t(weekday)}</span>)}
      </div>

      <div className="reservation-calendar__days">
        {Array.from({ length: firstDayIndex }, (_, index) => <span key={`empty-${index}`} aria-hidden="true" />)}
        {Array.from({ length: daysInMonth }, (_, index) => {
          const day = index + 1
          const date = new Date(year, month, day)
          const dateISO = toLocalISO(date)
          const isPast = date < today
          const isSunday = date.getDay() === 0
          const isHoliday = exampleUnavailableDates.includes(dateISO)
          const isDisabled = isPast || isSunday || isHoliday
          const isSelected = selectedDate === dateISO

          return (
            <button
              key={dateISO}
              className={`${isSunday || isHoliday ? 'reservation-calendar__holiday ' : ''}${isSelected ? 'reservation-calendar__day--selected' : ''}`}
              type="button"
              disabled={isDisabled}
              aria-pressed={isSelected}
              aria-label={`${language === 'JP' ? `${year}年${month + 1}月${day}日` : new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(date)}${isDisabled ? t(' 予約不可') : ''}`}
              onClick={() => onDateSelect(dateISO)}
            >
              {t(day)}
            </button>
          )
        })}
      </div>
      <p className="reservation-calendar__note"><span aria-hidden="true" />{t(" 予約不可・休業日")}</p>
    </section>
  )
}

export default ReservationCalendar

import ReservationCalendar from './ReservationCalendar.jsx'
import ReservationTimeSelector from './ReservationTimeSelector.jsx'

function ReservationSchedule(props) {
  return (
    <section className="reservation-schedule" aria-labelledby="reservation-schedule-title">
      <div className="container">
        <header className="reservation-schedule__heading">
          <p>STEP 02</p>
          <h2 id="reservation-schedule-title">日時を選択</h2>
        </header>
        <div className="reservation-schedule__layout">
          <ReservationCalendar {...props} />
          <ReservationTimeSelector
            selectedDate={props.selectedDate}
            selectedTime={props.selectedTime}
            onTimeSelect={props.onTimeSelect}
          />
        </div>
        {/* TODO: 실제 예약 가능 날짜와 시간 데이터를 서버 응답으로 교체 */}
      </div>
    </section>
  )
}

export default ReservationSchedule

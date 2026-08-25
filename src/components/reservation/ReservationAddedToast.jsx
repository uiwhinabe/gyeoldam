function ReservationAddedToast({ isVisible, onNavigate }) {
  if (!isVisible) return null

  return (
    <div className="reservation-added-toast" role="status" aria-live="polite">
      <span className="reservation-added-toast__check" aria-hidden="true">✓</span>
      <p>予約リストに追加しました</p>
      {/* TODO: 예약 목록 단계 구현 후 해당 화면으로 이동하도록 연결 */}
      <button type="button" onClick={onNavigate}>予約リストへ <span aria-hidden="true">›</span></button>
    </div>
  )
}

export default ReservationAddedToast

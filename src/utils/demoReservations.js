const STORAGE_KEY = 'gyeoldam-demo-reservation-overrides'
const CREATED_STORAGE_KEY = 'gyeoldam-demo-created-reservations'

export const getDemoReservationOverrides = () => {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

export const applyDemoReservationOverride = (reservation) => ({
  ...reservation,
  ...(getDemoReservationOverrides()[reservation.id] || {}),
})

export const saveDemoReservationChange = (reservationId, changes) => {
  const overrides = getDemoReservationOverrides()
  // 프로토타입 새로고침 확인용 저장소이며 실제 보안 저장소가 아닙니다.
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
    ...overrides,
    [reservationId]: { ...(overrides[reservationId] || {}), ...changes },
  }))
}

export const getDemoCreatedReservations = () => {
  try {
    return JSON.parse(window.localStorage.getItem(CREATED_STORAGE_KEY) || '[]')
  } catch {
    return []
  }
}

export const saveDemoCreatedReservation = (reservation) => {
  const current = getDemoCreatedReservations()
  if (current.some((item) => item.id === reservation.id)) return
  // 프로토타입 마이페이지 확인용 저장이며 실제 예약 서버나 보안 저장소가 아닙니다.
  window.localStorage.setItem(CREATED_STORAGE_KEY, JSON.stringify([reservation, ...current]))
}

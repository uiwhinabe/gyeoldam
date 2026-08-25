const toLocalISO = (date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const dateFromToday = (offset) => {
  const date = new Date()
  date.setHours(0, 0, 0, 0)
  date.setDate(date.getDate() + offset)
  return toLocalISO(date)
}

export const reservationWeekdays = ['日', '月', '火', '水', '木', '金', '土']

export const reservationTimes = [
  '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
  '16:00', '17:00', '18:00', '19:00', '20:00',
]

// 실제 서버 연결 전 사용하는 예시 휴무일입니다.
export const exampleUnavailableDates = [dateFromToday(2), dateFromToday(8), dateFromToday(15)]

// 요일별 예시 마감 시간이며, 추후 날짜별 서버 응답으로 교체합니다.
export const exampleUnavailableTimesByWeekday = {
  1: ['10:00', '13:00'],
  2: ['12:00', '17:00', '20:00'],
  3: ['11:00', '15:00'],
  4: ['10:00', '14:00', '18:00'],
  5: ['13:00', '16:00', '19:00'],
  6: ['12:00', '17:00'],
}

export { toLocalISO }

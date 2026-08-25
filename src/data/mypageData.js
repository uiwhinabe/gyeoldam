export const treatmentHistory = [
  {
    id: 'treatment-20260703', date: '2026.07.03', status: '施術完了', name: 'ナチュラルエンボ',
    artist: 'YUNA', price: 350000, duration: '約 2時間', canceled: false,
    beforeImage: null, beforeAlt: '眉施術前の写真', afterImage: null, afterAlt: '眉施術後の写真',
  },
  {
    id: 'treatment-20260318', date: '2026.03.18', status: '施術完了', name: 'フルリップ',
    artist: 'MINA', price: 450000, duration: '約 2時間30分', canceled: false,
    beforeImage: null, beforeAlt: 'リップ施術前の写真', afterImage: null, afterAlt: 'リップ施術後の写真',
  },
  {
    id: 'treatment-20260122', date: '2026.01.22', status: 'キャンセル', name: 'デザインアイライン',
    artist: 'SORA', price: 0, duration: '—', canceled: true,
    beforeImage: null, beforeAlt: '', afterImage: null, afterAlt: '',
  },
]

export const initialMemberProfile = {
  name: '山田 花子',
  birthDate: '1995-04-18',
  phone: '090-1234-5678',
  email: 'hanako@example.com',
}

export const initialNotificationSettings = [
  { id: 'reservation', label: '予約関連のお知らせ', description: '予約の確定・変更・キャンセルをお知らせします。', enabled: true },
  { id: 'reminder', label: '予約前日のお知らせ', description: 'ご予約日の前日にリマインドを送ります。', enabled: true },
  { id: 'campaign', label: 'キャンペーン・イベント情報', description: '限定キャンペーンやイベント情報をお届けします。', enabled: false },
  { id: 'email', label: 'メール', description: '登録メールアドレスで通知を受け取ります。', enabled: true },
  { id: 'line', label: 'LINE', description: '連携したLINEアカウントで通知を受け取ります。', enabled: false },
]

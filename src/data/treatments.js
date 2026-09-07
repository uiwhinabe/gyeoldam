const createTreatment = (treatment) => treatment
const reservationImage = (fileName) => `${import.meta.env.BASE_URL}images/reservation/treatments/${fileName}`

export const treatments = [
  createTreatment({
    id: 'natural-embroidery', name: 'ナチュラルエンボ', price: 200000, directorSurcharge: 200000, priceType: 'fixed',
    description: '毛流れを一本ずつ繊細に描き、素顔にもなじむ自然な眉に仕上げます。',
    image: `${import.meta.env.BASE_URL}images/treatment/brow-01.png`, imageAlt: 'ナチュラルエンボ施術例',
    reservationImage: reservationImage('natural-embroidery.png'), reservationImageAlt: '予約カード用ナチュラルエンボ施術イメージ',
  }),
  createTreatment({
    id: 'soft-shadow', name: 'ソフトシャドウ', price: 250000, directorSurcharge: 200000, priceType: 'fixed',
    description: 'パウダーで描いたような柔らかなグラデーションで、上品な印象をつくります。',
    image: `${import.meta.env.BASE_URL}images/treatment/brow-02.png`, imageAlt: 'ソフトシャドウ施術例',
    reservationImage: reservationImage('soft-shadow.png'), reservationImageAlt: '予約カード用ソフトシャドウ施術イメージ',
  }),
  createTreatment({
    id: 'combo', name: 'コンボ', price: 200000, directorSurcharge: 200000, priceType: 'fixed',
    description: '毛並みとシャドウを組み合わせ、立体感と自然な密度を両立します。',
    image: `${import.meta.env.BASE_URL}images/treatment/brow-03.png`, imageAlt: 'コンボ施術例',
    reservationImage: reservationImage('combo.png'), reservationImageAlt: '予約カード用コンボ施術イメージ',
  }),
  createTreatment({
    id: 'gradation-lip', name: 'グラデーションリップ', price: 300000, directorSurcharge: 200000, priceType: 'fixed',
    description: '内側からにじむような色合いで、透明感のある自然な唇を表現します。',
    image: `${import.meta.env.BASE_URL}images/treatment/lip-01.png`, imageAlt: 'グラデーションリップ施術例',
    reservationImage: reservationImage('gradation-lip.png'), reservationImageAlt: '予約カード用グラデーションリップ施術イメージ',
  }),
  createTreatment({
    id: 'full-lip', name: 'フルリップ', price: 300000, directorSurcharge: 200000, priceType: 'fixed',
    description: '輪郭と色むらを整え、唇全体を均一で健康的なカラーに仕上げます。',
    image: `${import.meta.env.BASE_URL}images/treatment/lip-02.png`, imageAlt: 'フルリップ施術例',
    reservationImage: reservationImage('full-lip.png'), reservationImageAlt: '予約カード用フルリップ施術イメージ',
  }),
  createTreatment({
    id: 'natural-slim-eyeline', name: 'ナチュラルスリムアイライン', price: 300000, directorSurcharge: 200000, priceType: 'fixed',
    description: 'まつげの隙間を自然に埋め、目元をさりげなくはっきり見せます。',
    image: `${import.meta.env.BASE_URL}images/treatment/eyeline-01.png`, imageAlt: 'ナチュラルスリムアイライン施術例',
    reservationImage: reservationImage('natural-slim-eyeline.png'), reservationImageAlt: '予約カード用ナチュラルスリムアイライン施術イメージ',
  }),
  createTreatment({
    id: 'design-eyeline', name: 'デザインアイライン', price: 300000, directorSurcharge: 200000, priceType: 'fixed',
    description: '目の形とご希望に合わせ、長さや角度を調整したラインをデザインします。',
    image: `${import.meta.env.BASE_URL}images/treatment/eyeline-02.png`, imageAlt: 'デザインアイライン施術例',
    reservationImage: reservationImage('design-eyeline.png'), reservationImageAlt: '予約カード用デザインアイライン施術イメージ',
  }),
  createTreatment({
    id: 'hairline', name: 'ヘアライン', price: 300000, directorSurcharge: 200000, priceType: 'fixed',
    description: '生え際の形を整え、顔まわりを自然に見せる繊細な毛流れを描きます。',
    image: `${import.meta.env.BASE_URL}images/treatment/hairline-01.png`, imageAlt: 'ヘアライン施術例',
    reservationImage: null, reservationImageAlt: 'ヘアライン予約カード用画像',
  }),
  createTreatment({
    id: 'smp', name: 'SMP', price: null, directorSurcharge: 0, priceType: 'consultation',
    description: '頭皮に微細なドットを施し、髪の密度を自然に補って見せる施術です。',
    image: `${import.meta.env.BASE_URL}images/treatment/smp-01.png`, imageAlt: 'SMP施術例',
    reservationImage: null, reservationImageAlt: 'SMP予約カード用画像',
  }),
  createTreatment({
    id: 'removal', name: '除去', price: 100000, directorSurcharge: 0, priceType: 'fixed', pricePrefix: '1回',
    description: '既存の色や形を確認し、お肌の状態に合わせた除去方法をご案内します。',
    image: `${import.meta.env.BASE_URL}images/treatment/removal-01.png`, imageAlt: '除去施術例',
    reservationImage: null, reservationImageAlt: '除去予約カード用画像',
  }),
  createTreatment({
    id: 'beauty-mark', name: 'ほくろアートメイク', price: 40000, directorSurcharge: 0, priceType: 'fixed',
    description: 'お顔とのバランスを見ながら、自然なポイントになるほくろをデザインします。',
    image: `${import.meta.env.BASE_URL}images/treatment/removal-02.png`, imageAlt: 'ほくろアートメイク施術例',
    reservationImage: null, reservationImageAlt: 'ほくろアートメイク予約カード用画像',
  }),
  createTreatment({
    id: 'lash-perm', name: 'まつ毛パーマ', price: 50000, directorSurcharge: 0, priceType: 'fixed',
    description: '目元に合わせたカールで、毎日のメイクがしやすいまつ毛に整えます。',
    image: `${import.meta.env.BASE_URL}images/treatment/removal-03.png`, imageAlt: 'まつ毛パーマ施術例',
    reservationImage: null, reservationImageAlt: 'まつ毛パーマ予約カード用画像',
  }),
]

const treatmentsById = Object.fromEntries(treatments.map((treatment) => [treatment.id, treatment]))
const legacyTreatmentNames = {
  'コンボ眉': 'combo',
  'ヘアラインアートメイク': 'hairline',
  'アートメイク除去': 'removal',
  'まつげパーマ': 'lash-perm',
}

export const getTreatmentById = (id) => treatmentsById[id] || null
export const getTreatmentByName = (name) => treatments.find((treatment) => treatment.name === name) || treatmentsById[legacyTreatmentNames[name]] || null

export const formatWon = (amount) => `${Number(amount).toLocaleString('ja-JP')}ウォン`

export const formatTreatmentPrice = (treatment) => {
  if (treatment.priceType === 'consultation') return 'カウンセリング後決定'
  return [treatment.pricePrefix, formatWon(treatment.price)].filter(Boolean).join(' ')
}

export const formatDirectorSurcharge = (treatment) => (
  treatment.directorSurcharge > 0 ? `＋${formatWon(treatment.directorSurcharge)}` : '追加料金なし'
)

export const getReservationTotals = (items) => {
  const treatmentTotal = items.reduce((sum, item) => sum + (typeof item.price === 'number' ? item.price : 0), 0)
  const directorFeeTotal = items.reduce((sum, item) => sum + (Number(item.additionalFee) || 0), 0)
  return {
    treatmentTotal,
    directorFeeTotal,
    finalAmount: treatmentTotal + directorFeeTotal,
    hasConsultation: items.some((item) => item.priceType === 'consultation' || item.price == null),
  }
}

export const formatReservationTotal = (amount, hasConsultation = false) => {
  if (!hasConsultation) return formatWon(amount)
  return amount > 0 ? `${formatWon(amount)} ＋ SMP カウンセリング後決定` : 'カウンセリング後決定'
}

export const treatmentCategories = [
  { id: 'brow', tabLabel: '眉', title: '眉アートメイク', items: ['natural-embroidery', 'soft-shadow', 'combo'].map((id) => treatmentsById[id]) },
  { id: 'lip', tabLabel: 'リップ', title: 'リップアートメイク', items: ['gradation-lip', 'full-lip'].map((id) => treatmentsById[id]) },
  { id: 'eyeline', tabLabel: 'アイライン', title: 'アイライン', items: ['natural-slim-eyeline', 'design-eyeline'].map((id) => treatmentsById[id]) },
  { id: 'hairline', tabLabel: 'ヘアライン', title: 'ヘアライン', items: [treatmentsById.hairline] },
  { id: 'smp', tabLabel: 'SMP', title: 'SMP', items: [treatmentsById.smp] },
  { id: 'removal', tabLabel: 'その他', title: 'その他のメニュー', items: ['removal', 'beauty-mark', 'lash-perm'].map((id) => treatmentsById[id]) },
]

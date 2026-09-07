import { useMemo, useState } from 'react'
import { reservationWeekdays } from '../../data/reservationAvailability.js'
import { getReservationTotals } from '../../data/treatments.js'
import { saveDemoCreatedReservation } from '../../utils/demoReservations.js'
import ReservationCompleteModal from './ReservationCompleteModal.jsx'

const initialFields = { name: '', email: '', countryCode: '+81', phone: '', lineId: '', requests: '' }
const initialAgreements = { privacy: false, cancellation: false, marketing: false }

const validateFields = (fields) => {
  const errors = {}
  if (!fields.name.trim()) errors.name = 'お名前を入力してください。'
  if (!fields.email.trim()) errors.email = 'メールアドレスを入力してください。'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = '正しいメールアドレスを入力してください。'
  if (!fields.phone.trim()) errors.phone = '電話番号を入力してください。'
  else if (!/^[0-9+\-()\s]{8,20}$/.test(fields.phone)) errors.phone = '正しい電話番号を入力してください。'
  return errors
}

function ReservationForm({ treatments, selectedDate, selectedTime }) {
  const [fields, setFields] = useState(initialFields)
  const [agreements, setAgreements] = useState(initialAgreements)
  const [touched, setTouched] = useState({})
  const [agreementTouched, setAgreementTouched] = useState(false)
  const [completedReservation, setCompletedReservation] = useState(null)

  const errors = useMemo(() => validateFields(fields), [fields])
  const allAgreed = Object.values(agreements).every(Boolean)
  const requiredAgreed = agreements.privacy && agreements.cancellation
  const prerequisitesReady = treatments.length > 0 && Boolean(selectedDate) && Boolean(selectedTime)
  const canSubmit = prerequisitesReady && Object.keys(errors).length === 0 && requiredAgreed

  const updateField = (event) => {
    const { name, value } = event.target
    setFields((current) => ({ ...current, [name]: value }))
  }

  const updateAgreement = (name, checked) => {
    setAgreements((current) => ({ ...current, [name]: checked }))
    setAgreementTouched(true)
  }

  const toggleAll = (checked) => {
    setAgreements({ privacy: checked, cancellation: checked, marketing: checked })
    setAgreementTouched(true)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setTouched({ name: true, email: true, phone: true })
    setAgreementTouched(true)
    if (!canSubmit) return

    const now = new Date()
    const datePart = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`
    const { finalAmount, hasConsultation } = getReservationTotals(treatments)
    const reservationDate = new Date(`${selectedDate}T00:00:00`)
    const reservationNumber = `GYE-${datePart}-${String(now.getTime()).slice(-4)}`

    // TODO: 실제 예약 API 연결 후 임시 저장 로직을 교체하세요.
    const temporaryReservation = {
      reservationNumber,
      createdAt: now.toISOString(),
      treatments: treatments.map((item) => ({ ...item })),
      date: selectedDate.replaceAll('-', '.'),
      time: selectedTime,
      customer: { ...fields },
      agreements: { ...agreements },
      finalAmount,
      hasConsultation,
      prototypeOnly: true,
    }
    saveDemoCreatedReservation({
      id: reservationNumber,
      date: temporaryReservation.date,
      weekday: reservationWeekdays[reservationDate.getDay()],
      time: selectedTime,
      status: '予約確定',
      treatments: treatments.map((item) => item.name),
      treatmentDetails: treatments.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        priceType: item.priceType,
        directorSurcharge: item.directorSurcharge,
        directorSelected: item.directorSelected,
        additionalFee: item.additionalFee,
        finalAmount: item.finalAmount,
      })),
      artist: treatments.some((item) => item.directorSelected) ? 'KIM GYEOL 院長' : '指名なし',
      price: finalAmount,
      hasConsultation,
      duration: '所要時間は確認中',
      prototypeOnly: true,
    })
    setCompletedReservation(temporaryReservation)
  }

  const field = (name, label, type = 'text', required = false) => {
    const error = touched[name] ? errors[name] : null
    const errorId = `${name}-error`
    return (
      <label className={`reservation-form__field${error ? ' reservation-form__field--error' : ''}`}>
        <span>{label}{required && <b>必須</b>}</span>
        <input
          type={type}
          name={name}
          value={fields[name]}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          onChange={updateField}
          onBlur={() => setTouched((current) => ({ ...current, [name]: true }))}
        />
        {error && <small id={errorId}>{error}</small>}
      </label>
    )
  }

  return (
    <section className="reservation-form-section" aria-labelledby="reservation-form-title">
      <div className="container">
        <header className="reservation-form-section__heading">
          <p>STEP 03</p>
          <h2 id="reservation-form-title">予約者情報</h2>
        </header>

        <form className="reservation-form" noValidate onSubmit={handleSubmit}>
          <div className="reservation-form__fields">
            {field('name', 'お名前', 'text', true)}
            {field('email', 'メールアドレス', 'email', true)}
            <label className={`reservation-form__field${touched.phone && errors.phone ? ' reservation-form__field--error' : ''}`}>
              <span>電話番号<b>必須</b></span>
              <div className="reservation-form__phone">
                <select
                  name="countryCode"
                  value={fields.countryCode}
                  aria-label="国番号"
                  onChange={updateField}
                >
                  <option value="+81">日本 +81</option>
                  <option value="+82">韓国 +82</option>
                  <option value="+1">アメリカ +1</option>
                  <option value="+86">中国 +86</option>
                  <option value="+886">台湾 +886</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={fields.phone}
                  required
                  inputMode="tel"
                  placeholder="90-1234-5678"
                  aria-invalid={Boolean(touched.phone && errors.phone)}
                  aria-describedby={touched.phone && errors.phone ? 'phone-error' : undefined}
                  onChange={updateField}
                  onBlur={() => setTouched((current) => ({ ...current, phone: true }))}
                />
              </div>
              {touched.phone && errors.phone && <small id="phone-error">{errors.phone}</small>}
            </label>
            {field('lineId', 'LINE ID（任意）')}
            <label className="reservation-form__field reservation-form__field--wide">
              <span>お問い合わせ・ご要望</span>
              <textarea name="requests" rows="5" value={fields.requests} onChange={updateField} />
            </label>
          </div>

          <fieldset className="reservation-agreements">
            <legend>同意事項</legend>
            <label className="reservation-agreements__all"><input type="checkbox" checked={allAgreed} onChange={(event) => toggleAll(event.target.checked)} /><span>すべてに同意する</span></label>
            <label><input type="checkbox" checked={agreements.privacy} onChange={(event) => updateAgreement('privacy', event.target.checked)} /><span><b>必須</b> 個人情報の取り扱いに同意する</span></label>
            <label><input type="checkbox" checked={agreements.cancellation} onChange={(event) => updateAgreement('cancellation', event.target.checked)} /><span><b>必須</b> 予約・キャンセル規定に同意する</span></label>
            <label><input type="checkbox" checked={agreements.marketing} onChange={(event) => updateAgreement('marketing', event.target.checked)} /><span><i>任意</i> キャンペーン・マーケティング通知を受け取る</span></label>
            {agreementTouched && !requiredAgreed && <small>必須の同意事項を確認してください。</small>}
          </fieldset>

          {!prerequisitesReady && <p className="reservation-form__prerequisite">施術・予約日・予約時間をすべて選択してください。</p>}
          <button className="primary-button reservation-form__submit" type="submit" disabled={!canSubmit}>予約を申し込む</button>
          <p className="reservation-form__prototype">※ 現在はプロトタイプのため、実際の予約・決済は行われません。</p>
        </form>
      </div>

      <ReservationCompleteModal reservation={completedReservation} onClose={() => setCompletedReservation(null)} />
    </section>
  )
}

export default ReservationForm

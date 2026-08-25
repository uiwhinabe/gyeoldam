import { useState } from 'react'
import { initialMemberProfile } from '../../data/mypageData.js'

const validate = (profile) => {
  const errors = {}
  if (!profile.name.trim()) errors.name = 'お名前を入力してください。'
  if (!profile.birthDate) errors.birthDate = '生年月日を入力してください。'
  if (!/^[0-9+\-()\s]{8,20}$/.test(profile.phone)) errors.phone = '正しい電話番号を入力してください。'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) errors.email = '正しいメールアドレスを入力してください。'
  return errors
}

function MemberProfile() {
  const [profile, setProfile] = useState(initialMemberProfile)
  const [draft, setDraft] = useState(initialMemberProfile)
  const [isEditing, setIsEditing] = useState(false)
  const [errors, setErrors] = useState({})

  const startEditing = () => { setDraft(profile); setErrors({}); setIsEditing(true) }
  const cancelEditing = () => { setDraft(profile); setErrors({}); setIsEditing(false) }
  const saveProfile = (event) => {
    event.preventDefault()
    const nextErrors = validate(draft)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    // TODO: 실제 회원정보 수정 API 연결
    setProfile({ ...draft })
    setIsEditing(false)
  }

  const updateDraft = (event) => setDraft((current) => ({ ...current, [event.target.name]: event.target.value }))
  const fields = [
    { name: 'name', label: 'お名前', type: 'text' },
    { name: 'birthDate', label: '生年月日', type: 'date' },
    { name: 'phone', label: '電話番号', type: 'tel' },
    { name: 'email', label: 'メールアドレス', type: 'email' },
  ]

  return (
    <section className="mypage-detail-section" aria-labelledby="member-profile-title">
      <header className="mypage-detail-section__header"><p>MEMBER PROFILE</p><h2 id="member-profile-title">会員情報</h2></header>
      {isEditing ? (
        <form className="member-profile-form" noValidate onSubmit={saveProfile}>
          {fields.map(({ name, label, type }) => (
            <label key={name} className={errors[name] ? 'member-profile-form__error' : ''}>
              <span>{label}</span>
              <input type={type} name={name} value={draft[name]} aria-invalid={Boolean(errors[name])} onChange={updateDraft} />
              {errors[name] && <small>{errors[name]}</small>}
            </label>
          ))}
          <div className="mypage-form-actions"><button type="button" onClick={cancelEditing}>キャンセル</button><button type="submit">保存する</button></div>
        </form>
      ) : (
        <div className="member-profile-view">
          <dl>{fields.map(({ name, label }) => <div key={name}><dt>{label}</dt><dd>{profile[name]}</dd></div>)}</dl>
          <button type="button" onClick={startEditing}>会員情報を変更</button>
        </div>
      )}
    </section>
  )
}

export default MemberProfile

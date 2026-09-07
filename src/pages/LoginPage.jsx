import { useState } from 'react'
import { Link } from 'react-router-dom'

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [touched, setTouched] = useState({ email: false, password: false })
  const [authError, setAuthError] = useState('')
  const [statusMessage, setStatusMessage] = useState('')

  const emailError = touched.email && !email
    ? 'メールアドレスを入力してください。'
    : touched.email && !isValidEmail(email)
      ? '正しいメールアドレスを入力してください。'
      : ''
  const passwordError = touched.password && !password
    ? 'パスワードを入力してください。'
    : ''
  const canSubmit = Boolean(email && password && isValidEmail(email))

  const handleSubmit = (event) => {
    event.preventDefault()
    setTouched({ email: true, password: true })
    setAuthError('')
    setStatusMessage('')
    if (!canSubmit) return

    // TODO: 실제 로그인 API 연결 시 임시 검증 로직을 교체하세요.
    // 프로토타입 비교값은 코드에 노출하지 않고 선택적인 로컬 환경 변수로만 주입합니다.
    const demoEmail = import.meta.env.VITE_DEMO_LOGIN_EMAIL
    const demoPassword = import.meta.env.VITE_DEMO_LOGIN_PASSWORD
    const isDemoMatch = Boolean(demoEmail && demoPassword && email === demoEmail && password === demoPassword)

    if (!isDemoMatch) {
      setAuthError('メールアドレスまたはパスワードが正しくありません。')
      return
    }

    setStatusMessage('プロトタイプのログイン状態を確認しました。')
  }

  const updateEmail = (event) => {
    setEmail(event.target.value)
    setAuthError('')
    setStatusMessage('')
  }

  const updatePassword = (event) => {
    setPassword(event.target.value)
    setAuthError('')
    setStatusMessage('')
  }

  return (
    <div className="login-page">
      <main className="login-page__content">
        <div className="login-panel">
          <header><p>MEMBER</p><h1>LOGIN</h1><span>ログインしてご予約情報をご確認いただけます。</span></header>

          <form className="login-form" noValidate onSubmit={handleSubmit}>
            <label className={`login-form__field${emailError ? ' login-form__field--error' : ''}`}>
              <span>メールアドレス</span>
              <input
                type="email"
                name="email"
                value={email}
                autoComplete="email"
                inputMode="email"
                aria-invalid={Boolean(emailError)}
                aria-describedby="login-email-error"
                onChange={updateEmail}
                onBlur={() => setTouched((current) => ({ ...current, email: true }))}
              />
              <small id="login-email-error">{emailError || '\u00a0'}</small>
            </label>

            <label className={`login-form__field${passwordError ? ' login-form__field--error' : ''}`}>
              <span>パスワード</span>
              <div className="login-form__password">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={password}
                  autoComplete="current-password"
                  aria-invalid={Boolean(passwordError)}
                  aria-describedby="login-password-error"
                  onChange={updatePassword}
                  onBlur={() => setTouched((current) => ({ ...current, password: true }))}
                />
                <button
                  type="button"
                  aria-label={showPassword ? 'パスワードを非表示にする' : 'パスワードを表示する'}
                  aria-pressed={showPassword}
                  onClick={() => setShowPassword((visible) => !visible)}
                >
                  {showPassword ? '非表示' : '表示'}
                </button>
              </div>
              <small id="login-password-error">{passwordError || '\u00a0'}</small>
            </label>

            <div className="login-form__options">
              <label><input type="checkbox" checked={rememberMe} onChange={(event) => setRememberMe(event.target.checked)} /><span>ログイン状態を保持する</span></label>
              <Link to="/forgot-password">パスワードをお忘れの方</Link>
            </div>

            <div className={`login-form__auth-message${statusMessage ? ' login-form__auth-message--success' : ''}`} role="alert">{authError || statusMessage || '\u00a0'}</div>
            <button className="primary-button login-form__submit" type="submit" disabled={!canSubmit}>ログイン</button>
          </form>

          <div className="login-panel__divider"><span>OR</span></div>
          <div className="login-panel__join"><p>まだ会員登録がお済みでない方</p><Link to="/join">新規会員登録</Link></div>
        </div>
      </main>
    </div>
  )
}

export default LoginPage

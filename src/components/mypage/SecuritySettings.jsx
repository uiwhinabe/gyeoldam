import { useState } from 'react'

function SecuritySettings() {
  const [isPasswordOpen, setIsPasswordOpen] = useState(false)
  const [passwords, setPasswords] = useState({ current: '', next: '', confirm: '' })
  const [message, setMessage] = useState('')

  const changePassword = (event) => {
    event.preventDefault()
    if (passwords.next.length < 8) { setMessage('新しいパスワードは8文字以上で入力してください。'); return }
    if (passwords.next !== passwords.confirm) { setMessage('新しいパスワードが一致しません。'); return }
    // TODO: 실제 비밀번호 변경 인증 API 연결
    setPasswords({ current: '', next: '', confirm: '' })
    setMessage('プロトタイプ上でパスワードを変更しました。')
    setIsPasswordOpen(false)
  }

  const logout = () => {
    // TODO: 실제 인증 시스템 연결 후 세션 및 토큰 해제 로직으로 교체
    setPasswords({ current: '', next: '', confirm: '' })
    setIsPasswordOpen(false)
    setMessage('プロトタイプのログイン状態を初期化しました。')
  }

  return (
    <section className="mypage-detail-section" aria-labelledby="security-title">
      <header className="mypage-detail-section__header"><p>LOGIN & SECURITY</p><h2 id="security-title">ログイン・セキュリティ</h2></header>
      <div className="security-settings">
        <article><div><h3>パスワード</h3><p>定期的な変更をおすすめします。</p></div><button type="button" onClick={() => setIsPasswordOpen((open) => !open)}>パスワードを変更</button></article>
        {isPasswordOpen && (
          <form className="security-password-form" onSubmit={changePassword}>
            <label><span>現在のパスワード</span><input type="password" value={passwords.current} required onChange={(e) => setPasswords((p) => ({ ...p, current: e.target.value }))} /></label>
            <label><span>新しいパスワード</span><input type="password" value={passwords.next} required minLength="8" onChange={(e) => setPasswords((p) => ({ ...p, next: e.target.value }))} /></label>
            <label><span>新しいパスワード（確認）</span><input type="password" value={passwords.confirm} required minLength="8" onChange={(e) => setPasswords((p) => ({ ...p, confirm: e.target.value }))} /></label>
            <button type="submit">変更を保存</button>
          </form>
        )}
        <article><div><h3>ログアウト</h3><p>この端末のプロトタイプ状態を初期化します。</p></div><button type="button" onClick={logout}>ログアウト</button></article>
        <article><div><h3>アカウント管理</h3><p>連携情報とアカウント状態を管理します。</p></div><button type="button" onClick={() => setMessage('アカウント管理は準備中です。')}>管理画面へ</button></article>
        <article className="security-settings__danger"><div><h3>会員退会</h3><p>退会すると会員情報を利用できなくなります。</p></div><button type="button" onClick={() => setMessage('会員退会画面は準備中です。')}>退会手続きへ</button></article>
        {message && <p className="security-settings__message" role="status">{message}</p>}
      </div>
    </section>
  )
}

export default SecuritySettings

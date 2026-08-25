import { Link } from 'react-router-dom'
import { footerNavigation } from '../../data/navigation.js'

function Footer({ className = '' }) {
  return (
    <footer className={`site-footer ${className}`.trim()}>
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <Link className="site-footer__logo" to="/" aria-label="GYEOLDAM ホーム">
            GYEOLDAM
          </Link>
          <p className="site-footer__slogan">美しさを結び、想いを淡く刻む。</p>
        </div>

        <nav className="site-footer__navigation" aria-label="フッターメニュー">
          {footerNavigation.map(({ label, to }) => (
            <Link key={label} to={to}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="site-footer__legal">
          <div className="site-footer__legal-links">
            {/* 약관 상세 페이지가 추가되기 전까지 준비 화면으로 이동합니다. */}
            <Link to="/mypage">プライバシーポリシー</Link>
            <Link to="/mypage">利用規約</Link>
          </div>
          <small>© GYEOLDAM. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer

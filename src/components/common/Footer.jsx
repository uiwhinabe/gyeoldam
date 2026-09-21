import { useLanguage } from '../../i18n/useLanguage.js'
import { Link } from 'react-router-dom'
import { footerNavigation } from '../../data/navigation.js'

function Footer({ className = '' }) {
  const { t } = useLanguage()
  return (
    <footer className={`site-footer ${className}`.trim()}>
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <Link className="site-footer__logo" to="/" aria-label={t("GYEOLDAM ホーム")}>{t("GYEOLDAM")}</Link>
          <p className="site-footer__slogan">{t("美しさを結び、想いを淡く刻む。")}</p>
        </div>

        <nav className="site-footer__navigation" aria-label={t("フッターメニュー")}>
          {footerNavigation.map(({ label, to }) => (
            <Link key={label} to={to}>
              {t(label)}
            </Link>
          ))}
        </nav>

        <div className="site-footer__legal">
          <div className="site-footer__legal-links">
            {/* 약관 상세 페이지가 추가되기 전까지 준비 화면으로 이동합니다. */}
            <Link to="/mypage">{t("プライバシーポリシー")}</Link>
            <Link to="/mypage">{t("利用規約")}</Link>
          </div>
          <small>{t("© GYEOLDAM. All Rights Reserved.")}</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer

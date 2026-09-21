import { useLanguage } from '../../i18n/useLanguage.js'
import { Link, useLocation } from 'react-router-dom'

const sideMenuItems = [
  { label: '地図', icon: 'map.svg', type: 'map' },
  { label: 'Instagram', icon: 'instagram.svg', type: 'social' },
  { label: 'KakaoTalk', icon: 'kakaotalk.svg', type: 'social' },
  { label: 'LINE', icon: 'line.svg', type: 'social' },
  { label: 'お問い合わせ', icon: 'contact.svg', type: 'contact' },
]

function DesktopSideBar() {
  const { t, language } = useLanguage()
  const { pathname } = useLocation()

  if (pathname === '/treatment') {
    return (
      <aside className="treatment-side-reservation" aria-label={t("施術予約")}>
        <Link
          to="/reservation"
          aria-label={t("ご予約はこちら")}
        >
          {/* 시술메뉴 화면 가장자리의 세로형 예약 안내 문구 */}
          {(language === 'JP' ? 'ご予約はこちら'.split('') : [t('ご予約はこちら')]).map((character, index) => (
            <span key={`${character}-${index}`} aria-hidden="true">{character}</span>
          ))}
        </Link>
      </aside>
    )
  }

  return (
    <aside className="desktop-sidebar" aria-label={t("クイックメニュー")}>
      {sideMenuItems.map(({ label, icon, type }) => (
        <a key={label} className="desktop-sidebar__item" href="/#access" aria-label={t(`${label} ACCESSへ`)}>
          {/* TODO: SNS 계정과 문의 주소 확정 후 social/contact 항목의 href를 실제 링크로 교체 */}
          {/* 모든 페이지에서 동일하게 사용하는 퀵 메뉴 원본 SVG */}
          <img
            className="desktop-sidebar__icon"
            src={`${import.meta.env.BASE_URL}images/home/sidebar/${icon}`}
            alt=""
            aria-hidden="true"
            data-menu-type={type}
          />
        </a>
      ))}
    </aside>
  )
}

export default DesktopSideBar

import { Link, useLocation } from 'react-router-dom'

const sideMenuItems = [
  { label: '地図', icon: 'map.png', type: 'map' },
  { label: 'Instagram', icon: 'instagram.png', type: 'social' },
  { label: 'KakaoTalk', icon: 'kakaotalk.png', type: 'social' },
  { label: 'LINE', icon: 'line.png', type: 'social' },
  { label: 'お問い合わせ', icon: 'contact.png', type: 'contact' },
]

function DesktopSideBar() {
  const { pathname } = useLocation()

  if (pathname === '/treatment') {
    return (
      <aside className="treatment-side-reservation" aria-label="施術予約">
        <Link
          to="/reservation"
          aria-label="ご予約はこちら"
        >
          {/* 시술메뉴 화면 가장자리의 세로형 예약 안내 문구 */}
          {'ご予約はこちら'.split('').map((character, index) => (
            <span key={`${character}-${index}`} aria-hidden="true">{character}</span>
          ))}
        </Link>
      </aside>
    )
  }

  return (
    <aside className="desktop-sidebar" aria-label="クイックメニュー">
      {sideMenuItems.map(({ label, icon, type }) => (
        <a key={label} className="desktop-sidebar__item" href="/#access" aria-label={`${label} ACCESSへ`}>
          {/* TODO: SNS 계정과 문의 주소 확정 후 social/contact 항목의 href를 실제 링크로 교체 */}
          {/* 지도·SNS·문의 역할에 대응하는 HOME 스티키 바 아이콘 */}
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

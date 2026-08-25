const sideMenuItems = [
  { label: '地図', shortLabel: 'MAP', type: 'map' },
  { label: 'Instagram', shortLabel: 'INSTAGRAM', type: 'social' },
  { label: 'KakaoTalk', shortLabel: 'KAKAO', type: 'social' },
  { label: 'LINE', shortLabel: 'LINE', type: 'social' },
  { label: 'お問い合わせ', shortLabel: 'CONTACT', type: 'contact' },
]

function DesktopSideBar() {
  return (
    <aside className="desktop-sidebar" aria-label="クイックメニュー">
      {sideMenuItems.map(({ label, shortLabel, type }) => (
        <a key={label} className="desktop-sidebar__item" href="/#access" aria-label={`${label} ACCESSへ`}>
          {/* TODO: 아이콘 이미지가 준비되면 텍스트를 아이콘으로 교체 */}
          {/* TODO: SNS 계정과 문의 주소 확정 후 social/contact 항목의 href를 실제 링크로 교체 */}
          <span aria-hidden="true" data-menu-type={type}>{shortLabel}</span>
        </a>
      ))}
    </aside>
  )
}

export default DesktopSideBar

import { mypageTabs } from '../../data/mypageNavigation.js'

function MyPageNavigation({ activeTab, onTabChange }) {
  return (
    <nav className="mypage-navigation" aria-label="マイページメニュー">
      <p>MY PAGE</p>
      <div className="mypage-navigation__tabs" role="tablist" aria-orientation="vertical">
        {mypageTabs.map(({ id, label }) => (
          <button
            key={id}
            id={`mypage-tab-${id}`}
            className={activeTab === id ? 'mypage-navigation__tab--active' : ''}
            type="button"
            role="tab"
            aria-selected={activeTab === id}
            aria-controls={`mypage-panel-${id}`}
            onClick={() => onTabChange(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default MyPageNavigation

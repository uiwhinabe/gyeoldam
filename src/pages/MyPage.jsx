import { useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import MyPageNavigation from '../components/mypage/MyPageNavigation.jsx'
import MemberProfile from '../components/mypage/MemberProfile.jsx'
import NotificationSettings from '../components/mypage/NotificationSettings.jsx'
import ReservationInformation from '../components/mypage/ReservationInformation.jsx'
import SecuritySettings from '../components/mypage/SecuritySettings.jsx'
import TreatmentHistory from '../components/mypage/TreatmentHistory.jsx'
import { mypageTabs } from '../data/mypageNavigation.js'

const tabContents = {
  reservations: <ReservationInformation />,
  treatments: <TreatmentHistory />,
  profile: <MemberProfile />,
  security: <SecuritySettings />,
  notifications: <NotificationSettings />,
}

function MyPage() {
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const requestedTab = searchParams.get('tab') || 'reservations'
  const activeTab = mypageTabs.some(({ id }) => id === requestedTab) ? requestedTab : 'reservations'

  const changeTab = (tab) => setSearchParams(tab === 'reservations' ? {} : { tab })

  useEffect(() => {
    if (location.state?.scrollToUpcoming) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [location.key, location.state])

  return (
    <div className="mypage-page">
      <header className="mypage-page__hero">
        <p>MY PAGE</p>
        <h1>マイページ</h1>
      </header>

      <div className="container mypage-page__layout">
        <MyPageNavigation activeTab={activeTab} onTabChange={changeTab} />
        <main
          id={`mypage-panel-${activeTab}`}
          className="mypage-page__content"
          role="tabpanel"
          aria-labelledby={`mypage-tab-${activeTab}`}
          tabIndex="0"
        >
          {tabContents[activeTab]}
        </main>
      </div>
    </div>
  )
}

export default MyPage

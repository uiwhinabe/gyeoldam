import { Outlet, useLocation } from 'react-router-dom'
import DesktopSideBar from './DesktopSideBar.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'

function SiteLayout() {
  const { pathname } = useLocation()
  const isLoginPage = pathname === '/login'

  return (
    <div className="site-shell">
      <Header />
      <div className="site-content-row">
        <main className="site-main">
          <Outlet />
        </main>
        <DesktopSideBar />
      </div>
      <Footer className={isLoginPage ? 'site-footer--login' : ''} />
    </div>
  )
}

export default SiteLayout

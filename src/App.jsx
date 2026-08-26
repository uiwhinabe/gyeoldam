import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/common/SiteLayout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ForgotPasswordPage from './pages/ForgotPasswordPage.jsx'
import HomePage from './pages/HomePage.jsx'
import JoinPage from './pages/JoinPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import MyPage from './pages/MyPage.jsx'
import ReservationPage from './pages/ReservationPage.jsx'
import ReservationChangePage from './pages/ReservationChangePage.jsx'
import ReservationCancelPage from './pages/ReservationCancelPage.jsx'
import ReservationManagePage from './pages/ReservationManagePage.jsx'
import TreatmentPage from './pages/TreatmentPage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="treatment" element={<TreatmentPage />} />
        <Route path="reservation" element={<ReservationPage />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="mypage/reservation/:id/manage" element={<ReservationManagePage />} />
        <Route path="mypage/reservation/:id/change" element={<ReservationChangePage />} />
        <Route path="mypage/reservation/:id/cancel" element={<ReservationCancelPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="join" element={<JoinPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
      </Route>

      {/* ?뺤쓽?섏? ?딆? 二쇱냼???덉쑝濡??대룞?섎ŉ, 異뷀썑 404 ?섏씠吏濡?援먯껜?????덉뒿?덈떎. */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App

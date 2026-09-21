import { useLanguage } from '../i18n/useLanguage.js'
import PagePlaceholder from '../components/common/PagePlaceholder.jsx'

function ForgotPasswordPage() {
  const { t } = useLanguage()
  return <PagePlaceholder eyebrow={t("PASSWORD")} title={t("パスワードをお忘れの方")} />
}

export default ForgotPasswordPage

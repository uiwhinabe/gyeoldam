import { useLanguage } from '../i18n/useLanguage.js'
import PagePlaceholder from '../components/common/PagePlaceholder.jsx'

function JoinPage() {
  const { t } = useLanguage()
  return <PagePlaceholder eyebrow={t("JOIN")} title={t("会員登録")} />
}

export default JoinPage

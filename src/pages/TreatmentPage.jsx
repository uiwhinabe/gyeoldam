import { useLanguage } from '../i18n/useLanguage.js'
import TreatmentCategory from '../components/treatment/TreatmentCategory.jsx'
import TreatmentReservationCta from '../components/treatment/TreatmentReservationCta.jsx'
import TreatmentTabs from '../components/treatment/TreatmentTabs.jsx'
import { treatmentCategories } from '../data/treatments.js'

function TreatmentPage() {
  const { t } = useLanguage()
  return (
    <div className="treatment-page">
      <header className="treatment-page__hero">
        <p>{t("TREATMENT")}</p>
        <h1>{t("ARTMAKEUP MENU")}</h1>
        <span>{t("一人ひとりに合わせた施術メニュー")}</span>
      </header>

      <TreatmentTabs categories={treatmentCategories} />

      <div className="treatment-page__categories">
        {treatmentCategories.map((category) => (
          <TreatmentCategory key={category.id} category={category} />
        ))}
      </div>

      <TreatmentReservationCta />
    </div>
  )
}

export default TreatmentPage

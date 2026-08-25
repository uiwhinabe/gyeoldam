import TreatmentCategory from '../components/treatment/TreatmentCategory.jsx'
import TreatmentReservationCta from '../components/treatment/TreatmentReservationCta.jsx'
import TreatmentTabs from '../components/treatment/TreatmentTabs.jsx'
import { treatmentCategories } from '../data/treatments.js'

function TreatmentPage() {
  return (
    <div className="treatment-page">
      <header className="treatment-page__hero">
        <p>TREATMENT</p>
        <h1>ARTMAKEUP MENU</h1>
        <span>一人ひとりに合わせた施術メニュー</span>
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

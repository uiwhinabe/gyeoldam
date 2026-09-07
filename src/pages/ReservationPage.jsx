import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DirectorBottomSheet from '../components/reservation/DirectorBottomSheet.jsx'
import DesktopReservationFlow from '../components/reservation/DesktopReservationFlow.jsx'
import ReservationAddedToast from '../components/reservation/ReservationAddedToast.jsx'
import ReservationForm from '../components/reservation/ReservationForm.jsx'
import ReservationList from '../components/reservation/ReservationList.jsx'
import ReservationSchedule from '../components/reservation/ReservationSchedule.jsx'
import ReservationSummary from '../components/reservation/ReservationSummary.jsx'
import ReservationTabs from '../components/reservation/ReservationTabs.jsx'
import TreatmentSelectionCard from '../components/reservation/TreatmentSelectionCard.jsx'
import { toLocalISO } from '../data/reservationAvailability.js'
import { getTreatmentById, getTreatmentByName, treatmentCategories } from '../data/treatments.js'

const SELECTION_STORAGE_KEY = 'gyeoldam-reservation-treatment-selection'

const createReservationItem = (treatment, directorSelected = false) => {
  const additionalFee = directorSelected ? treatment.directorSurcharge : 0
  return {
    ...treatment,
    directorSelected,
    additionalFee,
    finalAmount: (treatment.price ?? 0) + additionalFee,
  }
}

function ReservationPage() {
  const location = useLocation()
  const [activeCategory, setActiveCategory] = useState(treatmentCategories[0].id)
  const [selectedTreatments, setSelectedTreatments] = useState(() => {
    const rebookNames = location.state?.rebookTreatments || []
    if (rebookNames.length > 0) return rebookNames.map(getTreatmentByName).filter(Boolean).map((treatment) => createReservationItem(treatment))

    try {
      const savedSelections = JSON.parse(window.localStorage.getItem(SELECTION_STORAGE_KEY) || '[]')
      return savedSelections
        .map(({ id, directorSelected }) => {
          const treatment = getTreatmentById(id)
          return treatment ? createReservationItem(treatment, directorSelected) : null
        })
        .filter(Boolean)
    } catch {
      return []
    }
  })
  const [pendingSelection, setPendingSelection] = useState(null)
  const [desktopSelection, setDesktopSelection] = useState(null)
  const [showAddedNotice, setShowAddedNotice] = useState(false)
  const [displayMonth, setDisplayMonth] = useState(() => {
    const now = new Date()
    return new Date(now.getFullYear(), now.getMonth(), 1)
  })
  const [selectedDate, setSelectedDate] = useState(() => toLocalISO(new Date()))
  const [selectedTime, setSelectedTime] = useState(null)

  const currentCategory = treatmentCategories.find(({ id }) => id === activeCategory)

  // TODO: 다음 단계에서 선택 결과를 실제 예약 서버 및 사용자 세션과 연결합니다.
  const removeTreatment = (treatmentId) => {
    setSelectedTreatments((current) => current.filter((item) => item.id !== treatmentId))
  }

  const addTreatment = (treatmentId, treatment, directorOption) => {
    const reservationItem = createReservationItem(treatment, directorOption === 'director')

    setSelectedTreatments((current) => {
      if (current.some((item) => item.id === treatmentId)) return current
      return [...current, reservationItem]
    })
    setShowAddedNotice(true)
  }

  useEffect(() => {
    if (!showAddedNotice) return undefined
    const timer = window.setTimeout(() => setShowAddedNotice(false), 4000)
    return () => window.clearTimeout(timer)
  }, [showAddedNotice])

  useEffect(() => {
    window.localStorage.setItem(SELECTION_STORAGE_KEY, JSON.stringify(
      selectedTreatments.map(({ id, directorSelected }) => ({ id, directorSelected })),
    ))
  }, [selectedTreatments])

  const handleAdd = (treatmentId, treatment) => {
    if (selectedTreatments.some((item) => item.id === treatmentId)) {
      removeTreatment(treatmentId)
      return
    }

    if (window.matchMedia('(max-width: 640px)').matches) {
      setPendingSelection({ treatmentId, treatment })
      return
    }

    setDesktopSelection({ treatmentId, treatment })
  }

  const confirmPendingSelection = (directorOption) => {
    if (pendingSelection) {
      // TODO: 원장 지명 선택값을 예약 목록 및 서버 전송 데이터에 함께 저장합니다.
      void directorOption
      addTreatment(pendingSelection.treatmentId, pendingSelection.treatment, directorOption)
    }
    setPendingSelection(null)
  }

  const confirmDesktopSelection = (directorOption) => {
    if (desktopSelection) {
      addTreatment(desktopSelection.treatmentId, desktopSelection.treatment, directorOption)
    }
    setDesktopSelection(null)
  }

  const navigateToReservationList = () => {
    setShowAddedNotice(false)
    document.getElementById('reservation-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const changeDirectorOption = (treatmentId, directorSelected) => {
    setSelectedTreatments((current) => current.map((item) => {
      if (item.id !== treatmentId) return item
      const additionalFee = directorSelected ? item.directorSurcharge : 0
      return {
        ...item,
        directorSelected,
        additionalFee,
        finalAmount: (item.price ?? 0) + additionalFee,
      }
    }))
  }

  const navigateToTreatmentSelection = () => {
    document.getElementById('reservation-treatment-selection')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const selectReservationDate = (date) => {
    setSelectedDate(date)
    setSelectedTime(null)
  }

  const formattedReservationDate = selectedDate
    ? new Intl.DateTimeFormat('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })
      .format(new Date(`${selectedDate}T00:00:00`))
    : null

  return (
    <div className="reservation-page">
      <header className="reservation-page__hero">
        <p>STEP 01</p>
        <h1>RESERVATION</h1>
        <span>ご希望の施術をお選びください。</span>
      </header>

      <ReservationTabs categories={treatmentCategories} activeCategory={activeCategory} onSelect={setActiveCategory} />

      <section id="reservation-treatment-selection" className="reservation-selection" aria-labelledby="reservation-category-title">
        <div className="container">
          <div className="reservation-selection__heading">
            <div>
              <p>{currentCategory.tabLabel}</p>
              <h2 id="reservation-category-title">{currentCategory.title}</h2>
            </div>
            <span aria-live="polite">選択 {selectedTreatments.length}件</span>
          </div>

          <div className="reservation-selection__grid">
            {currentCategory.items.map((treatment) => {
              const treatmentId = treatment.id
              return (
                <TreatmentSelectionCard
                  key={treatmentId}
                  treatment={treatment}
                  treatmentId={treatment.id}
                  isSelected={selectedTreatments.some((item) => item.id === treatmentId)}
                  onAdd={handleAdd}
                />
              )
            })}
          </div>
        </div>
      </section>

      <ReservationSchedule
        displayMonth={displayMonth}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        onMonthChange={setDisplayMonth}
        onDateSelect={selectReservationDate}
        onTimeSelect={setSelectedTime}
      />

      <section id="reservation-list" className="reservation-list" aria-labelledby="reservation-list-title">
        <div className="container">
          <div className="reservation-overview">
            <ReservationList
              items={selectedTreatments}
              onRemove={removeTreatment}
              onDirectorChange={changeDirectorOption}
              onAddAnother={navigateToTreatmentSelection}
            />
            <ReservationSummary
              items={selectedTreatments}
              reservationDate={formattedReservationDate}
              reservationTime={selectedTime}
            />
          </div>
        </div>
      </section>

      <ReservationForm
        treatments={selectedTreatments}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
      />

      <DirectorBottomSheet
        key={pendingSelection?.treatmentId ?? 'closed'}
        isOpen={Boolean(pendingSelection)}
        treatment={pendingSelection?.treatment}
        onClose={() => setPendingSelection(null)}
        onConfirm={confirmPendingSelection}
      />
      <ReservationAddedToast isVisible={showAddedNotice} onNavigate={navigateToReservationList} />
      <DesktopReservationFlow
        key={desktopSelection?.treatmentId ?? 'desktop-closed'}
        selection={desktopSelection}
        onClose={() => setDesktopSelection(null)}
        onConfirm={confirmDesktopSelection}
      />
    </div>
  )
}

export default ReservationPage

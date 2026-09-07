import { useEffect, useRef, useState } from 'react'
import { formatDirectorSurcharge } from '../../data/treatments.js'

function DirectorBottomSheet({ isOpen, treatment, onClose, onConfirm }) {
  const [directorOption, setDirectorOption] = useState('none')
  const panelRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const previousFocus = document.activeElement
    const panel = panelRef.current
    panel?.querySelector('input')?.focus()
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab' || !panel) return

      const focusable = [...panel.querySelectorAll('button, input, [href], [tabindex]:not([tabindex="-1"])')]
      const first = focusable[0]
      const last = focusable.at(-1)
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      previousFocus?.focus()
    }
  }, [isOpen, onClose])

  if (!isOpen || !treatment) return null

  return (
    <div className="director-sheet" role="dialog" aria-modal="true" aria-labelledby="director-sheet-title">
      <button className="director-sheet__dim" type="button" aria-label="閉じる" onClick={onClose} />
      <div ref={panelRef} className="director-sheet__panel">
        <div className="director-sheet__handle" aria-hidden="true" />
        <button className="director-sheet__close" type="button" aria-label="閉じる" onClick={onClose}>×</button>
        <h2 id="director-sheet-title">院長指名</h2>
        <p className="director-sheet__treatment">{treatment.name}</p>

        <fieldset className="director-sheet__options">
          <legend className="visually-hidden">院長指名を選択</legend>
          <label>
            <input
              type="radio"
              name="director-option"
              value="none"
              checked={directorOption === 'none'}
              onChange={(event) => setDirectorOption(event.target.value)}
            />
            <span>指名なし</span>
          </label>
          <label>
            <input
              type="radio"
              name="director-option"
              value="director"
              checked={directorOption === 'director'}
              onChange={(event) => setDirectorOption(event.target.value)}
            />
            <span>院長を指名</span>
            <strong>{formatDirectorSurcharge(treatment)}</strong>
          </label>
        </fieldset>

        {/* TODO: 선택한 원장 옵션과 시술 목록을 실제 예약 서버 데이터에 연결 */}
        <button
          className="primary-button director-sheet__confirm"
          type="button"
          onClick={() => onConfirm(directorOption)}
        >
          予約リストに追加
        </button>
      </div>
    </div>
  )
}

export default DirectorBottomSheet

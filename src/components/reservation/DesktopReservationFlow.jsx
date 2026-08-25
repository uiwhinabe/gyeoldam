import { useEffect, useRef, useState } from 'react'

function DesktopReservationFlow({ selection, onClose, onConfirm }) {
  const [directorOption, setDirectorOption] = useState('none')
  const panelRef = useRef(null)

  useEffect(() => {
    if (!selection) return undefined

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
  }, [selection, onClose])

  if (!selection) return null

  return (
    <div className="desktop-reservation-flow" role="dialog" aria-modal="true" aria-labelledby="desktop-flow-title">
      <button className="desktop-reservation-flow__dim" type="button" aria-label="閉じる" onClick={onClose} />
      <div ref={panelRef} className="desktop-reservation-flow__panel">
        <button className="desktop-reservation-flow__close" type="button" aria-label="閉じる" onClick={onClose}>×</button>
        <h2 id="desktop-flow-title">院長指名をご希望ですか？</h2>
        <p className="desktop-reservation-flow__treatment">{selection.treatment.name}</p>

        <fieldset className="desktop-reservation-flow__options">
          <legend className="visually-hidden">院長指名を選択</legend>
          <label>
            <input type="radio" name="desktop-director" value="none" checked={directorOption === 'none'} onChange={(event) => setDirectorOption(event.target.value)} />
            <span>指名なし</span>
          </label>
          <label>
            <input type="radio" name="desktop-director" value="director" checked={directorOption === 'director'} onChange={(event) => setDirectorOption(event.target.value)} />
            <span>院長を指名</span>
            <strong>＋200,000ウォン</strong>
          </label>
        </fieldset>

        <div className="desktop-reservation-flow__actions">
          <button className="desktop-flow-button desktop-flow-button--outline" type="button" onClick={onClose}>戻る</button>
          <button className="desktop-flow-button desktop-flow-button--filled" type="button" onClick={() => onConfirm(directorOption)}>予約リストに追加</button>
        </div>
      </div>
    </div>
  )
}

export default DesktopReservationFlow

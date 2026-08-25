import { useEffect, useRef } from 'react'

function CancelConfirmModal({ isOpen, onClose, onConfirm }) {
  const panelRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    const panel = panelRef.current
    panel?.querySelector('button')?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab' || !panel) return
      const buttons = [...panel.querySelectorAll('button')]
      const first = buttons[0]
      const last = buttons.at(-1)
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      previousFocus?.focus()
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="cancel-confirm-modal" role="dialog" aria-modal="true" aria-labelledby="cancel-confirm-title">
      <button className="cancel-confirm-modal__dim" type="button" aria-label="閉じる" onClick={onClose} />
      <div ref={panelRef} className="cancel-confirm-modal__panel">
        <span className="cancel-confirm-modal__warning" aria-hidden="true">!</span>
        <h2 id="cancel-confirm-title">予約をキャンセルしますか？</h2>
        <p>キャンセル後は元に戻すことができません。</p>
        <div><button type="button" onClick={onClose}>いいえ</button><button type="button" onClick={onConfirm}>キャンセルする</button></div>
      </div>
    </div>
  )
}

export default CancelConfirmModal

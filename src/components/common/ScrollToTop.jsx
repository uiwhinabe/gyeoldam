import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    const root = document.documentElement
    const previousScrollBehavior = root.style.scrollBehavior

    // 새 경로의 첫 프레임이 그려질 때까지 smooth를 끄고 최상단 위치를 확정합니다.
    root.style.scrollBehavior = 'auto'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    window.scrollTo(0, 0)

    let restoreFrame
    const confirmFrame = window.requestAnimationFrame(() => {
      window.scrollTo(0, 0)
      restoreFrame = window.requestAnimationFrame(() => {
        root.style.scrollBehavior = previousScrollBehavior
      })
    })

    return () => {
      window.cancelAnimationFrame(confirmFrame)
      if (restoreFrame) window.cancelAnimationFrame(restoreFrame)
      root.style.scrollBehavior = previousScrollBehavior
    }
  }, [pathname])

  return null
}

export default ScrollToTop

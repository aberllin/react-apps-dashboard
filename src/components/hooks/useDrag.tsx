import { useState, useEffect, useCallback } from 'react'

export const useDrag = (ref: React.RefObject<HTMLDivElement>) => {
  const [mouseDown, setMouseDown] = useState<boolean>(false)

  const handleDrag = useCallback(
    (movementX: number, movementY: number) => {
      const currentRef = ref.current
      if (!currentRef) return
      const { x, y } = currentRef.getBoundingClientRect()
      currentRef.style.left = `${x + movementX}px`
      currentRef.style.top = `${y + movementY}px`
    },
    [ref],
  )

  useEffect(() => {
    const mousemove = (e: MouseEvent) => {
      handleDrag(e.movementX, e.movementY)
    }

    if (mouseDown) {
      window.addEventListener('mousemove', mousemove)
    }

    return () => {
      window.removeEventListener('mousemove', mousemove)
    }
  }, [ref, mouseDown])

  useEffect(() => {
    const mouseup = () => setMouseDown(false)
    window.addEventListener('mouseup', mouseup)

    return () => window.removeEventListener('mouseup', mouseup)
  }, [])

  return () => setMouseDown(true)
}

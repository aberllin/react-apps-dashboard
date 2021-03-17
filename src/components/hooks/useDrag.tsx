import { useState, useEffect, useCallback } from 'react'

export const useDrag = (ref: React.RefObject<HTMLDivElement>, id: string) => {
  const [mouseDown, setMouseDown] = useState<boolean>(false)
  const [coordinates, setCoordinates] = useState<{
    left: number
    top: number
  }>()

  const handleDrag = useCallback(
    (movementX: number, movementY: number) => {
      const currentRef = ref.current
      if (!currentRef) return
      const { x, y } = currentRef.getBoundingClientRect()

      setCoordinates({ left: x + movementX, top: y + movementY })
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
  }, [ref, mouseDown, handleDrag])

  useEffect(() => {
    const mouseup = () => setMouseDown(false)
    window.addEventListener('mouseup', mouseup)

    return () => window.removeEventListener('mouseup', mouseup)
  }, [])

  return {
    callback: () => setMouseDown(true),
    coordinates,
  }
}

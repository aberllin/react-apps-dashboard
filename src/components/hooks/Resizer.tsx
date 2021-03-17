import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'

export enum Directions {
  right = 'right',
  bottomRight = 'bottomRight',
}

export const Resizer = React.forwardRef((_, ref) => {
  const [direction, setDirection] = useState<Directions>()
  const [mouseDown, setMouseDown] = useState(false)

  const onResize = useCallback(
    (direction: Directions, movementX: number, movementY: number) => {
      const panel = (ref as React.RefObject<HTMLDivElement>).current
      if (!panel) return

      const { width, height } = panel.getBoundingClientRect()

      const resizeRight = () => {
        panel.style.width = `${width + movementX}px`
      }

      const resizeBottom = () => {
        panel.style.height = `${height + movementY}px`
      }

      switch (direction) {
        case Directions.right:
          resizeRight()
          break

        case Directions.bottomRight:
          resizeBottom()
          resizeRight()
          break

        default:
          break
      }
    },
    [ref],
  )

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!direction) return

      onResize(direction, e.movementX, e.movementY)
    }

    if (mouseDown) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseDown, direction, onResize])

  useEffect(() => {
    const handleMouseUp = () => setMouseDown(false)

    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  const handleMouseDown = (direction: Directions) => () => {
    setDirection(direction)
    setMouseDown(true)
  }

  return (
    <>
      <Right onMouseDown={handleMouseDown(Directions.right)} />
      <RightBottom onMouseDown={handleMouseDown(Directions.bottomRight)} />
    </>
  )
})

const RightBottom = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background: ${({ theme }) => theme.bodyColor};
  z-index: 2;
  right: 0;
  bottom: 0;
  cursor: se-resize;
`

const Right = styled.div`
  position: absolute;
  width: 4px;
  height: 100%;
  background: ${({ theme }) => theme.bodyColor};
  z-index: 1;
  opacity: 0;
  right: 0;
  top: 0;
  cursor: ew-resize;
`

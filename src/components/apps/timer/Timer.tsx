import React from 'react'
import { AppWindow } from '../../AppWindow'

type Props = {
  id: string
  isCollapsed: boolean
  onCollapse: (id: string) => void
  onClose: (id: string) => void
  coordinates: { left: number; top: number }
}

export const Timer = ({
  isCollapsed,
  onCollapse,
  id,
  onClose,
  coordinates,
}: Props) => {
  return (
    <AppWindow
      id={id}
      isCollapsed={isCollapsed}
      onCollapse={onCollapse}
      onClose={onClose}
      coordinates={coordinates}
    >
      <div>Cooming soon...</div>
    </AppWindow>
  )
}

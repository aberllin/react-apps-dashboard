import React, { useState, useContext } from 'react'

type Props = {
  children: React.ReactNode
}

type Window = {
  id: string
  isCollapsed: boolean
  coordinates: {
    left: number
    top: number
  }
}

type Context = {
  windows: Window[]
  setWindows: React.Dispatch<React.SetStateAction<Window[]>>
  closeAllWindows: () => void
  makeWindowFirst: (id: string) => void
  collapseWindow: (id: string) => void
  onCloseWindow: (id: string) => void
  dragWindow: (id: string, left: number, top: number) => void
}

const WindowsContext = React.createContext<Context | null>(null)

export const useWindows = () => {
  const windows = useContext(WindowsContext)

  if (!windows) {
    throw new Error('You use useWindows outside provider')
  } else {
    return windows
  }
}

export const WindowsProvider = ({ children }: Props) => {
  const [windows, setWindows] = useState<Window[]>([])
  const closeAllWindows = () => {
    setWindows([])
  }

  const makeWindowFirst = (id: string) => {
    const activeWindow = windows.find((window) => window.id === id)
    const restWindows = windows.filter((window) => window.id !== id)
    setWindows(activeWindow ? [...restWindows, activeWindow] : restWindows)
  }

  const collapseWindow = (id: string) => {
    const newOpenedWindows = windows.map((window) =>
      window.id === id ? { ...window, isCollapsed: true } : window,
    )

    setWindows(newOpenedWindows)
  }

  const onCloseWindow = (id: string) => {
    setWindows(windows.filter((window) => window.id !== id))
  }

  const dragWindow = (id: string, left: number, top: number) => {
    const currentWindow = windows.find((window) => window.id === id)
    const restWindows = windows.filter((window) => window.id !== id)
    setWindows(
      currentWindow
        ? [...restWindows, { ...currentWindow, coordinates: { left, top } }]
        : restWindows,
    )
  }

  return (
    <WindowsContext.Provider
      value={{
        windows,
        setWindows,
        closeAllWindows,
        makeWindowFirst,
        collapseWindow,
        onCloseWindow,
        dragWindow,
      }}
    >
      {children}
    </WindowsContext.Provider>
  )
}

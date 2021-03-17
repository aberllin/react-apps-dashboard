import React, { useState, useEffect } from 'react'
import { Dashboard } from './modules/Dashboard'
import { ThemeProvider } from 'styled-components'
import { themes } from './styles/theme'
import { GlobalStyles } from './styles/global'
import { NotificationProvider } from './providers/NotificationProvider'
import { WindowsProvider } from './providers/WindowsProvider'

enum Theme {
  light = 'light',
  dark = 'dark',
}

function App() {
  const [theme, setTheme] = useState(Theme.light)
  function changeTheme() {
    if (theme === Theme.light) {
      setTheme(Theme.dark)
    } else {
      setTheme(Theme.light)
    }
  }

  useEffect(() => {
    const inStorage = localStorage.getItem('theme')
    const initialValue: Theme = inStorage ? (inStorage as Theme) : Theme.light
    setTheme(initialValue)
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        <NotificationProvider>
          <WindowsProvider>
            <Dashboard changeTheme={changeTheme} theme={theme} />
          </WindowsProvider>
        </NotificationProvider>
      </>
    </ThemeProvider>
  )
}

export default App

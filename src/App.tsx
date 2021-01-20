import React, { useState, useEffect } from 'react'
import { Dashboard } from './modules/Dashboard'
import { ThemeProvider } from 'styled-components'
import { themes } from './styles/theme'
import { GlobalStyles } from './styles/global'
import { BrowserRouter as Router } from 'react-router-dom'


function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  function changeTheme() {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  useEffect(() => {
    const inStorage = localStorage.getItem('theme')
    const initialValue: any = inStorage ? inStorage : 'light'
    setTheme(initialValue)
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  

  return (
    <Router>
      <ThemeProvider theme={themes[theme]}>
        <>
          <GlobalStyles />
          <Dashboard changeTheme={changeTheme} theme={theme} />
        </>
      </ThemeProvider>
    </Router>
  )
}

export default App

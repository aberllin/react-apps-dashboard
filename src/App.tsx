import React, { useState } from 'react'
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

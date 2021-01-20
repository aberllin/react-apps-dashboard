import React, { useState } from 'react'
import { Dashboard } from './modules/Dashboard'
import { ThemeProvider } from 'styled-components'
import { themes } from './styles/theme'
import { GlobalStyles } from './styles/global'
import { BrowserRouter as Router } from 'react-router-dom'

enum Theme {
  light = 'light',
  dark = 'dark'
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

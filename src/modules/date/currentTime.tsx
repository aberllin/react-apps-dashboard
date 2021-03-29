import React, { useState } from 'react'

export const CurrentTime = () => {
  const [time, setTime] = useState({ date: new Date() })

  const changeTime = () => {
    setInterval(() => {
      setTime({ date: new Date() })
    }, 1000)
  }

  const currentTime = time.date.toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <>
      {currentTime}
      {changeTime()}
    </>
  )
}

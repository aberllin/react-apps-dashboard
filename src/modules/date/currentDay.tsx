import React, { useState } from 'react'
import styled from 'styled-components'

export const CurrentDay = () => {
  const [day, setDay] = useState({ date: new Date() })

  const changeDay = () => {
    setInterval(() => {
      setDay({ date: new Date() })
    }, 1)
  }
  const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat']
  const currentDay = days[day.date.getDay()]

  return (
    <Day>
      {currentDay}
      {changeDay()}
    </Day>
  )
}

const Day = styled.div`
  padding-right: 5px;
`

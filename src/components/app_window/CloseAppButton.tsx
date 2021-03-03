import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { GiPlainCircle } from 'react-icons/gi'

export const CloseAppButton = () => {
  return (
    <Link to="/">
      <CloseIcon />
    </Link>
  )
}

const CloseIcon = styled(GiPlainCircle)`
  color: #cb1717;
  font-size: 20px;
  padding-right: 6px;
`

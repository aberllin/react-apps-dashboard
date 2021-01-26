import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IoCloseCircleOutline } from 'react-icons/io5'

export const CloseAppButton = () => {
  return (
    <Link onClick={() => document.body.style.overflow = 'auto' } to="/">
      <CloseIcon />
    </Link>
  )
}

const CloseIcon = styled(IoCloseCircleOutline)`
  color: ${({ theme }) => theme.textColor};
  transition: ease 0.2s;

  &:hover {
    color: red;
  }
`

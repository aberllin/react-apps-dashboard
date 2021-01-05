import React from 'react'
import styled from 'styled-components'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export const AppWindow = ({ title, app }) => {
  return (
    <AppWindowWrapper>
      <AppCardNav>
        <div>{title}</div>
        <Link to="/">
          <CloseIcon />
        </Link>
      </AppCardNav>
      <div>{app}</div>
    </AppWindowWrapper>
  )
}

const CloseIcon = styled(IoCloseCircleOutline)`
  color: ${({ theme }) => theme.textColor};
  transition: ease 0.2s;

  &:hover {
    color: red;
  }
`

const AppCardNav = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 50px;
`

const AppWindowWrapper = styled.div`
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  font-size: 35px;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.bodyColor};
`

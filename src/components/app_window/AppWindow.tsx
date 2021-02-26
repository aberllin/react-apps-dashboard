import React, { useEffect } from 'react'
import styled from 'styled-components'
import { CloseAppButton } from './CloseAppButton'
import { AppType } from '../../modules/appsData'
import { Menu } from '../menu/Menu'

interface Props {
  app: AppType['app']
  options: AppType['options']
}

export const AppWindow = ({ app, options }: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  return (
    <AppWindowWrapper>
      <AppCardNav>
        <CloseAppButton />
      </AppCardNav>
      <App>{app ? app : 'Coming soon'}</App>
      {options && (
        <MenuButton>
          <Menu options={options} />
        </MenuButton>
      )}
    </AppWindowWrapper>
  )
}

const AppCardNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  background: ${({ theme }) => theme.textColor};
`
const App = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`

const AppWindowWrapper = styled.div`
  position: fixed;
  z-index: 2;
  left: 200px;
  top: 200px;
  width: 100%;
  max-width: 600px;
  height: 100%;
  max-height: 400px;
  overflow: auto;
  border-radius: 20px;
  font-size: 35px;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.bodyColor};
`

const MenuButton = styled.div`
  position: fixed;
  bottom: 60px;
  left: 60px;
`

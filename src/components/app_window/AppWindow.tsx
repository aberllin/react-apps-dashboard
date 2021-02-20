import React, { useEffect } from 'react'
import styled from 'styled-components'
import { CloseAppButton } from './CloseAppButton'
import { AppType } from '../../modules/appsData'
import { Menu } from '../menu_options/menu/Menu'

interface Props {
  title: AppType['title']
  app: AppType['app']
  options: AppType['options']
}

export const AppWindow = ({ title, app, options }: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  return (
    <AppWindowWrapper>
      <AppCardNav>
        <div>{title}</div>
        <CloseAppButton />
      </AppCardNav>
      <div>{app ? app : 'Coming soon'}</div>
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

const MenuButton = styled.div`
  position: fixed;
  bottom: 60px;
  left: 60px;
`

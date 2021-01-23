import React from 'react'
import styled from 'styled-components'
import { CloseAppButton } from './CloseAppButton'
import { AppType } from '../../modules/appsData'
import { MenuButton } from './MenuComponents/MenuButton'


interface Props {
  title: AppType['title']
  app: AppType['app']
}

export const AppWindow = ({ title, app } : Props ) => {
  return (
    <AppWindowWrapper>
      <AppCardNav>
        <div>{title}</div>
        <CloseAppButton />
      </AppCardNav>
      <div>{app}</div>
      <MenuButton />
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


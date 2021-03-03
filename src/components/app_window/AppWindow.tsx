import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CloseAppButton } from './CloseAppButton'
import { AppType } from '../../modules/appsData'
import { GiPlainCircle } from 'react-icons/gi'

interface Props {
  app: AppType['app']
  options: AppType['options']
}

export const AppWindow = ({ app, options }: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  const [fullScreen, setFullScreen] = useState<boolean>(false)

  const handleFullScreen = () => {
    setFullScreen((prev) => !prev)
  }

  return (
    <AppWindowWrapper isFullScreen={fullScreen}>
      <AppCardNav>
        <CloseAppButton />
        <div>
          <HideButton />
        </div>
        <div onClick={handleFullScreen}>
          <FullScreenButton />
        </div>
      </AppCardNav>
      <App>{app ? app : 'Coming soon'}</App>
    </AppWindowWrapper>
  )
}

const FullScreenButton = styled(GiPlainCircle)`
  color: #46cb17;
  font-size: 20px;
  padding-right: 6px;
  cursor: pointer;
`
const HideButton = styled(GiPlainCircle)`
  color: #cba317;
  font-size: 20px;
  padding-right: 6px;
  cursor: pointer;
`

const AppCardNav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 15px;
  background: ${({ theme }) => theme.textColor};
`
const App = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow-y: auto;
`

const AppWindowWrapper = styled.div<{ isFullScreen: boolean }>`
  position: fixed;
  overflow: hidden;
  z-index: 2;
  width: 100%;
  height: 100%;

  ${(props) => {
    if (props.isFullScreen) {
      return `
            max-width: 100%;       
            max-height: 100%; 
            left: 0;
            top: 0;      
          `
    } else {
      return `
     max-width: 600px;
     max-height: 400px;
     left: 200px;
     top: 200px;
     border-radius: 20px;
     `
    }
  }};

  font-size: 35px;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.bodyColor};
`

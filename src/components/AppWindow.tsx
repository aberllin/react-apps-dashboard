import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AppType } from '../modules/appsData'
import { GiPlainCircle } from 'react-icons/gi'
import { AppWindowDragTypes } from '../components/AppCard'
import { AppWindowState } from '../components/AppCard'
import { HiMenuAlt3 } from 'react-icons/hi'
import { OptionsBar } from '../components/OptionsBar'

interface Props {
  app: AppType['app']
  isAppWindowOpen: AppWindowState
  setIsAppWindowOpen: React.Dispatch<React.SetStateAction<AppWindowState>>
  appWindowDrag: AppWindowDragTypes
  setAppWindowDrag: React.Dispatch<React.SetStateAction<AppWindowDragTypes>>
}

export const AppWindow = ({
  app,
  isAppWindowOpen,
  setIsAppWindowOpen,
  appWindowDrag,
  setAppWindowDrag,
}: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  const [fullScreen, setFullScreen] = useState<boolean>(false)
  const handleFullScreen = () => {
    setFullScreen((prev) => !prev)
  }

  const dragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setAppWindowDrag({
      ...appWindowDrag,
      diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
      diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
      dragging: true,
    })
  }

  const dragging = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (appWindowDrag.dragging) {
      const diffX = appWindowDrag.diffX || 0
      const diffY = appWindowDrag.diffY || 0

      const left = e.screenX - diffX
      const top = e.screenY - diffY

      setAppWindowDrag({
        ...appWindowDrag,
        styles: {
          top: top,
          left: left,
        },
      })
    }
  }

  const dragEnd = () => {
    setAppWindowDrag({
      ...appWindowDrag,
      dragging: false,
    })
  }

  const handleHideScreen = () => {
    setIsAppWindowOpen({ ...isAppWindowOpen, isCollapsed: true, zIndex: -1000 })
  }

  const [isOptionBarOpen, setIsOptionBarOpen] = useState<boolean>(false)

  return (
    <AppWindowWrapper
      isFullScreen={fullScreen}
      isScreenCollapsed={isAppWindowOpen.isCollapsed}
      zIndex={isAppWindowOpen.zIndex}
      left={appWindowDrag.styles?.left}
      top={appWindowDrag.styles?.top}
      onClick={() =>
        setIsAppWindowOpen({
          ...isAppWindowOpen,
          zIndex: isAppWindowOpen.zIndex + 1,
        })
      }
    >
      <AppCardNav
        onMouseDown={dragStart}
        onMouseMove={dragging}
        onMouseUp={dragEnd}
      >
        <NavButtons>
          <div
            onClick={(e) => {
              e.stopPropagation()
              setIsAppWindowOpen({
                ...isAppWindowOpen,
                isOpen: false,
              })
            }}
          >
            <CloseButton />
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation()
              handleHideScreen()
            }}
          >
            <HideButton />
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation()
              handleFullScreen()
            }}
          >
            <FullScreenButton />
          </div>
        </NavButtons>
        <div
          onClick={(e) => {
            e.stopPropagation()
            setIsOptionBarOpen((prev) => !prev)
          }}
        >
          <MenuButton />
        </div>

        {isOptionBarOpen ? (
          <OptionsBar setIsOptionBarOpen={setIsOptionBarOpen} />
        ) : null}
      </AppCardNav>
      <App>{app ? app : 'Coming soon'}</App>
    </AppWindowWrapper>
  )
}

const MenuButton = styled(HiMenuAlt3)`
  color: ${({ theme }) => theme.bodyColor};
  font-size: 20px;
  cursor: pointer;
`

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
const CloseButton = styled(GiPlainCircle)`
  color: #cb1717;
  font-size: 20px;
  padding-right: 6px;
`

const NavButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const AppCardNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  background: ${({ theme }) => theme.textColor};
`
const App = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow-y: auto;
`

const AppWindowWrapper = styled.div<{
  isFullScreen: boolean
  left: number
  top: number
  isScreenCollapsed: boolean
  zIndex: number
}>`
  position: fixed;
  overflow: hidden;

  ${(props) => {
    if (props.isScreenCollapsed) {
      return `
      opacity: 0;
      `
    } else {
      return `
      opacity: 1;
      `
    }
  }}

  z-index: ${(props) => props.zIndex};
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
     left: ${props.left}px;
     top: ${props.top}px;
     border-radius: 20px;
     `
    }
  }};

  font-size: 35px;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.bodyColor};
`

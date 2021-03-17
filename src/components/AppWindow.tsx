import React, { useEffect, useState, createRef } from 'react'
import styled from 'styled-components'
import { GiPlainCircle } from 'react-icons/gi'
import { HiMenuAlt3 } from 'react-icons/hi'
import { OptionsBar } from './OptionsBar'
import { useDrag } from './hooks/useDrag'
import { Resizer } from './hooks/Resizer'
import { AppOption } from '../modules/appsData'
import { useWindows } from '../providers/WindowsProvider'

type Props = {
  id: string
  isCollapsed: boolean
  onCollapse: (id: string) => void
  onClose: (id: string) => void
  children: JSX.Element
  options?: AppOption[]
  optionModal?: string | null
  setOptionModal?: (title: string) => void
  coordinates: { left: number; top: number }
}

export const AppWindow = ({
  id,
  isCollapsed,
  onCollapse,
  onClose,
  children,
  options,
  setOptionModal,
  optionModal,
  coordinates,
}: Props) => {
  const { dragWindow } = useWindows()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  const navRef = createRef<HTMLDivElement>()
  const drag = useDrag(navRef, id)

  const [fullScreen, setFullScreen] = useState<boolean>(false)
  const handleFullScreen = () => {
    setFullScreen((prev) => !prev)
  }

  const handleHideScreen = () => {
    onCollapse(id)
  }

  const onCloseWindow = () => {
    onClose(id)
  }

  const [isOptionBarOpen, setIsOptionBarOpen] = useState<boolean>(false)
  const currentOpenedOption =
    options && options.find((opt) => opt.title === optionModal)

  return (
    <AppWindowWrapper
      coordinates={drag.coordinates ?? coordinates}
      isFullScreen={fullScreen}
      isScreenCollapsed={isCollapsed}
      ref={navRef}
      onClick={() => {
        dragWindow(
          id,
          drag.coordinates?.left ?? coordinates.left,
          drag.coordinates?.top ?? coordinates.top,
        )
      }}
    >
      <Resizer ref={navRef} />
      <AppCardNav
        onMouseDown={() => {
          drag.callback()
        }}
      >
        <NavButtons>
          <div
            onClick={(e) => {
              e.stopPropagation()
              onCloseWindow()
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
        {options && (
          <>
            <div
              onClick={(e) => {
                e.stopPropagation()
                setIsOptionBarOpen((prev) => !prev)
              }}
            >
              <MenuButton />
            </div>
            {isOptionBarOpen && (
              <OptionsBar
                setIsOptionBarOpen={setIsOptionBarOpen}
                setOptionModal={setOptionModal}
                options={options}
              />
            )}
            {currentOpenedOption && currentOpenedOption.component}
          </>
        )}
      </AppCardNav>
      <App>{children}</App>
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

  @media screen and (max-width: 480px) {
    display: none;
  }
`
const HideButton = styled(GiPlainCircle)`
  color: #cba317;
  font-size: 20px;
  padding-right: 6px;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    display: none;
  }
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
  isScreenCollapsed: boolean
  coordinates: { top: number; left: number }
}>`
  position: fixed;
  overflow: hidden;

  font-size: 35px;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.bodyColor};

  @media screen and (min-width: 480px) {
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

    ${(props) => {
      if (props.isFullScreen) {
        return `
              width: 100% !important;       
              height: 100% !important;         
              left: 0 !important;
              top: 0 !important;
            `
      } else {
        return `
       min-width: 600px;
       min-height: 400px;
       left: ${props.coordinates.left}px;
       top: ${props.coordinates.top}px;
       border-radius: 20px;
       `
      }
    }};
  }

  @media screen and (max-width: 480px) {
    width: 100% !important;
    height: 100% !important;
    left: 0 !important;
    top: 0 !important;
  }
`

import React, { useEffect, useState, createRef } from 'react'
import styled from 'styled-components'
import { GiPlainCircle } from 'react-icons/gi'
import { HiMenuAlt3 } from 'react-icons/hi'
import { OptionsBar } from '../components/OptionsBar'
import { appDataMap } from '../modules/appsData'

type Props = {
  id: string
  isCollapsed: boolean
  onCollapse: (id: string) => void
  onClose: (id: string) => void
}

export const AppWindow = ({ id, isCollapsed, onCollapse, onClose }: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  const [coordinate, setCoordinate] = useState({ top: 50, left: 100 })

  const ref = createRef<HTMLDivElement>()

  useEffect(() => {
    const nav = ref.current
    nav && nav.addEventListener('mousedown', mousedown)
  }, [ref.current])

  const mousedown = (e: any) => {
    console.log('mousedown')
    let prevX = e.clientX
    let prevY = e.clientY

    const mousemove = () => {
      let newX = prevX - e.clientX
      let newY = prevY - e.clientY

      const rect = ref.current?.getBoundingClientRect() || { top: 0, left: 0 }

      setCoordinate({ top: rect.top - newY, left: rect.left - newX })

      prevX = e.clientX
      prevY = e.clientY
    }

    const mouseup = () => {
      window.removeEventListener('mousemove', mousemove)
      window.removeEventListener('mouseup', mouseup)
    }

    window.addEventListener('mousemove', mousemove)
    window.addEventListener('mouseup', mouseup)
  }

  const app = appDataMap[id]

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
  const [optionModal, setOptionModal] = useState<null | string>(null)

  const currentOpenedOption =
    app.options && app.options.find((opt) => opt.optionTitle === optionModal)

  return (
    <AppWindowWrapper
      isFullScreen={fullScreen}
      isScreenCollapsed={isCollapsed}
      left={coordinate.left}
      top={coordinate.top}
    >
      <AppCardNav ref={ref}>
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
            options={app.options}
          />
        )}

        {currentOpenedOption && currentOpenedOption.option}
      </AppCardNav>
      <App>{app.app ? app.app : 'Coming soon'}</App>
      <Resizer />
    </AppWindowWrapper>
  )
}

const Resizer = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: ${({ theme }) => theme.bodyColor};
  bottom: -4px;
  right: -7px;
  cursor: se-resize;
`

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

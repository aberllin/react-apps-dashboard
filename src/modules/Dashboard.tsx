import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AppCard } from '../components/AppCard'
import { appDataIds, appDataMap } from './appsData'
import Toggle from '../components/Toggle'
import background_img from '../images/background_img.jpeg'
import { CurrentTime } from './date/currentTime'
import { CurrentDay } from './date/currentDay'
import { DashboardMenu } from './menu/DashboardMenu'
import { AppWindow } from '../components/AppWindow'

type DashboardProps = {
  theme: string
  changeTheme: () => void
}

export type AppWindowDragTypes = {
  diffX?: number
  diffY?: number
  dragging?: boolean
  styles: {
    left: number
    top: number
  }
}

export const Dashboard = ({ changeTheme, theme }: DashboardProps) => {
  const [background, setBackground] = useState<string>(background_img)

  useEffect(() => {
    const inStorage = localStorage.getItem('background')
    const initialValue = inStorage ? inStorage : background_img
    setBackground(initialValue)
  }, [])

  useEffect(() => {
    localStorage.setItem('background', background)
  }, [background])

  const [openedWindows, setOpenedWindows] = useState<
    { id: string; isCollapsed: boolean }[]
  >([])

  const collapseWindow = (id: string) => {
    const newOpenedWindows = openedWindows.map((window) =>
      window.id === id ? { ...window, isCollapsed: true } : window,
    )
    setOpenedWindows(newOpenedWindows)
  }

  const onClose = (id: string) => {
    setOpenedWindows(openedWindows.filter((window) => window.id !== id))
  }

  const handleFirstWindow = (id: string) => {
    const currentWindow = openedWindows.find((window) => window.id === id)
    const newWindows = openedWindows.filter((window) => window.id !== id)

    setOpenedWindows(
      currentWindow ? [...newWindows, currentWindow] : newWindows,
    )
  }

  const openWindow = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: string,
  ) => {
    if (openedWindows.find((window) => window.id === id)) {
      const newOpenedWindows = openedWindows.map((window) =>
        window.id === id ? { ...window, isCollapsed: false } : { ...window },
      )

      handleFirstWindow(id)

      setOpenedWindows(newOpenedWindows)
    } else {
      setOpenedWindows((prevState) => [
        ...prevState.map((window) => ({ ...window })),
        { id, isCollapsed: false },
      ])
    }
  }

  console.log('openWin', openedWindows)

  return (
    <Container background={background}>
      <Header>
        <Title>Apps Dashboard</Title>
        <Date>
          <CurrentDay />
          <CurrentTime />
        </Date>
      </Header>
      <AppCardsWrapper>
        {appDataIds.map((id) => {
          const app = appDataMap[id]
          return (
            <div onClick={(e) => openWindow(e, id)}>
              <AppCard title={app.title} image={app.image} />
            </div>
          )
        })}
      </AppCardsWrapper>
      <DashboardMenu setBackground={setBackground} />
      <Toggle onClick={changeTheme} theme={theme} />
      {openedWindows &&
        openedWindows.map(({ id, isCollapsed }) => {
          return (
            <AppWindow
              id={id}
              isCollapsed={isCollapsed}
              onCollapse={collapseWindow}
              onClose={onClose}
            />
          )
        })}
    </Container>
  )
}

const Container = styled.div<{ background: string }>`
  height: 100%;
  position: fixed;
  width: 100%;
  background: url(${(props) => props.background}) no-repeat center fixed;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.3);
  padding: 0 15px;
`

const Date = styled.div`
  display: flex;
  font-size: 18px;
`

const Title = styled.div`
  text-align: center;
  font-size: 20px;
`

const AppCardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.16);
  width: 100%;
  max-width: 600px;
  height: 100%;
  max-height: 95px;
  border-radius: 20px;
  position: absolute;
  bottom: 6px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;

  @media screen and (max-width: 834px) {
    max-width: 450px;
    max-height: 70px;
  }
`

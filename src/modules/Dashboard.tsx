import React, { useState } from 'react'
import styled from 'styled-components'
import { AppCard } from '../components/AppCard'
import { appsData } from './appsData'
import Toggle from '../components/Toggle'
import background_img from '../images/background_img.jpeg'
import { CurrentTime } from './date/currentTime'
import { CurrentDay } from './date/currentDay'
import { DashboardMenu } from './menu/DashboardMenu'

interface DashboardProps {
  theme: string
  changeTheme: () => void
}

export const Dashboard = ({ changeTheme, theme }: DashboardProps) => {
  const [background, setBackground] = useState<string>(background_img)

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
        {appsData.map(({ id, title, image, app, options }) => (
          <AppCard
            options={options}
            id={id}
            title={title}
            image={image}
            app={app}
          />
        ))}
      </AppCardsWrapper>
      <DashboardMenu setBackground={setBackground} />
      <Toggle onClick={changeTheme} theme={theme} />
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

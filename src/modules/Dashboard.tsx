import React from 'react'
import styled from 'styled-components'
import { AppCard } from '../components/AppCard'
import { appsData } from './appsData'
import Toggle from '../components/Toggle'
import background_img from '../images/background_img.jpeg'
import { CurrentTime } from './date/currentTime'
import { CurrentDay } from './date/currentDay'
import { HiDotsHorizontal } from 'react-icons/hi'

interface DashboardProps {
  theme: string
  changeTheme: () => void
}

export const Dashboard = ({ changeTheme, theme }: DashboardProps) => {
  return (
    <Container background={background_img}>
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
      <OptionIcon>
        <HiDotsHorizontal />
      </OptionIcon>
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

const OptionIcon = styled.div`
  color: #fcf6ec;
  position: absolute;
  bottom: 18px;
  left: 170px;
  font-size: 45px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.16);
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
`

import React from 'react'
import styled from 'styled-components'
import { AppCard } from '../components/AppCard'
import { appsData } from './appsData'
import Toggle from '../components/Toggle'

interface DashboardProps {
  theme: string
  changeTheme: () => void
}

export const Dashboard = ({ changeTheme, theme }: DashboardProps) => {
  return (
    <Container>
      <Header>
        <Title>Apps Dashboard</Title>
        <Toggle onClick={changeTheme} theme={theme} />
      </Header>

      <AppCardsWrapper>
        {appsData.map(({ id, title, image, app, options }) => (
          <CardWrapper>
            <AppCard
              options={options}
              id={id}
              title={title}
              image={image}
              app={app}
            />
          </CardWrapper>
        ))}
      </AppCardsWrapper>
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  padding: 50px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Title = styled.div`
  font-size: 40px;
  text-align: center;
  width: calc(100% / 3);

  @media screen and (max-width: 768px) {
    width: calc(100% / 2);
    font-size: 30px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-bottom: 20px;
  }
`

const AppCardsWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 20px;
`

const CardWrapper = styled.div`
  width: calc(100% / 5);

  @media screen and (max-width: 1199px) {
    width: calc(100% / 5);
  }

  @media screen and (max-width: 992px) {
    width: calc(100% / 4);
  }

  @media screen and (max-width: 768px) {
    width: calc(100% / 3);
  }

  @media screen and (max-width: 600px) {
    width: calc(100% / 2);
  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`

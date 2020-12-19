import React from 'react'
import styled from 'styled-components'
import { AppCard } from '../components/AppCard'
import forest from '../images/forest.jpg'
import forest1 from '../images/forest1.jpg'
import forest2 from '../images/forest2.jpg'

const appsData = [
  { id: 1, title: 'Calculator', image: forest },
  { id: 2, title: 'Calculator', image: forest },
  { id: 3, title: 'Calculator', image: forest },
  { id: 4, title: 'Calculator', image: forest },
  { id: 5, title: 'Calculator', image: forest },
  { id: 6, title: 'Timer', image: forest1 },
  { id: 7, title: 'Timer', image: forest1 },
  { id: 8, title: 'Timer', image: forest1 },
  { id: 9, title: 'Timer', image: forest1 },
  { id: 10, title: 'Timer', image: forest1 },
  { id: 11, title: 'Weather', image: forest2 },
  { id: 12, title: 'Weather', image: forest2 },
  { id: 13, title: 'Weather', image: forest2 },
  { id: 14, title: 'Weather', image: forest2 },
  { id: 15, title: 'Weather', image: forest2 },
]

const Container = styled.div`
  padding: 50px;
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
    font-size: 25px;
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

export const Dashboard = () => {
  return (
    <Container>
      <Title>Apps Dashboard</Title>
      <AppCardsWrapper>
        {appsData.map((app) => (
          <CardWrapper>
            <AppCard key={app.id} title={app.title} image={app.image} />
          </CardWrapper>
        ))}
      </AppCardsWrapper>
    </Container>
  )
}

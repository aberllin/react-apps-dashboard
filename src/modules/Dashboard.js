import React from 'react'
import styled from 'styled-components'
import { AppCard } from '../components/AppCard'
import appsData from './appsData.js'
import PropTypes from 'prop-types'
import Toggle from '../components/Toggle'

export const Dashboard = () => {
  const [toggled, setToggled] = React.useState(false)
  const handleClick = () => {
    setToggled((t) => !t)
  }
  return (
    <Container toggled={toggled}>
      <Header>
        <Title toggled={toggled}>Apps Dashboard</Title>
        <Toggle onClick={handleClick} toggled={toggled} />
      </Header>

      <AppCardsWrapper>
        {appsData.map(({ id, title, image }) => (
          <CardWrapper toggled={toggled}>
            <AppCard key={id} title={title} image={image} />
          </CardWrapper>
        ))}
      </AppCardsWrapper>
    </Container>
  )
}

Dashboard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
}

const Container = styled.div`
  padding: 50px;
  background: #ececec;
  ${(props) => {
    if (props.toggled) {
      return `
            background: black;  
            `
    }
  }};
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.div`
  font-size: 40px;
  text-align: center;
  width: calc(100% / 3);

  ${(props) => {
    if (props.toggled) {
      return `
            color: #ecf0f3;  
            `
    }
  }};

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

  ${(props) => {
    if (props.toggled) {
      return `
            color: #ecf0f3;  
            `
    }
  }}

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

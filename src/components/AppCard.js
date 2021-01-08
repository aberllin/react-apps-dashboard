import React from 'react'
import styled from 'styled-components'
import { Route, Link } from 'react-router-dom'
import { AppWindow } from './AppWindow'

export const AppCard = ({ image, title, app }) => {
  const urlTitle = title
    .replace(/ /gs, '_')
    .replace(/[,.:]+/g, '')
    .toLowerCase()

  return (
    <CardContainer>
      <StyledLink to={urlTitle}>
        <Image background={image} />
        {title}
      </StyledLink>
      <Route
        path={`/${urlTitle}`}
        render={(props) => <AppWindow {...props} app={app} title={title} />}
      />
    </CardContainer>
  )
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};
`

export const AppCard = ({ image, title }) => {
  return (
    <CardContainer>
      <Image background={image} />
      <div>{title}</div>
    </CardContainer>
  )
}

const Image = styled.div`
  border: 1px solid #000;
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  border: 1px solid #faf4f4;
  box-shadow: ${({ theme }) => theme.cardShadow};
  width: 150px;
  height: 150px;
  margin-bottom: 5px;
  transition: ease-in-out 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 30%;
  }
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px 10px 20px 10px;
`

import React from 'react'
import styled from 'styled-components'
import { Link, Route } from 'react-router-dom'
import { IoCloseCircleOutline } from 'react-icons/io5'

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

const AppWindow = ({ title, app }) => {
  return (
    <AppWindowWrapper>
      <AppCardNav>
        <div>{title}</div>
        <Link to="/">
          <CloseIcon />
        </Link>
      </AppCardNav>
      <div>{app}</div>
    </AppWindowWrapper>
  )
}

const CloseIcon = styled(IoCloseCircleOutline)`
  color: ${({ theme }) => theme.textColor};
  transition: ease 0.2s;

  &:hover {
    color: red;
  }
`

const AppCardNav = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 50px;
`

const AppWindowWrapper = styled.div`
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  font-size: 35px;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.bodyColor};
`

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

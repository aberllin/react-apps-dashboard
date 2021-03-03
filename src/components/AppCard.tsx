import React from 'react'
import styled from 'styled-components'
import { Route, Link } from 'react-router-dom'
import { AppWindow } from './app_window/AppWindow'
import { AppType } from '../modules/appsData'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

export const AppCard = ({ id, image, title, app, options }: AppType) => {
  const urlTitle = title
    .replace(/ /gs, '_')
    .replace(/[,.:]+/g, '')
    .toLowerCase()

  return (
    <CardContainer>
      <StyledLink to={urlTitle}>
        <Tooltip arrow={false} content={title}>
          <Image>
            <Icon src={image} />
          </Image>
        </Tooltip>
      </StyledLink>
      <Route
        path={`/${urlTitle}`}
        render={(props) => (
          <AppWindow {...props} app={app} key={id} options={options} />
        )}
      />
    </CardContainer>
  )
}

const Tooltip = styled(Tippy)`
  color: #fcf6ec;
  background: transparent;
  padding-bottom: 10px;
`

const Icon = styled.img`
  width: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    color: #1ccbb1;
  }
`

const Image = styled.div`
  position: relative;
  background: #fcf6ec;
  background-repeat: no-repeat;
  background-size: cover;
  width: 75px;
  height: 75px;
  transition: ease 0.2s;
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    width: 80px;
    height: 80px;
    transform: translateY(-10px);
  }

  @media screen and (max-width: 834px) {
    width: 50px;
    height: 50px;
    border-radius: 15px;

    &:hover {
      width: 60px;
      height: 60px;
      transform: translateY(-6px);
    }
  }
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  padding: 5px;
`

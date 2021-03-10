import React, { useState } from 'react'
import styled from 'styled-components'
import { AppWindow } from './AppWindow'
import { AppType } from '../modules/appsData'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

export interface AppWindowDragTypes {
  diffX?: number
  diffY?: number
  dragging?: boolean
  styles: {
    left: number
    top: number
  }
}

export interface AppWindowState {
  isOpen: boolean
  isCollapsed: boolean
}

export const AppCard = ({ image, title, app, options }: AppType) => {
  const [isAppWindowOpen, setIsAppWindowOpen] = useState<AppWindowState>({
    isOpen: false,
    isCollapsed: false,
  })

  const [appWindowDrag, setAppWindowDrag] = useState<AppWindowDragTypes>({
    diffX: 0,
    diffY: 0,
    dragging: false,
    styles: {
      left: 200,
      top: 200,
    },
  })

  const [zIndex, setZIndex] = useState<number>(100)

  return (
    <CardContainer>
      <Tooltip arrow={false} content={title}>
        <Image
          onClick={() => {
            setIsAppWindowOpen({
              ...isAppWindowOpen,
              isOpen: true,
              isCollapsed: false,
            })
            setZIndex(1000)
          }}
        >
          <Icon src={image} />
        </Image>
      </Tooltip>
      {isAppWindowOpen.isOpen ? (
        <AppWindow
          app={app}
          options={options}
          zIndex={zIndex}
          isAppWindowOpen={isAppWindowOpen}
          setIsAppWindowOpen={setIsAppWindowOpen}
          appWindowDrag={appWindowDrag}
          setAppWindowDrag={setAppWindowDrag}
          setZIndex={setZIndex}
        />
      ) : null}
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

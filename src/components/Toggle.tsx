import React from 'react'
import styled from 'styled-components'

interface Props {
  onClick: () => void
  theme: string
}

function Toggle({ onClick, theme }: Props) {
  return (
    <ButtonWrapper>
      <ToggleButton onClick={onClick} toggled={theme}>
        <Circle toggled={theme} />
      </ToggleButton>
    </ButtonWrapper>
  )
}

export default Toggle

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 35px;
  right: 165px;

  @media screen and (max-width: 1024px) {
    right: 95px;
  }

  @media screen and (max-width: 834px) {
    right: 55px;
    bottom: 25px;
  }
`

const ToggleButton = styled.div<{ toggled: string }>`
  height: 40px;
  width: 80px;
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  background: #fcf6ec;
  ${(props) => {
    if (props.toggled === 'dark') {
      return `
            background: #2E3A59;
          `
    }
  }}
`

const Circle = styled.div<{ toggled: string }>`
  border-radius: 50%;
  background: #2e3a59;
  position: absolute;
  width: 32px;
  height: 32px;
  top: 4px;
  left: 6px;
  transition: ease-in 0.2s;
  ${(props) => {
    if (props.toggled === 'dark') {
      return `
            background: #FCF6EC;
            transform: translate(37px, 0);          
          `
    }
  }};
`

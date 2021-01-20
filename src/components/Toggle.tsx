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
  padding-right: 60px;

  @media screen and (max-width: 1199px) {
    padding-right: 40px;
  }

  @media screen and (max-width: 992px) {
    padding-right: 30px;
  }

  @media screen and (max-width: 600px) {
    padding-right: 0;
  }
`

const ToggleButton = styled.div<{toggled: string}>`
  height: 40px;
  width: 80px;
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  background: #1ccbb1;
  ${(props) => {
    if (props.toggled === 'dark') {
      return `
            background: white;
          `
    }
  }}
`

const Circle = styled.div<{toggled: string}>`
  border-radius: 50%;
  background: #ececec;
  position: absolute;
  width: 32px;
  height: 32px;
  top: 4px;
  left: 6px;
  transition: ease-in 0.2s;
  ${(props) => {
    if (props.toggled === 'dark') {
      return `
            background: #181a18;
            transform: translate(37px, 0);          
          `
    }
  }};
`

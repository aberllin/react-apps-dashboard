import React from 'react'
import styled from 'styled-components'

function Toggle({ onClick, theme }) {
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
    padding-right: 20px;
  }
`

const ToggleButton = styled.div`
  height: 40px;
  width: 80px;
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  box-shadow: inset 2px 2px 5px #d4dbe7, inset -2px -2px 5px #fdfefe;
  background: #1ccbb1;
  ${(props) => {
    if (props.toggled === 'dark') {
      return `
            background: white;
          `
    }
  }}
`

const Circle = styled.div`
  border-radius: 50%;
  background: #ececec;
  position: absolute;
  width: 32px;
  height: 32px;
  top: 4px;
  left: 6px;
  box-shadow: 2px 2px 5px #d4dbe7, -2px -2px 5px #fdfefe;
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

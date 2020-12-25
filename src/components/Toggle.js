import React from 'react'
import styled from 'styled-components'

function Toggle({ toggled, onClick }) {
  return (
    <ToggleButton onClick={onClick} toggled={toggled}>
      <Circle toggled={toggled} />
    </ToggleButton>
  )
}

export default Toggle

const ToggleButton = styled.div`
  height: 40px;
  width: 80px;
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  background: #ecf0f3;
  box-shadow: inset 2px 2px 5px #d4dbe7, inset -2px -2px 5px #fdfefe;
`

const Circle = styled.div`
  border-radius: 50%;
  background: #1ccbb1;
  position: absolute;
  width: 32px;
  height: 32px;
  top: 4px;
  left: 6px;
  box-shadow: 2px 2px 5px #d4dbe7, -2px -2px 5px #fdfefe;
  transition: ease-in 0.2s;
  ${(props) => {
    if (props.toggled) {
      return `
            background: #1CCBB1;
            transform: translate(37px, 0);          
          `
    }
  }};
`

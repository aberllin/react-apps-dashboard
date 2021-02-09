import React from 'react'
import styled from 'styled-components'

export const ModalWindow = () => {
  return (
    <>
      <ModalBackground />
    </>
  )
}

const ModalBackground = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  backdrop-filter: blur(6px);
`

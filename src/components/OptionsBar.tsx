import React from 'react'
import styled from 'styled-components'
import { IoMdClose } from 'react-icons/io'

interface Props {
  setIsOptionBarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const OptionsBar = ({ setIsOptionBarOpen }: Props) => {
  return (
    <OptionsBarBackground>
      <CloseIcon onClick={() => setIsOptionBarOpen(false)}>
        <IoMdClose />
      </CloseIcon>
      <OptionsWrapper>
        <Options>Share</Options>
        <Options>Delete App</Options>
      </OptionsWrapper>
    </OptionsBarBackground>
  )
}

const OptionsBarBackground = styled.div`
  color: red;
  background: ${({ theme }) => theme.textColor};
  width: 100%;
  height: 100%;
  max-width: 250px;
  z-index: 10432059205;
  position: absolute;
  right: 0;
  bottom: 0;
`

const CloseIcon = styled.div`
  font-size: 25px;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.bodyColor};
  transition: all ease-out 0.2s;

  &:hover {
    color: #cb1717;
  }
`

const OptionsWrapper = styled.div`
  margin-top: 60px;
`

const Options = styled.div`
  font-size: 25px;
  color: ${({ theme }) => theme.bodyColor};
`

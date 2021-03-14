import React from 'react'
import styled from 'styled-components'
import { IoMdClose } from 'react-icons/io'
import { OptionType, Option } from '../modules/appsData'

type Props = {
  setIsOptionBarOpen: React.Dispatch<React.SetStateAction<boolean>>
  setOptionModal: (title: string) => void
  options?: {
    title: string
    onClick: () => void
  }[]
}

export const OptionsBar = ({
  setIsOptionBarOpen,
  setOptionModal,
  options,
}: Props) => {
  const handleOptionClick = (option: {
    title: string
    onClick: () => void
  }) => {
    option.onClick()
    setIsOptionBarOpen(false)
  }

  return (
    <OptionsBarBackground>
      <CloseIcon onClick={() => setIsOptionBarOpen(false)}>
        <IoMdClose />
      </CloseIcon>
      <OptionsWrapper>
        {options?.map((opt) => (
          <OptionItem key={opt.title} onClick={() => handleOptionClick(opt)}>
            {opt.title}
          </OptionItem>
        ))}
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
  display: flex;
  flex-direction: column;
  align-items: center;
`

const OptionItem = styled.div`
  font-size: 25px;
  color: ${({ theme }) => theme.bodyColor};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: green;
  }
`

import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { OptionWindow } from './OptionModal'
import { AppType } from '../../../modules/appsData'
import { useOutsideClick } from '../../hooks/useOutsideClick'

interface Props {
  isOpen: boolean
  options: AppType['options']
  setOpenMenuButton: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuModal = ({ isOpen, options, setOpenMenuButton }: Props) => {
  const ref = useRef(null)

  const [openOptionModal, setOpenOptionModal] = useState<boolean>(false)

  useOutsideClick(ref, () => {
    return isOpen ? setOpenMenuButton(false) : null
  })

  return (
    <>
      {isOpen ? (
        <Background>
          <ul ref={ref}>
            {options
              ? options.map((option) => (
                  <div>
                    <StyledLi onClick={() => setOpenOptionModal(true)}>
                      {option.optionTitle}
                    </StyledLi>
                    <OptionWindow
                      key={option.optionTitle}
                      isOptionModalOpen={openOptionModal}
                      menuOption={option.option}
                      title={option.optionTitle}
                      setOpenOptionModal={setOpenOptionModal}
                    />
                  </div>
                ))
              : null}
          </ul>
        </Background>
      ) : null}
    </>
  )
}

const Background = styled.div`
  position: fixed;
  border: 1px solid #c4c4c4;
  z-index: 4;
  overflow: auto;
  list-style-type: none;
  font-size: 20px;
  width: 110px;
  height: 140px;
  left: 105px;
  top: 570px;
`

const StyledLi = styled.li`
  margin: 5px;
  cursor: pointer;
  &:hover {
    background: gray;
  }
`

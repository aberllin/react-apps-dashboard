import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { OptionWindow } from './OptionModal'
import { Option } from '../../../modules/appsData'
import { useOutsideClick } from '../../hooks/useOutsideClick'

interface Props {
  isOpen: boolean
  options: Option[]
  setOpenMenuButton: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuModal = ({ isOpen, options, setOpenMenuButton }: Props) => {
  const ref = useRef(null)

  const [currentOptionModal, setCurrentOptionModal] = useState<string | null>(
    null,
  )
  const currentOption = options.find(
    (option) => option.optionTitle === currentOptionModal,
  )

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
                    <StyledLi
                      onClick={() => setCurrentOptionModal(option.optionTitle)}
                    >
                      {option.optionTitle}
                    </StyledLi>
                  </div>
                ))
              : null}

            {Boolean(currentOptionModal) && (
              <OptionWindow
                modalChildren={currentOption!.option}
                title={currentOption!.optionTitle}
                onClose={() => setCurrentOptionModal(null)}
              />
            )}
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

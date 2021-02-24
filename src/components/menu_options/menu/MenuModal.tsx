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
  font-size: 20px;
  width: 200px;
  height: 250px;
  left: 105px;
  padding: 15px;
  top: 450px;
  border-radius: 20px;
`

const StyledLi = styled.li`
  display: flex;
  margin: 5px;
  cursor: pointer;
  list-style-type: none;

  &:hover {
    background: #1ccbb1;
  }
`

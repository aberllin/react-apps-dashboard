import React, { useState } from 'react'
import styled from 'styled-components'
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi'
import { MenuModal } from './MenuModal'
import { AppType } from '../../../modules/appsData'

interface Props {
  options: AppType['options']
}

export const Menu = ({ options }: Props) => {
  const [openMenuButton, setOpenMenuButton] = useState<boolean>(false)

  const onClickMenu = () => {
    setOpenMenuButton((prev) => !prev)
  }

  return (
    <>
      <div onClick={onClickMenu}>
        <MenuIcon active={openMenuButton} />
      </div>
      <MenuModal
        options={options}
        isOpen={openMenuButton}
        setOpenMenuButton={setOpenMenuButton}
      />
    </>
  )
}

const MenuIcon = styled(HiOutlineDotsCircleHorizontal)<{ active: boolean }>`
  position: fixed;
  color: ${({ theme }) => theme.textColor};
  transition: ease 0.2s;
  cursor: pointer;
  bottom: 60px;
  left: 60px;
  ${(props) => {
    if (props.active) {
      return `
      color: #1ccbb1;
                    `
    }
  }}
  &:hover {
    color: #1ccbb1;
  }
`

import React, { useState } from 'react'
import styled from 'styled-components'
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi'
import { MenuModal } from './MenuModal'
import { Option } from '../../../modules/appsData'

interface Props {
  options: Option[]
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
  transition: ease 0.2s;
  cursor: pointer;
  bottom: 60px;
  left: 60px;
  color: ${(props) => (props.active ? '#1ccbb1' : props.theme.textColor)};
  &:hover {
    color: #1ccbb1;
  }
`

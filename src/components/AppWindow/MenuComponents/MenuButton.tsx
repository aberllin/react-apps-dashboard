import React, { useState } from 'react'
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi'
import { MenuModal } from './MenuModal'
import styled from 'styled-components'
import { ShareModal } from './MenuOptions/ShareModal'
export const MenuButton = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showShareModal, setShowShareModal] = useState<boolean>(false)

  const openMenu = () => {
    setShowMenu(true)
  }

  return (
    <MenuWrapper>
      <div onClick={openMenu}>
        <MenuIcon active={showMenu} />
      </div>
      <MenuModal
        openShareModal={() => setShowShareModal(true)}
        open={showMenu}
        onClose={() => setShowMenu(false)}
      />
      <ShareModal
        isOpen={showShareModal}
        setShowShareModal={setShowShareModal}
      />
    </MenuWrapper>
  )
}

const MenuIcon = styled(HiOutlineDotsCircleHorizontal)<{ active: boolean }>`
  position: fixed;
  bottom: 60px;
  left: 60px;
  color: ${({ theme }) => theme.textColor};
  transition: ease 0.2s;
  cursor: pointer;

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

const MenuWrapper = styled.div`
  position: relative;
`

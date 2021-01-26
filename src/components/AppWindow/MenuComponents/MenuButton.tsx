import React, {useState} from 'react'
import {HiOutlineDotsCircleHorizontal} from 'react-icons/hi'
import {MenuModal} from './MenuModal'
import styled from 'styled-components'



export const MenuButton = () => {
    const [showMenu, setShowMenu ] = useState<boolean>(false)

    const openMenu = () => {
        setShowMenu(prev => !prev)
    }

 return (   
        <MenuWrapper >
            <div onClick={openMenu}>< MenuIcon active={showMenu}/></div>
            <MenuModal  open={showMenu} onClose={() => setShowMenu(false)} />
         </MenuWrapper>
 )
}

const MenuIcon = styled(HiOutlineDotsCircleHorizontal)<{active: boolean}>`
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
import React, {useState} from 'react'
import {HiOutlineDotsCircleHorizontal} from 'react-icons/hi'
import {MenuModal} from './MenuModal'
import styled from 'styled-components'



export const MenuButton = () => {
    const [showMenu, setShowMenu ] = useState(false)

    const openMenu = () => {
        setShowMenu(prev => !prev)
    }

 return (   
        <div>
            <div onClick={openMenu}><MenuIcon /></div>
            <MenuModal  showMenu={showMenu} setShowMenu={setShowMenu} />
         </div>
 )
}

const MenuIcon = styled(HiOutlineDotsCircleHorizontal)`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin: 180px 60px;
    color: ${({ theme }) => theme.textColor};
    transition: ease 0.2s;
    cursor: pointer;
    

     &:hover {
    color: #1ccbb1;
    }
`
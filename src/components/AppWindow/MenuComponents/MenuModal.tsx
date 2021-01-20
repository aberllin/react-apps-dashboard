import React from 'react'
import styled from 'styled-components'


export const MenuModal = ({showMenu, setShowMenu}: any) => {
    return (
        <>
            {showMenu ? 
                <Background>
                        <ul>
                            <li>Share</li>
                            <li>Edit</li>
                            <li>Delete</li>
                        </ul>
                        <div onClick={() => setShowMenu}></div>
                </Background>
             : null}
        </>
    )
}

const Background = styled.div`
position: fixed;
  z-index: 4;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`
import React, { useEffect } from 'react'
import styled from 'styled-components'

interface Props {
    open: boolean
    onClose: () => void
}

export const MenuModal = ({open, onClose}: Props) => {
    const modalRef = React.createRef<HTMLInputElement>();

    const onClickOutside = (e: Event) => {
        if (modalRef.current && modalRef.current.contains(e.target as Node)) {
            return;
        }
        if (open) return onClose()
    }

    useEffect(() => {
      if (open)  {
        document.addEventListener("click", onClickOutside);
      } 

        return () => {
            document.removeEventListener("click", onClickOutside);
          };
    }, [onClickOutside, open]) 

    return (
        <>
            {open ? 
                <Background ref={modalRef}>
                        <StyledUL>
                            <li>Share</li>
                        </StyledUL>
                        <div onClick={onClose}></div>
                </Background>
             : null}
        </>
    )
}

const Background = styled.div`
  position: fixed;
  border: 1px solid #c4c4c4;
  z-index: 4;
  left: 105px;
  top: 570px;
  overflow: auto;
  list-style-type: none;
  font-size: 20px;
  width: 110px;
  height: 140px
`

const StyledUL = styled.ul`
    margin: 5px;
    cursor: pointer;

    &:hover {
        background: gray;
    }
`
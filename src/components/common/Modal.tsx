import React, { useRef } from 'react'
import styled from 'styled-components'
import { IoMdClose } from 'react-icons/io'
import { useOutsideClick } from '../hooks/useOutsideClick'

type Props = {
  width: string
  height: string
  onClose: () => void
  title: string
  children: JSX.Element
  top: string
  left: string
}

export const Modal = ({
  children,
  width,
  height,
  onClose,
  title,
  top,
  left,
}: Props) => {
  const ref = useRef(null)

  useOutsideClick(ref, () => {
    onClose()
  })
  return (
    <Wrapper
      width={parseInt(width)}
      height={parseInt(height)}
      left={parseInt(left)}
      top={parseInt(top)}
      ref={ref}
    >
      <NavWrapper>
        <Title>{title}</Title>
        <CloseIcon onClick={onClose}>
          <IoMdClose />
        </CloseIcon>
      </NavWrapper>
      {children}
    </Wrapper>
  )
}

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
`

const CloseIcon = styled.div`
  transition: ease 0.2s;
  cursor: pointer;
  &:hover {
    color: #cb1717;
  }
`

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: #2e3a59;
`
const Wrapper = styled.div<{
  width: number
  height: number
  left: number
  top: number
}>`
  position: fixed;
  background: white;
  border: 5px solid #2e3a59;
  border-radius: 20px;
  padding: 20px;
  z-index: 10;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  left: ${(props) => props.left}%;
  top: ${(props) => props.top}%;
`

import React from 'react'
import styled from 'styled-components'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { ModalWindow } from '../common/ModalWindow'

interface Props {
  title: string
  modalChildren: JSX.Element
  onClose: () => void
}

export const OptionWindow = ({ modalChildren, title, onClose }: Props) => {
  return (
    <>
      <ModalWindow />
      <ModalWrapper>
        <HeadWrapper>
          <Title>{title}</Title>
          <CloseIcon onClick={onClose} />
        </HeadWrapper>
        <div>{modalChildren}</div>
      </ModalWrapper>
    </>
  )
}

const ModalWrapper = styled.div`
  position: fixed;
  background: white;
  border: 5px solid gray;
  width: 500px;
  height: 300px;
  left: 50%;
  top: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);

  overflow: auto;

  @media screen and (max-width: 820px) {
    width: 400px;
    height: 250px;
  }

  @media screen and (max-width: 600px) {
    width: 300px;
  }
`

const HeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  color: #181a18;
`
const Title = styled.div`
  font-size: 30px;
`
const CloseIcon = styled(IoCloseCircleOutline)`
  color: #181a18;
  cursor: pointer;
  font-size: 30px;
  &:hover {
    color: red;
  }
`

import React from 'react'
import styled from 'styled-components'
import { Modal } from '../../../common/Modal'

type Props = {
  onClose: () => void
}

export const ClearFavorites = ({ onClose }: Props) => {
  const handleClear = () => {
    localStorage.removeItem('favorites')
  }
  return (
    <Modal
      height="300"
      width="500"
      onClose={onClose}
      title="Clear favorites"
      top="30"
      left="30"
    >
      <>
        <ClearMessage>Do you want to clear your favorites?</ClearMessage>
        <ButtonsWrapper>
          <Button
            onClick={() => {
              onClose()
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleClear()
              onClose()
            }}
          >
            Clear
          </Button>
        </ButtonsWrapper>
      </>
    </Modal>
  )
}

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ClearMessage = styled.div`
  font-size: 25px;
`
const Button = styled.div`
  outline: none;
  font-size: 17px;
  border: none;
  padding: 7px 18px;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  background: gainsboro;
  cursor: pointer;
  &:hover {
    background: red;
    color: white;
  }
  &:focus {
    color: red;
  }

  @media screen and (max-width: 600px) {
    font-size: 20px;
    margin: 20px auto;
  }

  @media screen and (max-width: 400px) {
    font-size: 15px;
    margin: 10px auto;
  }
`

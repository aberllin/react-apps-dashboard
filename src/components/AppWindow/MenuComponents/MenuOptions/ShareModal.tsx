import React, { useState } from 'react'
import styled from 'styled-components'
import { ShareForm } from './ShareForm'
import { FormSuccess } from './FormSuccess'
import { IoCloseCircleOutline } from 'react-icons/io5'

interface Props {
  isOpen: boolean
  setShowShareModal: (value: boolean) => void
}

export const ShareModal = ({ isOpen, setShowShareModal }: Props) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [errors, setErrors] = useState<string>('')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()

    if (!inputValue) {
      setErrors('Email required')
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputValue)) {
      setErrors('Email address is invalid')
    } else {
      setIsSuccess(true)
    }
  }

  return (
    <>
      {isOpen ? (
        <>
          <ModalBackground />
          <ModalWrapper>
            <HeadWrapper>
              <Title>Share my Todo List</Title>
              <CloseIcon onClick={() => setShowShareModal(false)} />
            </HeadWrapper>
            {!isSuccess ? (
              <ShareForm
                errors={errors}
                value={inputValue}
                onInputChange={handleChange}
                onSubmitButton={onSubmit}
                setShowShareModal={setShowShareModal}
              />
            ) : (
              <FormSuccess />
            )}
          </ModalWrapper>
        </>
      ) : null}
    </>
  )
}

const ModalBackground = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  filter: blur(5px);
`

const ModalWrapper = styled.div`
  position: fixed;
  color: ${({ theme }) => theme.bodyColor};
  background: white;
  border: 5px solid gray;
  width: 500px;
  height: 300px;
  left: 50%;
  top: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
`

const HeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  color: ${({ theme }) => theme.textColor};
`

const Title = styled.div`
  font-size: 30px;
`

const CloseIcon = styled(IoCloseCircleOutline)`
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;

  &:hover {
    color: red;
  }
`

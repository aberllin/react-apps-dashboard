import React from 'react'
import styled from 'styled-components'
import { RiSendPlaneFill } from 'react-icons/ri'

type Props = {
  onSubmitButton: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  errors: string
  onClose: () => void
}

export const ShareForm = ({
  value,
  onInputChange,
  onSubmitButton,
  errors,
  onClose,
}: Props) => {
  return (
    <Form>
      <StyledInput
        name="email"
        type="email"
        placeholder="Enter email to send your Todo List"
        value={value}
        onChange={onInputChange}
      />
      {errors ? <ErrorMessage>{errors}</ErrorMessage> : null}
      <ButtonWrapper>
        <Button
          onClick={() => {
            onClose()
          }}
        >
          Cancel
        </Button>
        <Button type="submit" onClick={onSubmitButton}>
          <RiSendPlaneFill />
          Send
        </Button>
      </ButtonWrapper>
    </Form>
  )
}

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ButtonWrapper = styled.div`
  display: flex;
  padding: 25px 0;
  justify-content: center;
`

const Button = styled.button`
  outline: none;
  font-size: 17px;
  border: none;
  padding: 7px 18px;
  display: flex;
  cursor: pointer;
  margin: 0 35px;
  &:hover {
    background: gray;
    color: white;
  }
  &:focus {
    color: green;
  }
  border-radius: 15px;
`

const StyledInput = styled.input`
  outline: 0;
  border: 0;
  width: 70%;
  border-radius: 20px;
  height: 48px;
  box-sizing: border-box;
  font-size: 14px;
  padding: 15px;
  margin-top: 15px;
  background: #c4c4c4;
`

const ErrorMessage = styled.p`
  font-size: 10px;
  margin-top: 0.5rem;
  color: #f00e0e;
`

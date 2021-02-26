import React from 'react'
import styled from 'styled-components'
import { RiSendPlaneFill } from 'react-icons/ri'

interface Props {
  onSubmitButton: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  errors: string
}

export const ShareForm = ({
  value,
  onInputChange,
  onSubmitButton,
  errors,
}: Props) => {
  return (
    <form>
      <StyledInput
        name="email"
        type="email"
        placeholder="Enter email to send your Todo List"
        value={value}
        onChange={onInputChange}
      />
      {errors ? <ErrorMessage>{errors}</ErrorMessage> : null}
      <ButtonWrapper>
        <Button type="submit" onClick={onSubmitButton}>
          <RiSendPlaneFill />
          Send
        </Button>
      </ButtonWrapper>
    </form>
  )
}

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
`

const StyledInput = styled.input`
  outline: 0;
  border: 2px solid #c4c4c4;
  width: 70%;
  height: 48px;
  box-sizing: border-box;
  font-size: 14px;
  padding: 15px;
  margin-top: 15px;
`

const ErrorMessage = styled.p`
  font-size: 10px;
  margin-top: 0.5rem;
  color: #f00e0e;
`

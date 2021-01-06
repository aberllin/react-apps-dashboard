import React from 'react'
import { FiPlus } from 'react-icons/fi'
import styled from 'styled-components'

export const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }

  const submitTodoHandler = (e) => {
    e.preventDefault()
    setTodos([...todos, { text: inputText, id: Date.now(), complete: false }])
    setInputText('')
    console.log(e)
  }

  return (
    <FormWrapper>
      <StyledInput
        value={inputText}
        type="text "
        placeholder="Enter your note here..."
        onChange={inputTextHandler}
      />
      <SubmitButton onClick={submitTodoHandler} type="submit">
        <AddIcon />
      </SubmitButton>
    </FormWrapper>
  )
}

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: auto;
`

const StyledInput = styled.input`
  outline: 0;
  background: #c4c4c4;
  width: 85%;
  border: 0;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
`

const SubmitButton = styled.button`
  background: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.bodyColor};
  cursor: pointer;
  display: flex;
  justify-content: center
  align-items: center;
  padding: 11px;
  width: 15%;
  outline: 0;
  border: 0;
  box-sizing: border-box;

  &:hover {
    opacity: 0.5;
  }
`

const AddIcon = styled(FiPlus)`
  font-size: 25px;
`

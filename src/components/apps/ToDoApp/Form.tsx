import React from 'react'
import { FiPlus } from 'react-icons/fi'
import styled from 'styled-components'

export interface Todo {
    text: string,
    id: number
    complete: boolean
}

interface Props {
  inputText: string
  setInputText: (value: string) => void
  todos: Todo[]
  setTodos: (value: Todo[]) => void
}

export const Form = ({ inputText, setInputText, todos, setTodos } : Props) => {
  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!inputText && e.target.value === ' ') {
      return false
    } else {
      setInputText(e.target.value)
    }
  }

  const submitTodoHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (inputText === '') {
      return ''
    } else {
      setTodos([...todos, { text: inputText, id: Date.now(), complete: false }])
    }
    setInputText('')
  }

  const keyPressHandler = (e : React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submitTodoHandler(e)
    }
  }
  return (
    <FormWrapper>
      <StyledInput
        value={inputText}
        type="text"
        placeholder="Enter your note here..."
        autoFocus
        onChange={inputTextHandler}
        onKeyPress={keyPressHandler}
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
  height: 48px;
  box-sizing: border-box;
  font-size: 14px;
  padding: 15px;
`

const SubmitButton = styled.button`
  background: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.bodyColor};
  cursor: pointer;
  display: flex;
  height: 48px;
  justify-content: center;
  align-items: center;
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
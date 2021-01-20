import React, { useState } from 'react'
import { Form } from './Form'
import { ToDoList } from './ToDoList'
import styled from 'styled-components'
import {Todo} from './Form'


export const ToDoApp = () => {
  const [inputText, setInputText] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  return (
    <AppWrapper>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <ToDoList todos={todos} setTodos={setTodos} />
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  padding: 6% 0 0;
  margin: auto;
  width: 400px;

  @media screen and (max-width: 600px) {
    width: 300px;
    padding: 8% 8%;
  }
`

import React, { useState, useEffect } from 'react'
import { Form } from './Form'
import { ToDoList } from './ToDoList'
import styled from 'styled-components'
import {Todo} from './Form'


export const ToDoApp = () => {
  const [inputText, setInputText] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    const inStorage = localStorage.getItem('todos')
    const initialValue = inStorage ? JSON.parse(inStorage) : []
    setTodos(initialValue)
  }, [])


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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
  width: 750px;

  @media screen and (max-width: 600px) {
    width: 300px;
    padding: 8% 8%;
  }
`

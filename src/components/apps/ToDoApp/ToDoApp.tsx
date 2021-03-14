import React, { useState, useEffect } from 'react'
import { Form } from './Form'
import { ToDoList } from './ToDoList'
import styled from 'styled-components'
import { Todo } from './Form'
import { AppWindow } from '../../AppWindow2'
import { ShareOption } from './share_option/ShareOption'

type Props = {
  id: string
  isCollapsed: boolean
  onCollapse: (id: string) => void
  onClose: (id: string) => void
}

export const ToDoApp = ({isCollapsed, onCollapse, id, onClose }: Props) => {
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

  const options = [{title: 'Share', onClick: () => {
    return <ShareOption />
  }}, {title: 'Clean Todo List', onClick: () => {
    setTodos([])
    }]

  return (
    <AppWindow id={id} isCollapsed={isCollapsed} onCollapse={onCollapse} onClose={onClose} options={options} >
      <AppWrapper>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
        />
        <ToDoList todos={todos} setTodos={setTodos} />
      </AppWrapper>
    </AppWindow>
  )
}

const AppWrapper = styled.div`
  padding: 6% 0 0;
  margin: auto;
  width: 500px;

  @media screen and (max-width: 820px) {
    width: 400px;
  }

  @media screen and (max-width: 600px) {
    width: 300px;
  }
`

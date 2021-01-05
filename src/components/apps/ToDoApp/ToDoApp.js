import React, { useState } from 'react'
import { Form } from './Form'
import { ToDoList } from './ToDoList'

export const ToDoApp = () => {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])

  return (
    <div>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

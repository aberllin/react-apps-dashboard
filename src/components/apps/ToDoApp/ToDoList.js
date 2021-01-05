import React from 'react'
import { Todo } from './Todo'

export const ToDoList = ({ todos, setTodos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            todo={todo}
            text={todo.text}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  )
}

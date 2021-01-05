import React from 'react'

export const Todo = ({ text, todos, todo, setTodos }) => {
  const completeHandler = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return { ...el, complete: !el.complete }
        }
        return el
      }),
    )
  }

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id))
  }

  return (
    <div>
      <button onClick={completeHandler}>done</button>
      <li>{text}</li>
      <button onClick={deleteHandler}>clear</button>
    </div>
  )
}

import React from 'react'
import { Todo } from './Todo'
import styled from 'styled-components'

export const ToDoList = ({ todos, setTodos }) => {
  return (
    <TodoListWrapper>
      <StyledUl>
        {todos.map((todo) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            todo={todo}
            text={todo.text}
            key={todo.id}
          />
        ))}
      </StyledUl>
    </TodoListWrapper>
  )
}

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
`
const TodoListWrapper = styled.div`
  margin: 25px 0;
`

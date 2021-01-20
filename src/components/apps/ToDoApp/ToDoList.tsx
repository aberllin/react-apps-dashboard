import React, {createRef} from 'react'
import { Todo } from './Todo'
import styled from 'styled-components'
import {Todo as TodoType} from './Form'

interface Props {
todos: TodoType[]
setTodos: (value: TodoType[]) => void
}

export const ToDoList = ({ todos, setTodos } : Props) => {

  const refs = todos.map(() => React.createRef<HTMLInputElement>())

  const changeFocus = (index: number) => {
      const isNotLastInput = index < todos.length - 1

      if (isNotLastInput) {
        if (refs[index + 1]) {
          refs[index + 1].current!.focus()
        }
      }
  }

  const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Enter') {
      changeFocus(index)
    }
  }

  return (
    <TodoListWrapper>
      <StyledUl>
        {todos.map((todo, index) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            todo={todo}
            text={todo.text}
            key={todo.id}
            ref={refs[index]}
            onKeyPress={(e) => onEnterPress(e, index)}
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

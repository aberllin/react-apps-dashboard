import React from 'react'
import styled from 'styled-components'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { FiTrash } from 'react-icons/fi'

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
    <TodoWrapper>
      <CompleteButton todo={todo} onClick={completeHandler}>
        <AiOutlineCheckCircle />
      </CompleteButton>
      <TodoText todo={todo}>{text}</TodoText>
      <DeleteButton onClick={deleteHandler}>
        <FiTrash />
      </DeleteButton>
    </TodoWrapper>
  )
}

const TodoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18pt;
  padding: 5px 0;
`
const CompleteButton = styled(AiOutlineCheckCircle)`
  background: none;
  cursor: pointer;

  &:hover {
    color: green;
  }
`

const DeleteButton = styled(FiTrash)`
  background: none;
  cursor: pointer;

  &:hover {
    color: red;
  }
`

const TodoText = styled.li`
  list-style: none;

  text-decoration: ${(props) =>
    props.todo.complete ? 'line-through' : 'none'};
`

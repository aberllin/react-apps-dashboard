import React from 'react'
import styled from 'styled-components'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { FiTrash } from 'react-icons/fi'
import { BiCircle } from 'react-icons/bi'

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
        {todo.complete ? (
          <AiOutlineCheckCircle style={{ color: 'green' }} />
        ) : (
          <BiCircle />
        )}
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
  padding: 5px 0;
`
const CompleteButton = styled.div`
  cursor: pointer;
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
  font-size: 18pt;

  @media screen and (max-width: 600px) {
    font-size: 14pt;
  }

  text-decoration: ${(props) =>
    props.todo.complete ? 'line-through' : 'none'};
`

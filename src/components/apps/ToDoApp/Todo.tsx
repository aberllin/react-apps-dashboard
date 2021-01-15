import React from 'react'
import styled from 'styled-components'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { FiTrash } from 'react-icons/fi'
import { BiCircle } from 'react-icons/bi'
import {Todo as TodoType} from './Form'

interface Props {
  todos: TodoType[]
  setTodos: (value: TodoType[]) => void
  text: string
  todo: TodoType
}

export const Todo = ({ text, todos, todo, setTodos } : Props) => {

 

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

  const textEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodos(
      todos.map(el => {
        if (el.id === todo.id) {
          return {...el, text: e.target.value}
        } return el
      })
    )
  }

  return (
    <TodoWrapper>
      <CompleteButton onClick={completeHandler}>
        {todo.complete ? (
          <AiOutlineCheckCircle style={{ color: 'green' }} />
        ) : (
          <BiCircle />
        )}
      </CompleteButton>
      <TodoText onChange={textEdit} type="text" todo={todo} value={text} />
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

const TodoText = styled.input<{todo: TodoType}>`
  font-size: 18pt;
  border: none;
  background: none;
  outline: none;

  color: ${({ theme }) => theme.textColor};

  @media screen and (max-width: 600px) {
    font-size: 14pt;
  }

  text-decoration: ${(props) =>
    props.todo.complete ? 'line-through' : 'none'};
`

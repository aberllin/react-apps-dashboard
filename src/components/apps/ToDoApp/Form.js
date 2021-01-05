import React from 'react'
import { FiPlus } from 'react-icons/fi'

export const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }

  const submitTodoHandler = (e) => {
    e.preventDefault()
    setTodos([...todos, { text: inputText, id: Date.now(), complete: false }])
    setInputText('')
    console.log(e)
  }

  return (
    <div>
      <div>
        <input
          value={inputText}
          type="text "
          placeholder="Enter your note here"
          onChange={inputTextHandler}
        />
        <button onClick={submitTodoHandler} type="submit">
          <FiPlus />
        </button>
      </div>
    </div>
  )
}

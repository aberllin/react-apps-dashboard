import React from 'react'
import { FiPlus } from 'react-icons/fi'

export const ToDoList = () => {
  return (
    <div>
      <div>
        <input type="text" placeholder="Enter your note here" />
        <button type="submit">
          <FiPlus />
        </button>
      </div>
    </div>
  )
}

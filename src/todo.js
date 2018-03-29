import React from 'react'

const Todo = ({todo, handleToggle, handleRemove}) => {
  return (
    <li>
      {todo.name}{' '}
      <input
        onChange={handleToggle}
        type="checkbox"
        checked={todo.done}
      />
      <button type="submit" onClick={handleRemove}>
        remove
      </button>
    </li>
  )
}

export default Todo

import React from 'react'

const Todo = props => {
  return (
    <li>
      {props.todo.name}{' '}
      <input
        onChange={props.handleToggle}
        type="checkbox"
        checked={props.todo.done}
      />
      <button type="submit" onClick={props.handleRemove}>
        remove
      </button>
    </li>
  )
}

export default Todo

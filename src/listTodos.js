import React from 'react'
import { connect } from 'react-redux'
import { toggleDone, removeTodo } from './reducers/reducers'
import Todo from './todo'

const ListTodos = ({todos, toggleDone, removeTodo}) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          handleToggle={() => toggleDone(todo)}
          handleRemove={() => removeTodo(todo)}
        />
      ))}
    </ul>
  )
}

const mapStateToProps = state => ({ todos: state.todos })

export default connect(mapStateToProps, { toggleDone, removeTodo })(ListTodos)

import React from 'react'
import { connect } from 'react-redux'
import Todo from './todo'

const ListTodos = ({ todos }) => {
  return <ul>{todos.map(todo => <Todo key={todo.id} todo={todo} />)}</ul>
}

const mapStateToProps = state => ({ todos: state.todos })

export default connect(mapStateToProps)(ListTodos)

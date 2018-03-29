import React from 'react'
import { connect } from 'react-redux'
import { createTodo } from './reducers/reducers'
const uuidv1 = require('uuid/v1')

const handleSubmit = (e, props) => {
  e.preventDefault()
  const name = e.target.name.value
  e.target.name.value = ''
  props.createTodo({
    name,
    done: false,
    id: uuidv1()
  })
}

const CreateTodo = props => {
  return (
    <form onSubmit={e => handleSubmit(e, props)}>
      <input type="text" name="name" />
      <input type="submit" />
    </form>
  )
}

const mapStateToProps = state => ({ todos: state.todos })

export default connect(mapStateToProps, { createTodo })(CreateTodo)

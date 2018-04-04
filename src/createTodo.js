import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { requestCreateTodo } from './reducers/reducers'
const uuidv1 = require('uuid/v1')

const handleSubmit = (e, { requestCreateTodo }) => {
  e.preventDefault()
  const name = e.target.name.value
  e.target.name.value = ''
  requestCreateTodo({
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ requestCreateTodo }, dispatch)
}

export default connect(null, mapDispatchToProps)(CreateTodo)

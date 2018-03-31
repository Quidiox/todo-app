import React, { Fragment } from 'react'
import ListTodos from './listTodos'
import CreateTodo from './createTodo'

const App = () => (
  <Fragment>
    <h1>Todo app</h1>
    <CreateTodo />
    <ListTodos />
  </Fragment>
)

export default App

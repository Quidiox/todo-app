import React, { Component, Fragment } from 'react'
import ListTodos from './listTodos'
import CreateTodo from './createTodo'

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Todo app</h1>
        <CreateTodo />
        <ListTodos />
      </Fragment>
    )
  }
}

export default App

import React, { Component, Fragment } from 'react'
import ListTodos from './listTodos'

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Todo app</h1>
        <ListTodos />
      </Fragment>
    )
  }
}

export default App

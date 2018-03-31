import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editTodo, toggleDone, removeTodo } from './reducers/reducers'

class Todo extends Component {
  state = {
    editable: false
  }
  
  toggleEdit = e => {
    if (this.state.editable && e.key === 'Enter')
      this.setState({ editable: false })
    else if (e.type === 'click')
      this.setState({ editable: !this.state.editable })
  }

  renderNormal = todo => <span onClick={this.toggleEdit}>{todo.name}</span>

  handleEdit = (e, todo) => {
    this.props.editTodo(todo, e.target.value)
  }

  renderEditable = todo => (
    <span>
      <input
        type="text"
        placeholder={todo.name}
        onChange={e => this.handleEdit(e, todo)}
      />
      <button type="submit" onClick={this.toggleEdit}>
        close
      </button>
    </span>
  )

  render() {
    const { todo, toggleDone, removeTodo } = this.props
    const { editable } = this.state
    return (
      <li onKeyPress={this.toggleEdit}>
        {!editable ? this.renderNormal(todo) : this.renderEditable(todo)}
        <input
          onChange={() => toggleDone(todo)}
          type="checkbox"
          checked={todo.done}
        />
        <button type="submit" onClick={() => removeTodo(todo)}>
          remove
        </button>
      </li>
    )
  }
}

export default connect(null, { editTodo, toggleDone, removeTodo })(Todo)

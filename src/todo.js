import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editTodo } from './reducers/reducers'

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
    const newName = e.target.value
    this.props.editTodo(todo, newName)
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
    const { todo, handleToggle, handleRemove } = this.props
    const { editable } = this.state
    return (
      <li onKeyPress={this.toggleEdit}>
        {!editable ? this.renderNormal(todo) : this.renderEditable(todo)}
        <input onChange={handleToggle} type="checkbox" checked={todo.done} />
        <button type="submit" onClick={handleRemove}>
          remove
        </button>
      </li>
    )
  }
}

export default connect(null, { editTodo })(Todo)

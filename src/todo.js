import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { requestEditTodo, toggleDone, removeTodo } from './reducers/reducers'

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

  renderEditable = todo => (
    <span>
      <form onSubmit={e => this.handleEdit(e, todo)}>
        <input
          name='name'
          type="text"
          placeholder={todo.name}
        />
        <input type="submit" value="Submit" />
      </form>
      <button type="submit" onClick={this.toggleEdit}>
        close
      </button>
    </span>
  )

  handleEdit = (e, todo) => {
    e.preventDefault()
    const newTodo = Object.assign({}, todo, { name: e.target.name.value })
    this.props.requestEditTodo(newTodo)
    this.setState({editable: false})
  }

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

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { requestEditTodo, toggleDone, removeTodo },
    dispatch
  )
}

export default connect(null, mapDispatchToProps)(Todo)

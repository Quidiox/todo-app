import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Todo from './todo'
import { requestAllTodos } from './reducers/reducers'

class ListTodos extends React.Component {
  componentDidMount() {
    this.props.requestAllTodos()
  }

  render() {
    return (
      <ul>
        {this.props.todos.map(todo => <Todo key={todo.id} todo={todo} />)}
      </ul>
    )
  }
}

const mapStateToProps = state => ({ todos: state.todos })

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ requestAllTodos }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTodos)

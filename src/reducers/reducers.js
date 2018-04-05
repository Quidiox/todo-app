const findIndex = (state, id) => state.findIndex(todo => todo.id === id)

const todoReducer = (state = [], action) => {
  console.log('ACTION TYPE:', action.type)
  console.log('ACTION DATA:', action.todo)
  const index = action.todo ? findIndex(state, action.todo.id) : ''
  switch (action.type) {
    case 'ALL_TODOS':
      return [...action.todos]
    case 'CREATE_TODO':
      return [...state, action.todo]
    case 'REMOVE_TODO':
      return [...state.slice(0, index), ...state.slice(index + 1)]
    case 'EDIT_TODO':
      return [
        ...state.slice(0, index),
        Object.assign({}, action.todo),
        ...state.slice(index + 1)
      ]
    case 'TOGGLE_DONE':
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], { done: !state[index].done }),
        ...state.slice(index + 1)
      ]
    default:
      return state
  }
}

export const initializeTodos = todos => {
  return {
    type: 'ALL_TODOS',
    todos
  }
}

export const requestAllTodos = () => {
  return {
    type: 'GET_ALL_TODOS'
  }
}

export const createTodo = todo => {
  return {
    type: 'CREATE_TODO',
    todo
  }
}

export const requestCreateTodo = todo => {
  return {
    type: 'REQUEST_CREATE_TODO',
    todo
  }
}

export const removeTodo = todo => {
  return {
    type: 'REMOVE_TODO',
    todo
  }
}

export const toggleDone = todo => ({
  type: 'TOGGLE_DONE',
  todo
})

export const editTodo = todo => ({
  type: 'EDIT_TODO',
  todo
})

export const requestEditTodo = todo => ({
  type: 'REQUEST_EDIT_TODO',
  todo
})

export default todoReducer

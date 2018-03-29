const initialState = [
  { name: 'first', done: false, id: 1 },
  { name: 'second', done: true, id: 2 },
  { name: 'third', done: false, id: 3 }
]

const findIndex = (state, id) => state.findIndex(todo => todo.id === id)

const todoReducer = (state = initialState, action) => {
  const index = action.todo ? findIndex(state, action.todo.id) : 0
  switch (action.type) {
    case 'CREATE_TODO':
      return [...state, action.todo]
    case 'REMOVE_TODO':
      return [...state.slice(0, index), ...state.slice(index + 1)]
    case 'EDIT_TODO':
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], { name: action.newName }),
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

export const createTodo = todo => {
  return {
    type: 'CREATE_TODO',
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

export const editTodo = (todo, newName) => ({
  type: 'EDIT_TODO',
  todo,
  newName
})

export default todoReducer

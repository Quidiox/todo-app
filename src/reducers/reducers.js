const initialState = [
  { name: 'first', id: 1, done: false },
  { name: 'second', id: 2, done: true },
  { name: 'third', id: 3, done: false }
]

const findIndex = (state, id) => state.findIndex(todo => todo.id === id)

const todoReducer = (state = initialState, action) => {
  const index = action.todo ? findIndex(state, action.todo.id) : 0
  switch (action.type) {
    case 'CREATE_TODO':
      return [...state, action.todo]
    case 'REMOVE_TODO':
      return [...state.slice(0, index), ...state.slice(index + 1)]
    case 'TOGGLE_DONE':
      return Object.assign([...state], {
        [index]: Object.assign({}, state[index], {
          done: !state[index].done
        })
      })
    /* const newState = [...state]
      return [
        ...newState.slice(0, index),
        Object.assign({}, newState[index], { done: !newState[index].done }),
        ...newState.slice(index + 1)
      ] */
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
  todo: todo
})

export default todoReducer

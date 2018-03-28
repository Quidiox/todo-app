import { createStore, combineReducers } from 'redux'
import todoReducer from './reducers/reducers'

const store = createStore(
  combineReducers({ todos: todoReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import todoReducer from './reducers/reducers'
import rootSaga from './sagas/sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({ todos: todoReducer }),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store

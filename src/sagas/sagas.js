import { call, put, takeLatest, all } from 'redux-saga/effects'
import apiService from '../api/apiService'
import { initializeTodos, createTodo } from '../reducers/reducers'

function* getTodos() {
  try {
    const todos = yield call(apiService.fetchTodos)
    yield put(initializeTodos(todos))
  } catch (error) {
    console.log(error)
  }
}

function* watchGetTodos() {
  yield takeLatest('GET_ALL_TODOS', getTodos)
}

function* newTodo(action) {
  try {
    const response = yield call(apiService.createTodo, { todo: action.todo })
    yield put(createTodo(response))
  } catch (error) {
    console.log(error)
  }
}

function* watchNewTodo() {
  yield takeLatest('REQUEST_CREATE_TODO', newTodo)
}

export default function* rootSaga() {
  yield all([call(watchGetTodos), call(watchNewTodo)])
}

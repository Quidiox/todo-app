import { call, put, takeLatest, all } from 'redux-saga/effects'
import apiService from '../api/apiService'
import { initializeTodos, createTodo, editTodo } from '../reducers/reducers'

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
    const response = yield call(apiService.createTodo, action.todo)
    yield put(createTodo(response))
  } catch (error) {
    console.log(error)
  }
}

function* watchNewTodo() {
  yield takeLatest('REQUEST_CREATE_TODO', newTodo)
}

function* modifyTodo(action) {
  try {
    const response = yield call(apiService.editTodo, action.todo)
    yield put(editTodo(response))
  } catch (error) {
    console.log(error)
  }
}

function* watchModifyTodo() {
  yield takeLatest('REQUEST_EDIT_TODO', modifyTodo)
}

export default function* rootSaga() {
  yield all([call(watchGetTodos), call(watchNewTodo), call(watchModifyTodo)])
}

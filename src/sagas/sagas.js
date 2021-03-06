import { call, put, takeLatest, all } from 'redux-saga/effects'
import apiService from '../api/apiService'
import {
  initializeTodos,
  createTodo,
  editTodo,
  removeTodo,
  toggleDone
} from '../reducers/reducers'

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

function* deleteTodo(action) {
  try {
    const response = yield call(apiService.removeTodo, action.todo)
    yield put(removeTodo(response))
  } catch (error) {
    console.log(error)
  }
}

function* watchDeleteTodo() {
  yield takeLatest('REQUEST_REMOVE_TODO', deleteTodo)
}

function* toggle(action) {
  try {
    const todo = Object.assign({}, action.todo, { done: !action.todo.done })
    const response = yield call(apiService.editTodo, todo)
    yield put(toggleDone(response))
  } catch (error) {
    console.log(error)
  }
}

function* watchToggle() {
  yield takeLatest('REQUEST_TOGGLE_DONE', toggle)
}

export default function* rootSaga() {
  yield all([
    call(watchGetTodos),
    call(watchNewTodo),
    call(watchModifyTodo),
    call(watchDeleteTodo),
    call(watchToggle)
  ])
}

import { call, put, takeLatest, all } from 'redux-saga/effects'
import apiService from '../api/apiService'
import { initializeTodos } from '../reducers/reducers'

function* getAllTodos() {
  try {
    const todos = yield call(apiService.fetchTodos)
    yield put(initializeTodos(todos))
  } catch (error) {
    console.log(error)
  }
}

function* getTodosSaga() {
  yield takeLatest('GET_ALL_TODOS', getAllTodos)
}

export default function* rootSaga() {
  yield all([getTodosSaga()])
}

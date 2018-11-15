/**
 * 项目并列模块的saga流需以多分支形式并列
 */
import { takeLatest } from 'redux-saga/effects'
import { incrementAsync } from '../modules/counter/saga'

export default function* rootSaga() {
  yield takeLatest('INCREMENT_ASYNC', incrementAsync)
}

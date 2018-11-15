import { put } from 'redux-saga/effects'
import { types } from './index'
import { delay } from 'redux-saga'

/**
 * saga 计数
 */
export function* incrementAsync() {
  yield delay(2000)
  yield console.log('increment saga')
  yield put({ type: types.INCREMENT })
}

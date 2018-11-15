import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
/**
 * 中间件
 * 监听和订阅导航actions
 */

const middleware = [sagaMiddleware, createLogger()]

export default function configStore() {
  const store = createStore(rootReducer, applyMiddleware(...middleware))
  sagaMiddleware.run(rootSaga)
  return store
}

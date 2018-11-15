import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
const middlewares = [thunkMiddleware, createLogger()]

import counter from '../modules/counter/reducer'
// reducer
const rootReducer = combineReducers({
  counter
})
export default function configStore() {
  const store = createStore(rootReducer, applyMiddleware(...middlewares))
  return store
}

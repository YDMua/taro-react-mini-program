import { types } from './constant'
import { Dispatch } from 'redux'

export const actions = {
  add: () => {
    return {
      type: types.INCREMENT
    }
  },
  reduce: () => {
    return {
      type: types.DECREMENT
    }
  },
  asyncAdd: () => {
    return async (dispatch: Dispatch) => {
      setTimeout(() => {
        dispatch(actions.add())
      }, 2000)
    }
  }
}

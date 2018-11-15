import { types } from './constant'

const INITIAL_STATE = {
  count: 0
}

const counter = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case types.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    case types.INCREMENT_ASYNC:
      return {
        ...state,
        count: state.count + 1
      }
    default:
      return state
  }
}

export default counter

/**
 * 例子：计数
 */
export const types = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  INCREMENT_ASYNC: 'INCREMENT_ASYNC'
}

export const actions = {
  add: () => {
    return { type: types.INCREMENT }
  },
  reduce: () => {
    return { type: types.DECREMENT }
  },
  asyncAdd: () => {
    return { type: types.INCREMENT_ASYNC }
  }
}

const INITIAL_STATE = {
  count: 0
}

export default function counter(state = INITIAL_STATE, action: any) {
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
    default:
      return state
  }
}

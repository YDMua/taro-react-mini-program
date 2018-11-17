const delay = ms => {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}
export default {
  namespace: 'home',
  state: {
    count: 0
  },
  effects: {
    *asyncAdd(_, { put }) {
      yield delay(2000)
      yield put({
        type: 'add',
        payload: {
          name: 'mayi'
        }
      })
    }
  },
  reducers: {
    add(state, action) {
      return {
        ...state,
        count: state.count + 1,
        ...action
      }
    },
    reduce(state) {
      return {
        ...state,
        count: state.count - 1
      }
    }
  }
}

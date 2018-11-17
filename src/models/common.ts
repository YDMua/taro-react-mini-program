// import Taro from "@tarojs/taro"

export default {
  namespace: 'common',
  state: {},

  effects: {},

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}

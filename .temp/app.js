import { Router } from '@tarojs/router';
import Taro from '@tarojs/taro-h5';
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import '@tarojs/async-await';
import { Provider } from "@tarojs/redux-h5";

import dva from './utils/dva';
import models from './models';
import './app.scss';
const dvaApp = dva.createApp({
  initialState: {},
  models
});
const store = dvaApp.getStore();
class App extends Component {
  constructor() {
    super(...arguments);
  }
  componentDidMount() {
    this.componentDidShow();
  }
  componentDidShow() {}
  componentDidHide() {}
  componentCatchError() {}
  render() {
    return <Provider store={store}>
                <Router routes={[['/pages/index/index', require('./pages/index/index').default]]} />
              </Provider>;
  }

  componentWillUnmount() {
    this.componentDidHide();
  }

}
Taro.initPxTransform({
  "designWidth": 750
});
Nerv.render(<App />, document.getElementById('app'));
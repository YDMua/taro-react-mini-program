import * as tslib_1 from "tslib";
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View, Button, Text } from '@tarojs/components';
import { connect } from "@tarojs/redux-h5";
// import { userLogin } from '../../utils/index'
import './index.scss';
let Index = class Index extends Component {
  constructor() {
    super(...arguments);
  }
  async componentDidMount() {
    // await userLogin()
  }
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  add() {
    this.props.dispatch({
      type: 'home/add'
    });
  }
  reduce() {
    this.props.dispatch({
      type: 'home/reduce'
    });
  }
  asyncAdd() {
    this.props.dispatch({
      type: 'home/asyncAdd'
    });
  }
  render() {
    return <View className="index">
        <Button className="add_btn" onClick={this.add.bind(this)}>
          +
        </Button>
        <Button className="dec_btn" onClick={this.reduce.bind(this)}>
          -
        </Button>
        <Button className="dec_btn" onClick={this.asyncAdd.bind(this)}>
          async +
        </Button>
        <View>
          <Text>{this.props.home.count}</Text>
        </View>
        <View>
          <Text>Hello, World</Text>
        </View>
      </View>;
  }
  config = {
    navigationBarTitleText: '首页'
  };
};
Index = tslib_1.__decorate([connect(home => ({
  ...home
}))], Index);
export default Index;
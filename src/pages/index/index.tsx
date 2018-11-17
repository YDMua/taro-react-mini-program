import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { IProps } from './type'
// import { userLogin } from '../../utils/index'

import './index.scss'

@connect(home => ({
  ...home
}))
class Index extends Component<IProps> {
  config: Config = {
    navigationBarTitleText: '首页'
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
    })
  }
  reduce() {
    this.props.dispatch({
      type: 'home/reduce'
    })
  }
  asyncAdd() {
    this.props.dispatch({
      type: 'home/asyncAdd'
    })
  }
  render() {
    return (
      <View className="index">
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
      </View>
    )
  }
}

export default Index as ComponentClass<IProps>

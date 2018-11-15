import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { bindActionCreators } from 'redux'
import { IProps } from './type'
import { actions as counterAction } from '../../modules/counter'
import { userLogin } from '../../utils/index'

import './index.scss'

const mapStateToProps = (state: any) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      add: counterAction.add,
      reduce: counterAction.reduce,
      asyncAdd: counterAction.asyncAdd
    },
    dispatch
  )
}
@connect(
  mapStateToProps,
  mapDispatchToProps
)
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

  render() {
    return (
      <View className="index">
        <Button className="add_btn" onClick={this.props.add}>
          +
        </Button>
        <Button className="dec_btn" onClick={this.props.reduce}>
          -
        </Button>
        <Button className="dec_btn" onClick={this.props.asyncAdd}>
          async
        </Button>
        <View>
          <Text>{this.props.counter.count}</Text>
        </View>
        <View>
          <Text>Hello, World</Text>
        </View>
      </View>
    )
  }
}

export default Index as ComponentClass<IProps>

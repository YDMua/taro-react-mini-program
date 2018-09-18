#### 下载

一：直接下载

二：git clone https://github.com/YDMua/taro-react-mini-program.git

#### 安装依赖

```
npm install
```

#### 在小程序端运行

```
npm run dev:weapp
```

#### 以下是注意和一些小知识：

##### 一：图片以模块的方式的引入

使用 ts 搭建的项目，引入静态资源，比如图片，会提示找不到模块，这时候就必须将图片声明为一个模块：

在 types 目录的 global.d.ts 文件下:

declare module ‘\*.png’ {

​ const img: any

​ export default img

}

##### 二：动态添加 style

```
<View style={{backgroundImage: `url(${bgImg})`}}></View>
```

##### 三：动态添加 class

```
1.<View className={data.length>0?’class-yes’: ’class-no'}></View>

2.<View className={`common ${data.length>0?’class-yes’: ’class-no}`}></View>
```

##### 四：this 的指向问题

1）在 Taro 的页面和组件类中，`this` 指向的是 Taro 页面或组件的实例,如果我们要引用原生组件，需要使用到 this 的时候，如果如下引用：

> Taro.createCanvasContext(canvasId, this.$scope)

> wx.createLivePlayerContext(liveId, this.$scope)

> 错误：wx.createLivePlayerContext(liveId, this)这样引入是没有效果的，this 并不是指向 wx.createLivePlayerContext.

(当前版本没有 liveplayer 的回调方法，所以直接用原生 wx)

##### 五：全局样式问题

全局原始 app.scss 只会影响到页面级别的文件，组件的获取不到全局的样式，

可以在组件内部 import 全局样式文件，但是这里就有可能，多个组件都引入全局，生成多份全局样式文件

相对应的代码我上传到了我的 github:

https://github.com/YDMua/taro-react-mini-program

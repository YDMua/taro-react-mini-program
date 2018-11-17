#### taro-tmp

[taro 文档](https://nervjs.github.io/taro/docs/README.html)

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

#### 目录结果

```
├── .gitignore
├── .npmrc
├── .prettierignore // prettier 忽略文件 配置
├── .prettierrc // prettier 配置文件
├── .stylelintignore // stylelint 忽略文件 配置
├── .stylelintrc.js // stylelint 配置
├── config // 全局配置文件
│   ├── dev.js // 开发配置文件, 定义开发 变量
│   ├── index.js // 全局配置文件(实际 是用这里面的 typescript 配置文件编译文件的, 所以要跟外层的一致))
│   └── prod.js // 生产配置文件， 定义生产 变量
├── package.json
├── project.config.json // 小程序配置文件
├── README.md
├── src
│   ├── models
│   │   ├── template
│   │   │   ├── common.ts 放置 公共的model
│   │   │   ├── index.ts model的入口文件
│   ├── global
│   │   ├── index.ts  // 全局工具文件
│   │   ├── index.ts  // 生命文件
│   ├── app.scss // 全局样式
│   ├── app.tsx // 应用入口文件
│   ├── components
│   │   ├── Template
│   │   │   ├── index.tsx 组件入口
│   │   │   ├── model.ts
│   │   │   ├── style.scss 组件样式
│   │   │   └── type.d.ts 组件声明文件
│   ├── index.html // 单页面
│   ├── pages
│   │   ├── Template
│   │   │   ├── index.tsx 组件入口
│   │   │   ├── model.ts
│   │   │   ├── style.scss 组件样式
│   │   │   └── type.d.ts 组件声明文件
│   ├── types
│   │   ├── global.d.ts // 全局声明文件
│   └── utils
│   │   ├── api.ts // 请求函数
│   │   ├── dva.ts // dva配置文件
│   │   ├── http.ts // 统一请求封装文件
│   │   └── type.d.ts // 类型声明文件
├── tsconfig.json // typescript 编辑器配置文件
├── tslint.json // tslint 检测配置文件
├── commitlint.config.js // commitlint 配置文件
├── qshell.config.json // qshell 配置文件
└── yarn.lock // yarn 安装包 缓存目录
```

- react + ts + scss + dvajs

#### commitlint 验证

```
build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
docs：文档更新
feat：新增功能
merge：分支合并 Merge branch ? of ?
fix：bug 修复
perf：性能, 体验优化
refactor：重构代码(既没有新增功能，也没有修复 bug)
style：不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
test：新增测试用例或是更新现有测试
revert：回滚某个更早之前的提交
chore：不属于以上类型的其他类型

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

> Taro.createCanvasContext(canvasId, this.\$scope)

> wx.createLivePlayerContext(liveId, this.\$scope)

> 错误：wx.createLivePlayerContext(liveId, this)这样引入是没有效果的，this 并不是指向 wx.createLivePlayerContext.

(当前版本没有 liveplayer 的回调方法，所以直接用原生 wx)

##### 五：全局样式问题

全局原始 app.scss 只会影响到页面级别的文件，组件的获取不到全局的样式，

可以在组件内部 import 全局样式文件，但是这里就有可能，多个组件都引入全局，生成多份全局样式文件

相对应的代码我上传到了我的 github:

https://github.com/YDMua/taro-react-mini-program

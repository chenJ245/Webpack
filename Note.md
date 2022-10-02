初始 Webpack:
安装：
npm install webpack webpack-cli -g 全局安装
不推荐全局安装 因为 版本有些许差异 版本号不同 如果你有两个版本 你是 5 运行不了 4 的项目
如果两个项目有依赖，会有 bug
npm install webpack webpack-cli --save-dev 项目内部安装

npx webpack -v 查看版本
npm info webpack 查看 webpack 所有的版本

webpack 不是翻译工具 而是一个模块打包工具
最早的时候 他是一个 js 的打包工具 现在就可以打包任意 模块 形式的文件

webpack 打包命令
npx webpack 文件名称

默认的配置文件 只能是这个名字 手动只能这个
webpack.config.js
或者可以直接依赖文件打包 npx webpack --config 名字
默认配置文件下面要写 path 路径 如果不写就执行默认的 dist 文件夹下面

调试启动文件 npm run bundle 的时候 底层在帮我运行 npx webpack
他会先去你的工程下面的 node_modules 下面去找 webpack 这个指令就会用了
"scripts": {
"bundle": "webpack"
}

"private": true, 私有项目

webpack-cli 的作用 可以使我们在命令行使用 webpack

打包输出内容：
Hash：唯一一个哈希值
Version：版本
Time： 打包耗时
Asset: 打包出的文件
Size: 打包文件的大小
Chunks: 对应 ID 值
Chunk Names: 打包文件对应的名字
Entrypoint main = bundle.js 入口文件
entry: {
main: './src/index.js',
sub: './src/index.js'
}
打包多个文件 filename: '[name].js', 配合这个 打包成和名字对应的文件
后面就是打包的文件

警告：就是说你打包的时候没有配置环境或者模式
你可以配置 mode: 'production' 但是你不写 他还是会默认这样
可以填 production 压缩的代码 或者 development 不压缩的代码

module 配置规则 在 webpack.js 配置文件中
rules 定制规则 [{}]
test: 文件的格式 例如 .jpg .png
use: 使用格式
loader: 'file-loader' 需要安装 npm i file-loader -D
options: {
// placeholder 占位符
name: '[name].[ext]'
}
url-loader 用这个打包的话 图片不会自动的放到生成的文件目录下 但是 依旧可以在页面显示
url-loader 会把你的图片转成一个字符串然后直接放到你 url 里面 缺点：如果图片过大 加载的就慢 推荐不大于 5kb
limit: 20480 最大不超过 20kb

npm i style-loader@0.23.1 css-loader@1.0.1 -D
{
test: /\.css$/,
use: ['style-loader', 'css-loader', 'scss-loader']
}]
style-loader 打包到你 html 的 head 标签里面
css-loader css 打包文件
scss-loader 打包 sass 文件的工具 需要安装 npm i sass-loader@7.1.0 node-sass@4.10.0 -D
postcss-loader 需要配置 postcss.config.js 文件 npm i -D postcss-loader@3.0.0
postcss.config.js 文件需要配置插件 npm i autoprefixer@9.3.1 -D
require('autoprefixer')({browsers: ["> 1%","last 2 versions","not ie <= 8"]}) 配置自动添加 iE 兼容

webpack 插件 打包 html 文件 npm i html-webpack-plugin@3.2.0 -D

htmlWebpackPlugin 会在打包结束之后，自动生成一个 html 文件，并把打包生成的 js 自动引入到这个 html 文件中
html-webpack-plugin 插件中的 plugin 可以在 webpack 运行到某个时刻的时候，帮你做一些事情
例如你写一个 html 模板 当 webpack 打包结束之后 会自动生成 html 且会自动引入你打包目录下的 js

指定删除某个文件 npm i clean-webpack-plugin@1.0.0 -D
new CleanWebpackPlugin(['dist']) 例如这个 就是打包之前我会使用这个插件去 删除 dist 文件内容

目前为止的 两个插件的执行过程 先执行 CleanWebpackPlugin(移出文件) 然后就是 打包 然后再执行 HtmlWebpackPlugin(生成模板文件)

sourceMap
现在知道 dist 目录下 main.js 文件出错某行
sourceMap 它是一个映射关系，他知道 dist 目录下 main.js 文件某行
实际上对应的应该是 src 目录下 index.js 文件中的 某一行
当前其实是 index.js 中某一行代码出错了

devtool: 'source-map', 加上这条就可以找到源代码的错误
devtool: 'inline-source-map', map 文件会变成 url(bas64) 的形式写在 main.js 的底部
devtool: 'clep-inline-source-map', clep 只要精确到行的错误不需要列不需要知道那个字符只针对业务代码
devtool: 'clep-module-inline-source-map', module 不止针对业务代码还针对其他模块
devtool: 'eval', eval 没有 map 的文件 但是 log 的代码会以 eval 的形式执行 还会指向 index.js 文件
development 环境 开发环境建议使用： cheap-module-eval-source-map 提示错误较全打包速度也是较快的
production 线上代码的 devtool 配置：devtool： 'cheap-module-source-map' 这样提示效果会更好一些

npm i webpack-dev-server@3.1.10 -D 启动服务器
npm i express@4.16.4 webpack-dev-middleware@3.4.0 -D
webpack index.js -o bundle.js 在命令行运行 webpack 打包

热模块更新 不更新页面只更新你想要他更新的东西
hot: true hotOnly:true 浏览器不自动刷新 需要引入 webpack 包
然后实例化一个 new webpack.HotModuleReplacementPlugin() 这个插件就是 html 的功能
页面不刷新 样式刷新 例如 改 css js 不会改变
引入 css 文件和 js 文件不同 js 需要直接配置 而 css 文件 中的 css-loader 模块的底层已经自动配置了

配置 es6 翻译 es5 语法
{
test: /\.js$/,
exclude: /node_modules/,
loader: "babel-loader",
options: {
presets: [['@babel/preset-env'], {
targets: {
chrome: "67"
},
useBuiltIns: 'usage'
}]
}
chrome: "67" 需要谷歌版本在 67 以上 如果在这之上 就不需要翻译成 es5
useBuiltIns: 'usage' 根据业务代码 来翻译 es6 的代码 添加到 main.js 里面
npm i babel-loader@8.0.4 -D babel-loader 插件
npm i @babel/preset-env@7.2.0 -D 翻译规则 所有的 es6 转 es5
npm i @babel/polyfill@7.0.0 -D polyfill 补充缺少的内容 例如 翻译 promise

如果是库项目的代码 用这套 可以有效避免 presets 的问题 和 polyfill 污染全局环境的问题
而 @babel/runtime 会以闭包的形式来到打包 不存在全局污染的概念
npm i @babel/plugin-transform-runtime@7.2.0 -D
npm i @babel/runtime@7.2.0 -save 两个 runtime 安装之后 需要去配置 webpackconfig.js 文件
options: {
"plugins": [["@babel/plugin-transform-runtime", {
          "corejs": 2,
          "helpers": true,
          "regenerator": true,
          "useESModules": true
        }]]
}
"corejs": 2, 因为配置了 2 所以需要再去下载一个包
npm i --save @babel/runtime-corejs2@7.2.0

而且当 babel 文件中的内容过多的时候 可以把 options 里面的内容拿出来去 主文件夹下创建一个 .babelrc 的文件 把内容放到里面 一样的正常运行

使用 babel 配置 react 的 代码 这个时候 页面上就会出现 hello world
npm i react-dom@16.6.3 react@16.6.3 --save
npm i @babel/preset-react@7.0.0 -D

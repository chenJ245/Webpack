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

Tree Shaking 配置：

"sideEffects": false, 写了指定的文件名就不对这个文件起作用 例如 ['@babel/polyfill'] false 就是全部打包，没有需要特殊处理的东西
如果你引入的东西文件无作用 那么 Tree Shaking 也会忽略掉 例如 css 可以这样写 ['*.css']
optimization: {
usedExports: true
}

Develoment 和 Production 模式的区分打包
Develoment 开发模式
Production 线上模式
模块区分 公用文件和区分文件 需要下载 npm i webpack-merge@4.1.5 -D

Webpack 和 Code Splitting
lodash 工具库 下载之后 引用之后 使用字符串方法
npm i lodash@4.17.11 --save

如果打包文件会很大，加载的时间会很长 如果这时候 修改些许代码 又会再打包出一个新的 main.js 他又会很大，如果用户又要重新访问我们的页面，又要加载 2mb 的内容

optimization: {splitChunks: {chunks: all}} splitChunks: {chunks: all} 要帮助你做代码分割了 不需要要像上面又要 手动配置 而是输入 webpack 的配置

异步获取 lodash 需要下载一个叫做 babel-plugin-dynamic-import-webpack 的库
npm i babel-plugin-dynamic-import-webpack@1.1.0 -D 这个库不推荐使用 他不能使用魔法注释的功能

代码分割，和 webpack 无关
webpack 中实现代码分割，两种方式

1. 同步代码： 只需要在 webpack.common.js 中做 optimization 的配置即可
2. 异步代码(import)：异步代码无需做任何配置，会自动进行代码分割，放置到新的文件中

babel 官方组件 npm i -D @babel/plugin-syntax-dynamic-import@7.2.0
optimization: {
splitChunks: {
splitChunks: {
chunks: 'all',
minSize: 30000,
maxSize: 50000, // 50kb
minChunks: 1,
maxAsyncRequests: 5,
maxInitialRequests: 3,
automaticNameDelimiter: '~',
name: true,
cachGroups: {
vendors: {
test: /[\\/]node_modules[\\/]/,
priority: -10,
filename: 'vendors.js'
},
default: {
priority: -20,
reuseExisttingChunk: true,
filename: 'common.js'
}
}
}
}
},
可以配合魔法注释插件 但是会有一个头名字 需要配置 webpack.common.js 中的 optimization 的 splitChunks 参数
cacheGroups: {vendors: false, default: false} 配置加上这两个就 会变成你魔法注释写的名字
splitChunks 会有默认配置 配置的大体意思是 ：
chunks: 'async' 代码分割的时候 只对异步代码生效 'all' 同步异步都生效 但是同步代码还是不会被分割因为 同步代码分割需要配置 'initial' 只对同步代码做分割
cacheGroups 分组打包 里面包含 vendors 参数 vendors 里面有 test 库的格式处理 可以用 filename 来起一个别名 chunks 和 cacheGroups 是配合使用的
minSize:30000 引入的文件或者库大于 30kb 的话 才会代码分割不然不会
maxSize: 50000, 例如有 一个 1mb 的 lodash 文件 会尝试把 lodash 文件拆分成为 20 个 50kb 的文件 二次拆分
走到这步之后就会去 vendors 因为他不在 node_modules 目录下 所以他不会去被打包到 vendors.js 文件 然后会走默认配置 default: false 如果是 false 则不不知道放在哪 需要配置 如果是其他配置 则会打包出一个 default~main.js 文件中

minChunks: 1 就是模块被使用多少次之后才会被拆分 满足条件才会代码分割
maxAsyncRequests： 5 最多只能加载五个请求 maxInitialRequests：3 入口文件最多 进行 3 次分割
automaticNameDelimiter 文件中间的分隔符 例如 vendors~main.js
name: true 使 cacheGroups 里面 的 filename 生效 cacheGroups 是一个缓存组 把符合组的文件全部打包到一起
priority: -10 是优先级的意思 数字越大优先级越高
reuseExisttingChunk：true 意思是 然后一个模块已经被打包过了就忽略那个被打包过的模块

案例： 引入一个 lodash.js 文件
他会按照上面所写走 但是当他走到 minChunks 的时候，要看这个 chunks(打包过后的文件)有没有被多个 chunks 依赖 如果依赖次数少于你 minChunks 写的值 那么这个 lodash 文件就不会被代码分割 不管他是同步还是异步
不写就是默认值 这个 splitChunks 默认配置就是 上面一大堆

描述文件 配合网上的链接可以查看你打包的模块的分布 以及大小 等等
例如 打开这个文件的前提是生成 stats.json 文件 就是描述文件 然后去 webpack.github.io/ananalyse/ 这个路径下 然后选择 stas.json 文件就可以看项目的各项资料了
还有图表模式 http://alexkuz.github.io/webpack-chart/ 一样的 选择描述文件 然后 就可以可视化图表了

webpack 默认打包异步代码 因为 异步代码会减少代码的使用率 而且它认为同步代码打包在一起 意义不大
在控制台使用 ctrl+Shift+P 输入 Coverage 就可以查看代码的使用率 和 监控代码 也可以查看别的网页的代码使用率
打包的核心是 考虑怎么让代码的利用率提高

chunkFilename 和 filename 入口文件走 filename 文件配置所以文件名和入口文件的配值相同，但是引入的文件是异步加载的文件的话，因为它不是入口文件，它是一个被异步加载的间接的一个文件，它会走 chunkFilename 配置因为 他会被分割，被分割之后他会是一个 chunk,他的文件名就不是直接配置的内容了而是 chunkFilename 的内容配置了

npm i -D mini-css-extract-plugin@0.5.0
css 文件分割 css 文件走 filename 配置 如果页面被直接引用 他必定是入口文件 如果他是间接被引入的文件 他就走 chunkFilename 文件配置 这个 css 插件默认会把两个文件打包到一个 main.css 文件中
npm i optimize-css-assets-webpack-plugin@5.0.1 -D 合并打包 css 文件
如果想让不同的文件对应不同的入口文件 就可以分组 使用 cacheGroups 分组进行打包 然后用 test 做传参 entry='入口文件的名字'，这样的话所有的入口文件统一打包到这个文件下面

performance: false, 不提示性能错误
new webpack.ProvidePlugin({
$: 'jquery', // 如果我的一个模块中使用了 $ 这个字符串我就会在模块里自动的帮你引入 jquery
})

npm i imports-loader@0.8.0 -D 可以改变 this 指向的插件 需要配置 common module 中的 rules
loader: 'imports-loader?this=>window'// 加载过程先走 Imports 然后改变 this 指向
loader 使用多个的时候 需要使用 use:{} loader 则写在 use 这个对象中

<!-- "dev-build": "webpack --profile --json > stats.json --config ./build/webpack.dev.js", -->

Library 的打包
libraryTarget: 'umd' 通用打包方式 不管什么配置都行

1. es6 的方法引入 import library from 'library'
2. cmd 的方法引入 const library = require('library');
3. amd 的方法引入 require(['library'], function() {});

需要使用 js src 引入的话 然后打点调用方法 需要配置 挂载到全局变量
library: 'library' 4. <script src='library.js'></script> library.math
libraryTarget: 'this' 或者 libraryTarget: 'window' 的话 都等于是挂载到全局上了

externals: ["lodash"] 这个配置项 可以是一个数组 也可以是一个对象
externals:{
lodash: {
root: '\_',
commonjs: 'lodash'
}
}
意思就是 如果我这个库在 common.js cmd 的方式 这个环境去使用 lodash 名字必须是 lodash
加了 root 之后呢 就是你即不用 cmd 又不用 amd 而是 script 的 src 属性引入的话 那么你必须要有一个名字叫做 \_ 的全局变量 这样的话你的引入的 lodash 才能执行

npm 提交到远程 npm 官网 需要注册 npm 账号 然后在命令行 npm adduser 然后去添加用户名和密码
再使用 npm publish 提交你这个 package.json 文件 等需要使用这个文件的时候, 之间 npm i 你这个库的名字 例如我的这个库叫做 npm i library 但是每个库的名字是不可以一样的不然下次就会提交不上去会起冲突 这个时候就需要你去修改你 json 文件中的 name 了 例如你可以加一个时间

Progressive Web Application PWA 打包配置
需要改动 package.json 文件
然后再下载一个 npm i http-server@0.11.1 --save-dev
PWA 的技术如果你第一次访问网页访问成功，但是网站挂掉之后你再刷新他会有一个缓存你还是可以看到你之前看到的页面
npm i workbox-webpack-plugin@3.6.3 -D 然后再去配置  
先引入 const WorkboxPlugin = require('workbox-webpack-plugin');
然后配置 plugins 需要 new WorkboxPlugin.GenerateSW({}) 全称叫做 serviceWorker GenerateSW 首字符要大写
常用的两参数有 clientsClaim: true, skipWaiting: true 这个时候 dist 目录会多出两个文件 一个 service-wroker.js 一个 precache-manifest 的这两个文件 这样之后 我们的文件就可以支持 PWA 文件的要求 这样页面只要访问成一次就会有缓存 只要有缓存 页面就缓存住了 要加上一段业务代码 需要是配置 index.js 写一个判断 看有没有成功运行

md 文件名 创建一个文件夹 type NUL > 文件名 在这层级目录下创建一个文件

ts 打包的配置
npm i ts-loader@5.3.2 typescript@3.2.2 -D
下载 ts 和 ts-loader 模块 而且打包 ts 文件的模块的时候 需要创建一个 ts.config.js 文件 然后在里面进行配置
lodash 和 ts 引入的话 想让 lodash 的用法 严格的话 需要下载@types/lodash@4.14.119 这个模块 例如 lodash 的\_.join() 方法 如果你不传参数他就会报错 说你最少要传 1-2 的参数

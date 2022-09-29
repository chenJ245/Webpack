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
后面就是打包的文件

警告：就是说你打包的时候没有配置环境或者模式
你可以配置 mode: 'production' 但是你不写 他还是会默认这样
可以填 production 压缩的代码 或者 development 不压缩的代码

Webpack4:
此项目 webpack 学习项目技术栈： Node + Webpack + @babel + loader + plugin + react + sass 等等

改项目主要有学习怎么打包文件，怎么配置打包文件，和文件的存放方式存放大小，和性能优化，还有就是模块化，和代码的可读性提高，和对一些现在比较热门插件的打包

Develoment 和 Production 模式的区分打包
Develoment 开发模式
Production 线上模式
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

提升 Webpack 打包速度的方法
优化的目标： 模块引入 只有第一次会打包 后面就直接用打包好的就行 引入第三方文件的时候，要去使用 dll 文件引入

1. 跟上技术的迭代 (Node, Npm, Yarn) 使用这些工具的最新版本 打包的速度就更快
2. 在尽可能少的模块上应用 Loader
3. Plugin 尽可能精简并确保可靠
4. resolve 参数合理配置 -- 例如文件引入 /默认引入 index 文件
5. 使用 DllPlugin 提高打包速度 配合插件使用 npm i add-asset-html-webpack-plugin@3.1.2 -D
6. 控制包文件大小
7. thread-loader,parallel-webpack,happypack 多进程打包
8. 合理使用 sourceMap
9. 结合 stats 分析打包结果
10. 开发环境内存编译 无用插件剔除

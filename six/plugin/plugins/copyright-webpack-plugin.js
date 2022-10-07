const { Compilation } = require("webpack");

class CopyrrightWebpackPlugin {
  // constructor(options) {
  //   console.log('mi被使用啦', options);
  // }

  apply(compiler) { // compiler webpack 的实例
    // 钩子函数 在某一时间会执行的函数

    compiler.hooks.compile.tap('CopyrrightWebpackPlugin', () => { // 同步的时刻 写法还是有些差别的
      console.log('compiler');
    })

    compiler.hooks.emit.tapAsync('CopyrrightWebpackPlugin', (compilation, cb) => { // 异步时刻
      // debugger; 断点
      compilation.assets['copyright.txt'] = {
        source: function () {
          return 'copyright by guan xi';
        },
        size: function () {
          return 20;
        }
      };
      cb();
    })
  }
}

module.exports = CopyrrightWebpackPlugin;
const loaderUtils = require('loader-utils');

module.exports = function (source) {
  const options = loaderUtils.getOptions(this)
  const callback = this.async(); // 等同于运行的是 this.callback

  setTimeout(() => {
    const result = source.replace('world', options.name);
    callback(null, result);
  }, 1000)
}
const loaderUtils = require('loader-utils');

module.exports = function (source) {
  // const options = loaderUtils.getOptions(this)
  // console.log(this.query);
  return source.replace('qifei', 'lookmi');
  // this.callback(null, result);

  // const callback = this.async(); // 等同于运行的是 this.callback

  // setTimeout(() => {
  // const result = source.replace('world', options.name);
  // return result;
  // callback(null, result);
  // }, 1000)
}
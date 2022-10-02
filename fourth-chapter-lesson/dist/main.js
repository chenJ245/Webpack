(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/*** IMPORTS FROM imports-loader ***/\n(function () {\n  // Tree Shaking 摇树 把没用的代码都摇晃掉 且只支持 ES Module 的方法引入\n  // 因为 Tree Shaking 只支持静态引入的方法 不支持动态\n  // 是在 window 上绑定了一些对象 例如 Promise\n  // import { add } from './math';\n  // add(1, 5);\n  // 4-3 一般叫下划线 业务逻辑\n  // 第一种方式\n  // 首次访问页面的时候，加载main.js (2mb)\n  // main.js 2mb\n  // 打包文件会很大，加载时间会很长\n  // 当业务逻辑发生变化时，又要加载2mb的内容\n  // main.js 2mb\n  // 重新访问我们的页面，又要加载2mb的内容\n  // 业务逻辑 1mb\n  // console.log(_.join(['a', 'b', 'c'], '***'));\n  // 此处省略10万业务逻辑\n  // console.log(_.join(['a', 'b', 'c'], '***'));\n  // 第二种方式     文件拆分 一个 main.js 1mb 一个 lodash.js 1mb\n  // 2mb的main.js 拆分成 1mb 的main.js 和 1mb的lodash.js\n  // 这种方式 用户加载的时候 就不需要加载 2mb的内容 而是直接加载 两个 1mb的内容 这样可能 比 一个 2mb的代码快(并非绝对)\n  // 当页面业务逻辑发生变化时，只要加载 main.js 即可(1mb)\n  // 核心概念\n  // Code Splitting 拆分代码 用户体验提高 代码打包也快\n  // import _ from 'lodash'; // 此处为 同步逻辑代码执行\n  // console.log(_.join(['a', 'b', 'c'], '***'));\n  // // 此处省略10万业务逻辑\n  // console.log(_.join(['a', 'b', 'c'], '***'));\n  // 配合 webpack 的默认配置来配置 不需要手动调试 optimization: {splitChunks: {chunks: all}}\n  // function getComponent() { // 异步加载\n  //   return import(/* webpackChunkName:\"lodash\" */'lodash').then(({ default: _ }) => {\n  //     var element = document.createElement('div');\n  //     element.innerHTML = _.join(['xie', 'buruo'], '-')\n  //     return element;\n  //   })\n  // }\n  // // 调用getComponent 异步获取 lodash 这个库，获取到之后创建 element 返回回来 then方法再接收，然后把元素挂载到body里面去\n  // getComponent().then(element => {\n  //   document.body.appendChild(element);\n  // })\n  // import test from './test.js'\n  // console.log(test.name);\n  // import _ from 'lodash'; // 此处为 同步逻辑代码执行\n  // var element = document.createElement('div');\n  // element.innerHTML = _.join(['xie', 'buruo'], '-');\n  // document.body.appendChild(element);\n  // async function getComponent() { // 异步加载\n  //   const { default: _ } = await import(/* webpackChunkName:\"lodash\" */'lodash');\n  //   const element = document.createElement('div');\n  //   element.innerHTML = _.join(['xie', 'buruo'], '-');\n  //   return element;\n  // }\n  // document.addEventListener('click', () => {\n  //   // 可以实现懒加载的行为\n  //   getComponent().then(element => {\n  //     document.body.appendChild(element);\n  //   })\n  // })\n  // document.addEventListener('click', () => {\n  //   import(/* webpackPrefetch: true*/ './click.js').then(({ default: func }) => { func(); })\n  //   // import(/* webpackPreload: true*/ './click.js').then(({ default: func }) => { func(); })\n  // });\n  // --profile --json > stats.json 创建文件描述 放置到 stats.json 文件中 还包含注释\n  // 打包分析，Preloading 等待核心代码加载完成之后空闲时间再去懒加载文件，Prefetching\n  // import './style.css';\n  // import './style1.css';\n  // console.log('hello world');\n  // import _ from 'lodash';\n  // import $ from 'jquery';\n  // import { ui } from './jquery.ui';\n  // ui();\n  // const dom = $('<div>');\n  // dom.html(_.join(['mo', 'fa'], '----'));\n  // $('body').append(dom);\n  console.log(this);\n}).call(window);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIElNUE9SVFMgRlJPTSBpbXBvcnRzLWxvYWRlciAqKiovXG4oZnVuY3Rpb24oKSB7XG5cbi8vIFRyZWUgU2hha2luZyDmkYfmoJEg5oqK5rKh55So55qE5Luj56CB6YO95pGH5pmD5o6JIOS4lOWPquaUr+aMgSBFUyBNb2R1bGUg55qE5pa55rOV5byV5YWlXHJcbi8vIOWboOS4uiBUcmVlIFNoYWtpbmcg5Y+q5pSv5oyB6Z2Z5oCB5byV5YWl55qE5pa55rOVIOS4jeaUr+aMgeWKqOaAgVxyXG4vLyDmmK/lnKggd2luZG93IOS4iue7keWumuS6huS4gOS6m+WvueixoSDkvovlpoIgUHJvbWlzZVxyXG4vLyBpbXBvcnQgeyBhZGQgfSBmcm9tICcuL21hdGgnO1xyXG5cclxuLy8gYWRkKDEsIDUpO1xyXG5cclxuLy8gNC0zIOS4gOiIrOWPq+S4i+WIkue6vyDkuJrliqHpgLvovpFcclxuLy8g56ys5LiA56eN5pa55byPXHJcbi8vIOmmluasoeiuv+mXrumhtemdoueahOaXtuWAme+8jOWKoOi9vW1haW4uanMgKDJtYilcclxuLy8gbWFpbi5qcyAybWJcclxuLy8g5omT5YyF5paH5Lu25Lya5b6I5aSn77yM5Yqg6L295pe26Ze05Lya5b6I6ZW/XHJcbi8vIOW9k+S4muWKoemAu+i+keWPkeeUn+WPmOWMluaXtu+8jOWPiOimgeWKoOi9vTJtYueahOWGheWuuVxyXG5cclxuLy8gbWFpbi5qcyAybWJcclxuLy8g6YeN5paw6K6/6Zeu5oiR5Lus55qE6aG16Z2i77yM5Y+I6KaB5Yqg6L29Mm1i55qE5YaF5a65XHJcbi8vIOS4muWKoemAu+i+kSAxbWJcclxuLy8gY29uc29sZS5sb2coXy5qb2luKFsnYScsICdiJywgJ2MnXSwgJyoqKicpKTtcclxuLy8g5q2k5aSE55yB55WlMTDkuIfkuJrliqHpgLvovpFcclxuLy8gY29uc29sZS5sb2coXy5qb2luKFsnYScsICdiJywgJ2MnXSwgJyoqKicpKTtcclxuXHJcbi8vIOesrOS6jOenjeaWueW8jyAgICAg5paH5Lu25ouG5YiGIOS4gOS4qiBtYWluLmpzIDFtYiDkuIDkuKogbG9kYXNoLmpzIDFtYlxyXG4vLyAybWLnmoRtYWluLmpzIOaLhuWIhuaIkCAxbWIg55qEbWFpbi5qcyDlkowgMW1i55qEbG9kYXNoLmpzXHJcbi8vIOi/meenjeaWueW8jyDnlKjmiLfliqDovb3nmoTml7blgJkg5bCx5LiN6ZyA6KaB5Yqg6L29IDJtYueahOWGheWuuSDogIzmmK/nm7TmjqXliqDovb0g5Lik5LiqIDFtYueahOWGheWuuSDov5nmoLflj6/og70g5q+UIOS4gOS4qiAybWLnmoTku6PnoIHlv6so5bm26Z2e57ud5a+5KVxyXG4vLyDlvZPpobXpnaLkuJrliqHpgLvovpHlj5HnlJ/lj5jljJbml7bvvIzlj6ropoHliqDovb0gbWFpbi5qcyDljbPlj68oMW1iKVxyXG5cclxuLy8g5qC45b+D5qaC5b+1XHJcbi8vIENvZGUgU3BsaXR0aW5nIOaLhuWIhuS7o+eggSDnlKjmiLfkvZPpqozmj5Dpq5gg5Luj56CB5omT5YyF5Lmf5b+rXHJcblxyXG4vLyBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnOyAvLyDmraTlpITkuLog5ZCM5q2l6YC76L6R5Luj56CB5omn6KGMXHJcbi8vIGNvbnNvbGUubG9nKF8uam9pbihbJ2EnLCAnYicsICdjJ10sICcqKionKSk7XHJcbi8vIC8vIOatpOWkhOecgeeVpTEw5LiH5Lia5Yqh6YC76L6RXHJcbi8vIGNvbnNvbGUubG9nKF8uam9pbihbJ2EnLCAnYicsICdjJ10sICcqKionKSk7XHJcbi8vIOmFjeWQiCB3ZWJwYWNrIOeahOm7mOiupOmFjee9ruadpemFjee9riDkuI3pnIDopoHmiYvliqjosIPor5Ugb3B0aW1pemF0aW9uOiB7c3BsaXRDaHVua3M6IHtjaHVua3M6IGFsbH19XHJcblxyXG4vLyBmdW5jdGlvbiBnZXRDb21wb25lbnQoKSB7IC8vIOW8guatpeWKoOi9vVxyXG4vLyAgIHJldHVybiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTpcImxvZGFzaFwiICovJ2xvZGFzaCcpLnRoZW4oKHsgZGVmYXVsdDogXyB9KSA9PiB7XHJcbi8vICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWyd4aWUnLCAnYnVydW8nXSwgJy0nKVxyXG4vLyAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbi8vICAgfSlcclxuLy8gfVxyXG5cclxuLy8gLy8g6LCD55SoZ2V0Q29tcG9uZW50IOW8guatpeiOt+WPliBsb2Rhc2gg6L+Z5Liq5bqT77yM6I635Y+W5Yiw5LmL5ZCO5Yib5bu6IGVsZW1lbnQg6L+U5Zue5Zue5p2lIHRoZW7mlrnms5Xlho3mjqXmlLbvvIznhLblkI7miorlhYPntKDmjILovb3liLBib2R56YeM6Z2i5Y67XHJcbi8vIGdldENvbXBvbmVudCgpLnRoZW4oZWxlbWVudCA9PiB7XHJcbi8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuLy8gfSlcclxuXHJcblxyXG4vLyBpbXBvcnQgdGVzdCBmcm9tICcuL3Rlc3QuanMnXHJcbi8vIGNvbnNvbGUubG9nKHRlc3QubmFtZSk7XHJcblxyXG4vLyBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnOyAvLyDmraTlpITkuLog5ZCM5q2l6YC76L6R5Luj56CB5omn6KGMXHJcbi8vIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsneGllJywgJ2J1cnVvJ10sICctJyk7XHJcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG4vLyBhc3luYyBmdW5jdGlvbiBnZXRDb21wb25lbnQoKSB7IC8vIOW8guatpeWKoOi9vVxyXG4vLyAgIGNvbnN0IHsgZGVmYXVsdDogXyB9ID0gYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6XCJsb2Rhc2hcIiAqLydsb2Rhc2gnKTtcclxuLy8gICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWyd4aWUnLCAnYnVydW8nXSwgJy0nKTtcclxuLy8gICByZXR1cm4gZWxlbWVudDtcclxuLy8gfVxyXG5cclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbi8vICAgLy8g5Y+v5Lul5a6e546w5oeS5Yqg6L2955qE6KGM5Li6XHJcbi8vICAgZ2V0Q29tcG9uZW50KCkudGhlbihlbGVtZW50ID0+IHtcclxuLy8gICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbi8vICAgfSlcclxuLy8gfSlcclxuXHJcblxyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuLy8gICBpbXBvcnQoLyogd2VicGFja1ByZWZldGNoOiB0cnVlKi8gJy4vY2xpY2suanMnKS50aGVuKCh7IGRlZmF1bHQ6IGZ1bmMgfSkgPT4geyBmdW5jKCk7IH0pXHJcbi8vICAgLy8gaW1wb3J0KC8qIHdlYnBhY2tQcmVsb2FkOiB0cnVlKi8gJy4vY2xpY2suanMnKS50aGVuKCh7IGRlZmF1bHQ6IGZ1bmMgfSkgPT4geyBmdW5jKCk7IH0pXHJcbi8vIH0pO1xyXG5cclxuLy8gLS1wcm9maWxlIC0tanNvbiA+IHN0YXRzLmpzb24g5Yib5bu65paH5Lu25o+P6L+wIOaUvue9ruWIsCBzdGF0cy5qc29uIOaWh+S7tuS4rSDov5jljIXlkKvms6jph4pcclxuLy8g5omT5YyF5YiG5p6Q77yMUHJlbG9hZGluZyDnrYnlvoXmoLjlv4Pku6PnoIHliqDovb3lrozmiJDkuYvlkI7nqbrpl7Lml7bpl7Tlho3ljrvmh5LliqDovb3mlofku7bvvIxQcmVmZXRjaGluZ1xyXG5cclxuLy8gaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbi8vIGltcG9ydCAnLi9zdHlsZTEuY3NzJztcclxuXHJcbi8vIGNvbnNvbGUubG9nKCdoZWxsbyB3b3JsZCcpO1xyXG5cclxuLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuLy8gaW1wb3J0IHsgdWkgfSBmcm9tICcuL2pxdWVyeS51aSc7XHJcblxyXG4vLyB1aSgpO1xyXG5cclxuLy8gY29uc3QgZG9tID0gJCgnPGRpdj4nKTtcclxuLy8gZG9tLmh0bWwoXy5qb2luKFsnbW8nLCAnZmEnXSwgJy0tLS0nKSk7XHJcbi8vICQoJ2JvZHknKS5hcHBlbmQoZG9tKTtcclxuXHJcblxyXG5jb25zb2xlLmxvZyh0aGlzKTtcbn0uY2FsbCh3aW5kb3cpKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

},[["./src/index.js","runtime"]]]);
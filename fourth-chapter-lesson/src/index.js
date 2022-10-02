// Tree Shaking 摇树 把没用的代码都摇晃掉 且只支持 ES Module 的方法引入
// 因为 Tree Shaking 只支持静态引入的方法 不支持动态
// 是在 window 上绑定了一些对象 例如 Promise
// import { add } from './math';

// add(1, 5);

// 4-3 一般叫下划线 业务逻辑
// 第一种方式
// 首次访问页面的时候，加载main.js (2mb)
// main.js 2mb
// 打包文件会很大，加载时间会很长
// 当业务逻辑发生变化时，又要加载2mb的内容

// main.js 2mb
// 重新访问我们的页面，又要加载2mb的内容
// 业务逻辑 1mb
// console.log(_.join(['a', 'b', 'c'], '***'));
// 此处省略10万业务逻辑
// console.log(_.join(['a', 'b', 'c'], '***'));

// 第二种方式     文件拆分 一个 main.js 1mb 一个 lodash.js 1mb
// 2mb的main.js 拆分成 1mb 的main.js 和 1mb的lodash.js
// 这种方式 用户加载的时候 就不需要加载 2mb的内容 而是直接加载 两个 1mb的内容 这样可能 比 一个 2mb的代码快(并非绝对)
// 当页面业务逻辑发生变化时，只要加载 main.js 即可(1mb)

// 核心概念
// Code Splitting 拆分代码 用户体验提高 代码打包也快

// import _ from 'lodash'; // 此处为 同步逻辑代码执行
// console.log(_.join(['a', 'b', 'c'], '***'));
// // 此处省略10万业务逻辑
// console.log(_.join(['a', 'b', 'c'], '***'));
// 配合 webpack 的默认配置来配置 不需要手动调试 optimization: {splitChunks: {chunks: all}}

// function getComponent() { // 异步加载
//   return import(/* webpackChunkName:"lodash" */'lodash').then(({ default: _ }) => {
//     var element = document.createElement('div');
//     element.innerHTML = _.join(['xie', 'buruo'], '-')
//     return element;
//   })
// }

// // 调用getComponent 异步获取 lodash 这个库，获取到之后创建 element 返回回来 then方法再接收，然后把元素挂载到body里面去
// getComponent().then(element => {
//   document.body.appendChild(element);
// })


// import test from './test.js'
// console.log(test.name);

// import _ from 'lodash'; // 此处为 同步逻辑代码执行
// var element = document.createElement('div');
// element.innerHTML = _.join(['xie', 'buruo'], '-');
// document.body.appendChild(element);

// async function getComponent() { // 异步加载
//   const { default: _ } = await import(/* webpackChunkName:"lodash" */'lodash');
//   const element = document.createElement('div');
//   element.innerHTML = _.join(['xie', 'buruo'], '-');
//   return element;
// }

// document.addEventListener('click', () => {
//   // 可以实现懒加载的行为
//   getComponent().then(element => {
//     document.body.appendChild(element);
//   })
// })


// document.addEventListener('click', () => {
//   import(/* webpackPrefetch: true*/ './click.js').then(({ default: func }) => { func(); })
//   // import(/* webpackPreload: true*/ './click.js').then(({ default: func }) => { func(); })
// });

// --profile --json > stats.json 创建文件描述 放置到 stats.json 文件中 还包含注释
// 打包分析，Preloading 等待核心代码加载完成之后空闲时间再去懒加载文件，Prefetching

// import './style.css';
// import './style1.css';

// console.log('hello world');

// import _ from 'lodash';
// import $ from 'jquery';
// import { ui } from './jquery.ui';

// ui();

// const dom = $('<div>');
// dom.html(_.join(['mo', 'fa'], '----'));
// $('body').append(dom);


console.log(this);
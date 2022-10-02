// import "@babel/polyfill";
// const arr = [
//   new Promise(() => { }),
//   new Promise(() => { })
// ];

// arr.map(item => {
//   console.log(item);
// });

import "@babel/polyfill";

import React, { Component } from "react";
import ReactDOM from "react-dom";

// 创建了一个叫 app 的组件在页面上渲染出 hello world 的内容
class App extends Component {
  render() {
    return <div>Hello Word</div>
  }
}
// 然后使用 react-dom 渲染到 id 为 root的标里
ReactDOM.render(<App />, document.getElementById('root'));
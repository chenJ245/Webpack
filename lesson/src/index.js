// ES Moudule 模块引入方式
// CommonJS 模块引入规范
// CMD
// AMD

// webpack 模块打包工具
// js 模块打包工具 -> 任何形式的文件


// import Header from './Header';
// import Sidebar from './Sidebar';
// import Content from './Content';
// var style = require('./index.css');
// import style from './index.css';

var Header = require('./header.js');
var Sidebar = require('./sidebar.js');
var Content = require('./content.js');

new Header();
new Sidebar();
new Content();
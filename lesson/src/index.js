import avatar from './avat.jpg'
// import Header from './header.vue'
import style from './index.scss';
import createAvatar from './createAvatar';

createAvatar();

// var avatar = require('./avat.jpg')
var img = new Image();
img.src = avatar;
img.classList.add('style.avatar');

var root = document.getElementById('root');
root.append(img);
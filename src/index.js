import './assets/style/index.css';
import './assets/style/test.scss';
let webpackLogo = require('./assets/img/webpack-logo.svg')
console.log(111);
let h1 = document.createElement('h1');
h1.innerHTML = `<img src=${webpackLogo} />`
document.body.appendChild(h1)
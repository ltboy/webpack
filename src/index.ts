import './assets/style/index.css';
import './assets/style/test.scss';
const webpackLogo = require('./assets/img/webpack-logo.svg');
console.log(111);

const h1 = document.createElement('h1');
h1.innerHTML = `<img src=${webpackLogo} />`;
document.body.appendChild(h1);
console.log(2);

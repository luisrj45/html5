import css from './style.scss'
import { suma } from './components/suma.js'
import resta from './components/resta.js'
import logoJS from './assets/img/js-logo.png'
import logoWebpack from './assets/img/webpack-logo.svg'
import logoSass from './assets/img/sass-logo.png'

const page = `
  <main class="Main">
    <h2 class="Main-title">Hola Mundo con Vanilla JS, Webpack, & Sass</h2>
    <i class="fa fa-smile-o"></i>
    <a href="./another.html">Ir a otra aplicación con React</a>
    <div class="Main-logos">
      <img src=${logoJS}>
      <img src=${logoWebpack}>
      <img src=${logoSass}>
    </div>
  </main>
`

document.getElementById('root').innerHTML = page

console.log(
  'Código del bundle index.js con Vanilla JS',
  suma(15, 35),
  resta(30, 15)
)

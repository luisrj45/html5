import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import css from './style.scss'
import { producto } from './components/producto.js'
import division from './components/division.js'
import logoReact from './assets/img/react-logo.svg'
import logoWebpack from './assets/img/webpack-logo.svg'
import logoSass from './assets/img/sass-logo.png'

class HelloWorld extends Component {
  render() {
    return(
      <main className="Main">
        <h2 className="Main-title">Hola Mundo con {this.props.name}, Webpack & Sass</h2>
        <i className="fa fa-smile-o"></i>
        <a href="./index.html">Ir a otra sección con Vanilla JS</a>
        <div className="Main-logos">
          <img src={logoReact} alt="React" />
          <img src={logoWebpack} alt="Webpack" />
          <img src={logoSass} alt="Sass" />
        </div>
      </main>
    )
  }
}

ReactDOM.render(
  <HelloWorld name="React" />,
  document.getElementById('root')
)

console.log(
  'Código del bundle another.js con React',
  producto(4, 6),
  division(16, 8)
)

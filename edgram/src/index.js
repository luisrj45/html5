import css from './style.scss'
import { init } from './components/helpers/init.js'
import { isAuth } from './components/auth.js'

init()

const app = `
  <main class="EDgram">
    ${isAuth()}
  </main>
`

document.getElementById('root').innerHTML = app


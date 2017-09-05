import header from './header'
import footer from './footer'
import profile from './profile'
import timeline from './timeline'
import uploader from './uploader'
import camera from './camera'

const app = () => (`
  ${header()}
  <section class="Content">
    ${profile()}
    ${timeline()}
    ${camera()}
    ${uploader()}
  </section>
  ${footer()}
`)

export default app

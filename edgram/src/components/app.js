import header from './header.js'
import footer from './footer.js'
import profile from './profile.js'
import timeline from './timeline.js'
import uploader from './uploader.js'
import camera from './camera.js'

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

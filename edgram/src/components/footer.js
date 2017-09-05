import firebase from 'firebase'
import { signOut } from './auth'
import { clearProgress } from './upload_progress'

const footer = () => {
  const d = document,
    c = console.log

  const footerScripts = setInterval(() => {
    if ( d.readyState  === 'complete' ) {
      clearInterval(footerScripts)

      const nav = d.querySelector('.Footer-menu'),
        sections = d.querySelectorAll('.Content-section')

      nav.addEventListener('click', e => {
        e.preventDefault()
        window.scrollTo(0,0)

        if( e.target.parentElement.matches('button') ) {
          let btn = e.target.parentElement,
            btnSection = btn.className.split('-')[0]

            //c(btn, btnSection)
            sections.forEach(section => {
              if ( section.classList.contains(btnSection) ) {
                section.classList.add('u-show', 'u-fadein')
                section.classList.remove('u-hide')
              } else {
                section.classList.add('u-hide')
                section.classList.remove('u-show', 'u-fadein')
              }
            })

            clearProgress()
        }
      })
    }
  }, 100)

  return `
    <footer class="Footer  u-fixed">
      <nav class="Footer-menu">
        <button class="Profile-button" title="Perfil">
          <i class="fa fa-user"></i>
        </button>
        <button class="Uploader-button" title="Subir Foto">
          <i class="fa fa-picture-o"></i>
        </button>
        <button class="Timeline-button" title="Home">
          <i class="fa fa-home"></i>
        </button>
        <button class="Camera-button" title="Cámara">
          <i class="fa fa-camera"></i>
        </button>
        ${signOut()}
      </nav>
    </footer>
  `
}

export default footer

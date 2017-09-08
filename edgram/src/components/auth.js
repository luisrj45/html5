import firebase from 'firebase'
import { pwa, isOnLine } from './helpers/init'
import app from './app'

const d = document,
  c = console.log

const githubSignIn = () => {
  const provider = new firebase.auth.GithubAuthProvider()
  firebase.auth().signInWithPopup(provider)
    .then( result => c(`${result.user.email} ha iniciado sesión con GitHub`, result) )
    .catch( err => c(`Error: ${err.code}: ${err.message}`) )
}

const githubSignOut = () => {
  firebase.auth().signOut()
    .then( () => c('Te has desconectado correctamente de GitHub') )
    .catch( () => c('Ocurrió un error al desconectarse de GitHub') )
}

const signIn = () => {
  d.addEventListener('click', e => {
    if ( e.target.matches('.Sign-button') )
      githubSignIn()
  })

  return `
    <div class="Sign">
      <h1 class="Sign-title">EDgram</h1>
      <button class="Sign-button">
        <i class="fa fa-sign-in"></i>
        entra con
        <i class="fa fa-github"></i>
      </button>
    </div>
  `
}

export const signOut = () => {
  d.addEventListener('click', e => {
    if ( e.target.matches('.logout') )
      githubSignOut()
  })

  return `
    <button class="logout" title="Salir">
      <i class="logout fa fa-sign-out"></i>
    </button>
  `
}

export const isAuth = () => {
  firebase.auth().onAuthStateChanged(user => {
    const EDgram = d.querySelector('.EDgram')
    // c(user)

    if ( user ) {
      EDgram.innerHTML = app()
      EDgram.classList.add('u-jc-flex-start')
      pwa()
      //c('Usuario Autenticado')
    } else {
      EDgram.innerHTML = signIn()
      EDgram.classList.remove('u-jc-flex-start')
      //c('Usuario NO Autenticado')
    }

    isOnLine()
  })
}

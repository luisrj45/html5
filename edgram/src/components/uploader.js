import firebase from 'firebase'
import { progressBar, progressStatus, showProgress, hideProgress } from './upload_progress'
import { errorMsg, successMsg } from './helpers/messages'
import { savePḧotoInDB } from './helpers/photos_db'

const uploader = () => {
  const d = document,
    c = console.log

  const uploaderScripts = setInterval(() => {
    if ( d.readyState  === 'complete' ) {
      clearInterval(uploaderScripts)

    const storageRef = firebase.storage().ref().child('photos'),
      dbRef = firebase.database().ref().child('photos'),
      user = firebase.auth().currentUser,
      form = d.getElementById('upload'),
      uploader = d.getElementById('uploader'),
      output = d.querySelector('.Uploader').querySelector('.Progress-output')

    uploader.addEventListener('change', e => {
      output.innerHTML = ''

      Array.from(e.target.files).forEach(file => {
        //c(e.target.files, file)
        if ( file.type.match('image.*') ) {
          let uploadTask = storageRef.child(file.name).put(file)

          uploadTask.on('state_changed', data => {
            //c(data)
            showProgress()
            progressStatus(data)
          }, err => {
            //c(err, err.code, err.mesagge)
            output.innerHTML = errorMsg(`${err.mesagge}`, err)
          }, () => {
            storageRef.child(file.name).getDownloadURL()
              .then(url => {
                //c(url)
                output.insertAdjacentHTML(
                  'afterbegin',
                  `${successMsg('Tu foto se ha subido')}<img src="${url}">`
                )
                savePḧotoInDB(url, user)
                hideProgress()
              })
              .catch( err => output.innerHTML = errorMsg(`${err.mesagge}`, err) )
          })
        } else {
          output.innerHTML = errorMsg('Tu archivo debe ser una imagen', null)
        }
      })

      form.reset()
    })

    //c(user)
    }
  }, 100)

  return `
    <article class="Uploader  Content-section  u-hide">
      <h2 class="u-title">Sube tus Fotos</h2>
      <form name="upload" id="upload">
        <input type="file" id="uploader" multiple>
        <label for="uploader">
          <i class="fa fa-cloud-upload" title ="Subir Foto(s)"></i>
        </label>
      </form>
      ${progressBar()}
    </article>
  `
}

export default uploader

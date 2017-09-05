import firebase from 'firebase'

const profile = () => {
  const d = document,
    c = console.log,
    user = firebase.auth().currentUser,
    dbRef = firebase.database().ref().child('photos')

  let profilePhotos = ''

  const profileScripts = setInterval(() => {
    if ( d.readyState  === 'complete' ) {
      clearInterval(profileScripts)
      dbRef.on('value', data => {
        //c( data, data.key, data.val() )
        data.forEach( photo => {
          if ( photo.val().uid === user.uid ) {
            profilePhotos += `<img src="${photo.val().photoURL}">`
          }
        })
        d.querySelector('.Profile-photos').innerHTML = profilePhotos
      })
    }
  }, 100)

  return `
  <article class="Profile  Content-section  u-hide">
    <h2 class="Profile-name">${user.displayName}</h2>
    <p class="Profile-email">${user.email}</p>
    <img class="Profile-avatar" src="${user.photoURL}">
    <h3>Tus Fotos</h3>
    <aside class="Profile-photos"></aside>
</article>
  `
}

export default profile

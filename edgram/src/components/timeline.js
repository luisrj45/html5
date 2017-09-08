import firebase from 'firebase'

const timeline = () => {
  const d = document,
    c = console.log,
    dbRef = firebase.database().ref().child('photos')

  const timelineScripts = setInterval(() => {
    if ( d.readyState  === 'complete' ) {
      clearInterval(timelineScripts)

      const timelinePhotos = d.querySelector('.Timeline-photos')

      function photoTemplate (obj) {
        return `
          <figure class="Photo">
            <img class="Photo-image" src="${obj.photoURL}">
            <figcaption class="Photo-author">
              <img src="${obj.avatar}" class="Photo-authorAvatar">
              <p class="Photo-authorName">${obj.displayName}</p>
            </figcaption>
          </figure>
        `
      }

      dbRef.once('value', data => {
        //c( data, data.key, data.val() )
        data.forEach( photo => {
          timelinePhotos.insertAdjacentHTML(
            'afterbegin',
            photoTemplate( photo.val() )
          )
        })
      })

      dbRef.on('child_added', data => {
        timelinePhotos.insertAdjacentHTML(
          'afterbegin',
          photoTemplate( data.val() )
        )
      })
    }
  }, 100)

  return `
    <article class="Timeline  Content-section  u-show">
      <aside class="Timeline-photos"></aside>
    </article>
  `
}

export default timeline

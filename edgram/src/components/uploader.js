import firebase from 'firebase'

const uploader = () => {
  const d = document,
    c = console.log

  const uploaderScripts = setInterval(() => {
    if ( d.readyState  === 'complete' ) {
      clearInterval(uploaderScripts)

    }
  }, 100)

  return `
    <article class="Uploader  Content-section  u-hide">
      <h2>Uploader</h2>
    </article>
  `
}

export default uploader

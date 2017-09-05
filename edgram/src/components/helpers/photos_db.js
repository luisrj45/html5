import firebase from 'firebase'

export function savePḧotoInDB (url, user) {
  firebase.database().ref().child('photos').push({
    photoURL: url,
    uid: user.uid,
    displayName: user.displayName,
    avatar: user.photoURL
  })
}

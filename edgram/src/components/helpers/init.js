import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBy5E_R_uosgCzD-VJSZ4dPYtu-TYPCEX4",
  authDomain: "edgram-77a71.firebaseapp.com",
  databaseURL: "https://edgram-77a71.firebaseio.com",
  projectId: "edgram-77a71",
  storageBucket: "edgram-77a71.appspot.com",
  messagingSenderId: "140086932147"
}

export const init = () => firebase.initializeApp(config)

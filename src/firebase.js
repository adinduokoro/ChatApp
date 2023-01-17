import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAYVfY5w-3BSTHAn9dWH0D0x24gzNZQE5c",
  authDomain: "chat-app-3de05.firebaseapp.com",
  projectId: "chat-app-3de05",
  storageBucket: "chat-app-3de05.appspot.com",
  messagingSenderId: "112807340351",
  appId: "1:112807340351:web:c4e3331ee2851af9278b8a",
  measurementId: "G-PDJKCF2EYS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db

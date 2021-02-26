import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAX1vVrUQgvIvQ9aqaTO4krpMl83Akcci0",
    authDomain: "crwn-clothing-c9901.firebaseapp.com",
    projectId: "crwn-clothing-c9901",
    storageBucket: "crwn-clothing-c9901.appspot.com",
    messagingSenderId: "79863832002",
    appId: "1:79863832002:web:c16ae96bd99581b069ca5b",
    measurementId: "G-MZ0Y1X8V1B"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCiGe9BOnCWigQ2-LxsnifXeYXmRTNjTkg",
    authDomain: "crwn-db-cahya.firebaseapp.com",
    databaseURL: "https://crwn-db-cahya.firebaseio.com",
    projectId: "crwn-db-cahya",
    storageBucket: "crwn-db-cahya.appspot.com",
    messagingSenderId: "942427154167",
    appId: "1:942427154167:web:4c404f69f18e3d51c995f2"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =  new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
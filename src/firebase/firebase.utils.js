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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      // console.log(snapShot)

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =  new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
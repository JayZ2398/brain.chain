/* eslint-disable no-console */
import firebase from 'firebase/firebase';
import firebaseConfig from './firebaseConfig';

firebase.initializeApp({
  ...firebaseConfig,
});

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user);
  }).catch((error) => {
    console.log(error.message);
  });
};

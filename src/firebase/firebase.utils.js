import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBmg_zuXNK4NdPGUZXW786ng8ErDLxcz8E',
  authDomain: 'clothing-store-db-35794.firebaseapp.com',
  databaseURL: 'https://clothing-store-db-35794.firebaseio.com',
  projectId: 'clothing-store-db-35794',
  storageBucket: 'clothing-store-db-35794.appspot.com',
  messagingSenderId: '571838591889',
  appId: '1:571838591889:web:e552535bd0de5dc6832030',
  measurementId: 'G-WC4D0VQNB8',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

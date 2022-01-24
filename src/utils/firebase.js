import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA3SuDTWM5rrLvVyxU2gSomfD-BziH2LN8",
  authDomain: "react-my-pets-88664.firebaseapp.com",
  projectId: "react-my-pets-88664",
  storageBucket: "react-my-pets-88664.appspot.com",
  messagingSenderId: "706473533515",
  appId: "1:706473533515:web:4ab277d78be46a12f72dce"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('Logged In:');
  } else {
    console.log('Logged Out:');
  }
});
export default firebase;
export const auth = firebase.auth();
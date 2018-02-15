import * as firebase from 'firebase';
import firebaseConfig from './firebaseConfig.json';

export function initializeFirebase() {
  // Initialize Firebase
  if (!firebaseConfig || !firebaseConfig.apiKey || firebaseConfig.apiKey === '<YOUR-API-KEY>') {
    throw new Error('Add your own firebaseConfig.json file in the folder /utils/firebaseConfig.json');
  }
  firebase.initializeApp(firebaseConfig);
}

// Firebase LogIn service
export function logInUser(email, password, callback) {

      firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        // Handle Errors here.

      })
      .then(() => {
        const user = firebase.auth().currentUser;
        console.log(user);
        callback();
      });

    }

// Firebase SignUp service
export function signUpUser(email, password, callback){

      firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        // Handle Errors here.
      })
      .then(user => {
        // if user was succesfully registered -> add user to database
        if (user) {
          const email = user.email;
          const uid = user.uid;
          firebase.database().ref('users/' + uid).set({
              email: email
          });
          callback();
        }
      });
}

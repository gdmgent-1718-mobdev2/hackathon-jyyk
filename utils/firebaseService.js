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
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        
      })
      .then(() => {
        const user = firebase.auth().currentUser;
        if (user) {
          callback(user);
        }
      });

    }

// Firebase SignUp service
export function signUpUser(name, email, password, callback){

      firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      })
      .then(user => {
        // if user was succesfully registered -> add user to database
        if (user) {
          const email = user.email;
          const uid = user.uid;
          firebase.database().ref('users/' + uid).set({
              name: name,
              email: email
          });
          user.updateProfile({
            displayName: name,
          })
          .then(function() {
            // Update successful.
            const user = firebase.auth().currentUser;
            callback(user);
          })
          .catch(function(error) {
            // An error happened.
            console.log(error);
          });
        }
      });
}

export function logout() {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
    console.log(error);
  });
}

export function checkLoggedIn(){
  return firebase.auth().currentUser;
}
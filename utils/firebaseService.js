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
    try{
      firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
        console.log(user);
        callback();
      });

    }
    catch(error){
      console.log(error.toString());
    }
}

// Firebase SignUp service
export function signUpUser(email, password){
    try{
      if(password.length<6){
        alert('please enter atleast 6 characters')
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password);

    }
    catch(error){
      console.log(error.toString());
    }
}

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

export function updateUser(name, email, password, uid, callback){
  const user = firebase.auth().currentUser;
  const credential = firebase.auth.EmailAuthProvider.credential(
    user.email, 
    password
  );
  user.reauthenticateWithCredential(credential).then(function() {
    // User re-authenticated.

    // Updating profile
    user.updateProfile({
      displayName: name
    })
    // Updating profile in database
    .then(function() {
      firebase.database().ref('users/' + uid).update({
        name: name
      });
      callback(user);
    })
    .catch(error => {
      // Handle Errors here.
      const errorMessage = error.message;
      alert(errorMessage);
    })

    // Updating email
    user.updateEmail(email)
    // Updating email in database
    .then(function() {
      firebase.database().ref('users/' + uid).update({
        email: email
      });
      callback(user);
    })
    .catch(error => {
      // Handle Errors here.
      const errorMessage = error.message;
      alert(errorMessage);
    });
  })

  // Re-authentication failed
  .catch(function(error) {
    // Handle Errors here.
    const errorMessage = error.message;
    alert(errorMessage);
  });
}

export function logout() {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
    console.log(error);
  });
}

export function checkLoggedIn(callback){
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      callback(user);
    } else {
      // No user is signed in.
    }
  });
}

export function getTransactions(uid) {
  let response = [];
  firebase.database().ref('transactions/' + uid).on('child_added', snapshot => {
    response.push(snapshot);
  });
  console.log(response);
  return response;
}

export function processTransaction(data, uid) {
  const transactionsKey = firebase.database().ref('transactions/' + uid).push().key;
  let updates = {};
  updates['transactions/' + uid + '/' + transactionsKey] = data;
  firebase.database().ref().update(updates);
  firebase.database().ref('users/' + uid).transaction(function(user) {
    if (user) {
      if (user.totalAmount) {
        if (data.transactionType === 'in') {
          user.totalAmount = user.totalAmount + data.amount;
        } else {
          user.totalAmount = user.totalAmount - data.amount;
        }
      } 
      else {
          user.totalAmount = data.amount;
      }
    }
    return user;
  });
}
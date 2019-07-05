//import firebase from 'firebase'
import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDUqMdHOUzfSGbD6XSmDfEkNUcYkHIc8Rc",
    authDomain: "minhbuu-reactjs.firebaseapp.com",
    databaseURL: "https://minhbuu-reactjs.firebaseio.com",
    projectId: "minhbuu-reactjs",
    storageBucket: "",
    messagingSenderId: "573451093280",
    appId: "1:573451093280:web:cee98a368449c8ac"
  };
  
  
export  default function initFirebase(){
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
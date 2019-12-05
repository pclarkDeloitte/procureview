import firebase from 'firebase';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCJ4cBIhorfsIC6nGj-ir6CwiUhDdVV8Cc",
    authDomain: "procureview.firebaseapp.com",
    databaseURL: "https://procureview.firebaseio.com",
    projectId: "procureview",
    storageBucket: "procureview.appspot.com",
    messagingSenderId: "482701050465",
    appId: "1:482701050465:web:b32d8ca70957b12d9d6020",
    measurementId: "G-QFVNLHKQSZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
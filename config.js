import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBfU5ZaFsywmoRdZWgkZLr2VsfMtt2uxWw",
    authDomain: "procras-8e655.firebaseapp.com",
    databaseURL: "https://procras-8e655-default-rtdb.firebaseio.com",
    projectId: "procras-8e655",
    storageBucket: "procras-8e655.appspot.com",
    messagingSenderId: "455544297104",
    appId: "1:455544297104:web:9c96c9510ad851f45e6a15"
};

// Initialize Firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
export default firebase.database()
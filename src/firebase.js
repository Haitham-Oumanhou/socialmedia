import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsu-W47aEFTTl4GnWQTLVWEbtrZuc5bzM",
    authDomain: "socialmedia-7eaf3.firebaseapp.com",
    projectId: "socialmedia-7eaf3",
    storageBucket: "socialmedia-7eaf3.appspot.com",
    messagingSenderId: "299127219784",
    appId: "1:299127219784:web:88542c4a62253f6f855a7d",
    measurementId: "G-58Q93BMBYL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{ auth, provider};
export default db;
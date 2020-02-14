import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCZWp5wXszUdAc6N_8LREUnZ5dUE2Ny_xE",
    authDomain: "majog-db.firebaseapp.com",
    databaseURL: "https://majog-db.firebaseio.com",
    projectId: "majog-db",
    storageBucket: "majog-db.appspot.com",
    messagingSenderId: "1086729471625",
    appId: "1:1086729471625:web:7e87cad88cc060f3bca858",
    measurementId: "G-TGD01GR6CP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
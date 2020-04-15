import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBcafwwQSJIIgwtysZgmURS_QLTBVURhEQ",
    authDomain: "majog-8e658.firebaseapp.com",
    databaseURL: "https://majog-8e658.firebaseio.com",
    projectId: "majog-8e658",
    storageBucket: "majog-8e658.appspot.com",
    messagingSenderId: "316344707675",
    appId: "1:316344707675:web:82129d3fef5d04860c2d7e",
    measurementId: "G-HKG91Y93V2"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyB2ALFCZ-IxKM7jeOZEDlTXBciXZUesBvs",
    authDomain: "e-shoper-8e03b.firebaseapp.com",
    databaseURL: "https://e-shoper-8e03b.firebaseio.com",
    projectId: "e-shoper-8e03b",
    storageBucket: "e-shoper-8e03b.appspot.com",
    messagingSenderId: "282070265787",
    appId: "1:282070265787:web:2664cb2f91547bfed2de9e",
    measurementId: "G-G720PG63RH"
};

/* Store user in database */
export const createUserProfileDocument = async (userAuth,additionalData) => {
    if(!userAuth) return; /* if user is not exist */

    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    console.log(snapShot);
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(err){
            console.log('Error creating user: ',err.massage);
        }
    }
    return userRef;
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({propmt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB0WXQBi230y9N74Zs4GQK0x9vRIJrcMw0",
    authDomain: "clothing-store-80481.firebaseapp.com",
    databaseURL: "https://clothing-store-80481-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "clothing-store-80481",
    storageBucket: "clothing-store-80481.appspot.com",
    messagingSenderId: "647875620947",
    appId: "1:647875620947:web:a2640b3d85c0c8267056a6",
    measurementId: "G-Q1DZBBCKMX"
};

const firebaseApp = initializeApp(firebaseConfig);


// Регистрирую нового пользователя на сайте

export const auth = getAuth(); 
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, aditionalInformation = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...aditionalInformation,
            });
        } catch (error) {
            console.log(error.message);
        }
    }
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    //controls the vast majority or services within firebase. If one of them changes, my app won't stop working
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth);
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
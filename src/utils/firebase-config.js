// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB3YIHW_ZPOA8jTyKVhyuYwABv_LRBQajI",
    authDomain: "netflix-react-3fd0a.firebaseapp.com",
    projectId: "netflix-react-3fd0a",
    storageBucket: "netflix-react-3fd0a.appspot.com",
    messagingSenderId: "404395300169",
    appId: "1:404395300169:web:0da9efbd611c41c763b698",
    measurementId: "G-3EEGH6KYB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: replace with your own config
const firebaseConfig = {
    apiKey: "AIzaSyB4R-tsbMRQ8g_KpeVPQRGhSCkjA9suyG0",
    authDomain: "pair-61-dts-mini-project.firebaseapp.com",
    projectId: "pair-61-dts-mini-project",
    storageBucket: "pair-61-dts-mini-project.appspot.com",
    messagingSenderId: "544842966452",
    appId: "1:544842966452:web:cd641c57ff55fd40ccfee1"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
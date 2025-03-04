import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "pair-61-dts-mini-project.firebaseapp.com",
  projectId: "pair-61-dts-mini-project",
  storageBucket: "pair-61-dts-mini-project.appspot.com",
  messagingSenderId: "544842966452",
  appId: "1:544842966452:web:cd641c57ff55fd40ccfee1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
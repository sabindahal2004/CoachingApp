// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCH-jHWEJzZ473tPjk63UTnBhaO4wK9PBA',
  authDomain: 'coachingapp-cf598.firebaseapp.com',
  projectId: 'coachingapp-cf598',
  storageBucket: 'coachingapp-cf598.firebasestorage.app',
  messagingSenderId: '343142676371',
  appId: '1:343142676371:web:5908930774254c74f29a66',
  measurementId: 'G-FECED4B3X6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app); 

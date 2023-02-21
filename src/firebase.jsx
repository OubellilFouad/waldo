import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCengcpwiwGiCLl13Lxy3rkKV4srs4zVX8",
    authDomain: "waldo-c009e.firebaseapp.com",
    projectId: "waldo-c009e",
    storageBucket: "waldo-c009e.appspot.com",
    messagingSenderId: "14777911495",
    appId: "1:14777911495:web:ee84a46bf9bba7dcd916e2"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const images = getStorage(app);
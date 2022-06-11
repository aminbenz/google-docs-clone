import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDkB0Hj7RZWGb2w5dXfPOPQz-DwK9EZ9mU',
  authDomain: 'docs-clone-d3226.firebaseapp.com',
  projectId: 'docs-clone-d3226',
  storageBucket: 'docs-clone-d3226.appspot.com',
  messagingSenderId: '522832823121',
  appId: '1:522832823121:web:6601177e277ba8134ec970',
  measurementId: 'G-7SZDEMRZN6',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;

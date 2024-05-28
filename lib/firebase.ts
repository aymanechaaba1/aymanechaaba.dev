import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCP5_cH1HnxLBU9Ofe2uP2mbB_mkIkqqEw',
  authDomain: 'portfolio-fec6a.firebaseapp.com',
  projectId: 'portfolio-fec6a',
  storageBucket: 'portfolio-fec6a.appspot.com',
  messagingSenderId: '212218973111',
  appId: '1:212218973111:web:380b9cac854327ceee7632',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };

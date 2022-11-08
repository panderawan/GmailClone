import { GoogleAuthProvider, getAuth } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDNho5Ua3rErBzbgf3HIn2DVdkCHnYdvMQ',

  authDomain: 'clone-ruddyautem.firebaseapp.com',

  projectId: 'clone-ruddyautem',

  storageBucket: 'clone-ruddyautem.appspot.com',

  messagingSenderId: '264300978773',

  appId: '1:264300978773:web:62bd223a46d6d8ce9caadc',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { db, auth, provider };

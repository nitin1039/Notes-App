import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
 

const firebaseConfig={
    apiKey: "AIzaSyBOWGqJuUQj_lO4mAvsVHqrq74osXTrX_w",
  authDomain: "notesapp-ba258.firebaseapp.com",
  projectId: "notesapp-ba258",
  storageBucket: "notesapp-ba258.appspot.com",
  messagingSenderId: "958277808644",
  appId: "1:958277808644:web:63481580fe59cb51477b51",
  measurementId: "G-58MED7VCZ1"
}


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase};

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCDwmX4PMe5ccUwoVdM9eNRRk4Q8C3qcys",
    authDomain: "e-clone-dd9f4.firebaseapp.com",
    projectId: "e-clone-dd9f4",
    storageBucket: "e-clone-dd9f4.appspot.com",
    messagingSenderId: "616769031807",
    appId: "1:616769031807:web:5237c7072dc39bf54f394a",
    measurementId: "G-F46RJJP2J6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
import * as firebase from "firebase";

const firebaseConfig = process.env.FIREBASE_CONFIG;

firebase.initializeApp(firebaseConfig);

export default firebase;

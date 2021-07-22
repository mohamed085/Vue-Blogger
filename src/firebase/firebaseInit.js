import firebase from "firebase/app";
import "firebase/firebase";

let firebaseConfig = {
    apiKey: "AIzaSyCUdag9YahFemoxBkRj2qOk75FeJDxGheg",
    authDomain: "fireblog-407f9.firebaseapp.com",
    projectId: "fireblog-407f9",
    storageBucket: "fireblog-407f9.appspot.com",
    messagingSenderId: "274625045452",
    appId: "1:274625045452:web:beaac4e5a8499b905db369",
    measurementId: "G-G5WJ3LWZ73"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { timestamp };
export default firebaseApp.firestore();
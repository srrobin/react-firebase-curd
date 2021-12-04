import firebase from "firebase";
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCw9oeatfLd1fcAtx-Ple8WZofCHFcRemw",
  authDomain: "react-crud-fd5de.firebaseapp.com",
  projectId: "react-crud-fd5de",
  storageBucket: "react-crud-fd5de.appspot.com",
  messagingSenderId: "1043934040415",
  appId: "1:1043934040415:web:235d38f330cbce816fe6ea"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
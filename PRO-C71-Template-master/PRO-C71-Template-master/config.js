import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyAGgiOBtmiy2Yf_ULP543UgLi_9h9hSPy4",
  authDomain: "pro-71-bb583.firebaseapp.com",
  projectId: "pro-71-bb583",
  storageBucket: "pro-71-bb583.appspot.com",
  messagingSenderId: "483386117625",
  appId: "1:483386117625:web:31742e8742a8da4d0c8128"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

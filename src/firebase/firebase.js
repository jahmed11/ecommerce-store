import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyA4hV_dbi12b1SMVHpeDdBuhdmR9B8vsmI",
  authDomain: "e-commerce-830d5.firebaseapp.com",
  databaseURL: "https://e-commerce-830d5.firebaseio.com",
  projectId: "e-commerce-830d5",
  storageBucket: "e-commerce-830d5.appspot.com",
  messagingSenderId: "1067403406579",
  appId: "1:1067403406579:web:5667521a6448c77e765b86",
  measurementId: "G-FS9KE960K0",
};
// Initialize Firebase
const fireBase = firebase.initializeApp(firebaseConfig);
//firebase.firestore();
//firebase.analytics();

export default fireBase;

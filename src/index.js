import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/functions';
import 'firebase/firestore';
import 'firebase/auth';
let config = {
  apiKey: "AIzaSyAd_HI46GGKYgXqxTqBxAzwsu33crBfR_M",
    authDomain: "matrimony-2731c.firebaseapp.com",
    projectId: "matrimony-2731c",
    storageBucket: "matrimony-2731c.appspot.com",
    messagingSenderId: "525971447574",
    appId: "1:525971447574:web:1ed1862c0ff29727c9ba37",
    measurementId: "G-WJGPYMPSN1"


};
firebase.initializeApp(config);
firebase.auth().useEmulator("http://localhost:9099")

firebase.storage().useEmulator("localhost",9199);

firebase.functions().useEmulator("localhost",5001);

firebase.firestore().useEmulator("localhost",8080);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

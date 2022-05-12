import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDKVOxvS5SsdW9Nak4YK1TOWj1VhmPKnjo",
  authDomain: "estacion-mathi.firebaseapp.com",
  projectId: "estacion-mathi",
  storageBucket: "estacion-mathi.appspot.com",
  messagingSenderId: "399499018820",
  appId: "1:399499018820:web:595859b8c0e3b690b9b211"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

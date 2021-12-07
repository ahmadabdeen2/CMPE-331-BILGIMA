// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyB2Cz897EJvqmHkOh09Wx5Kr3cyyLG5JS8",

  authDomain: "bilgi-messaging-app.firebaseapp.com",

  projectId: "bilgi-messaging-app",

  storageBucket: "bilgi-messaging-app.appspot.com",

  messagingSenderId: "335065667530",

  appId: "1:335065667530:web:a3eab079eb3614b0316133",

  measurementId: "${config.measurementId}"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
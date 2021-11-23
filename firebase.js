import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDyGJYNIkVDJ73Epht2Xt_sxDIoQTJ1xIU",
    authDomain: "contactbook-d96a7.firebaseapp.com",
    projectId: "contactbook-d96a7",
    storageBucket: "contactbook-d96a7.appspot.com",
    messagingSenderId: "436672833290",
    appId: "1:436672833290:web:d362aec6c4d1bdf0627cf3"
};


var app = firebase.initializeApp(firebaseConfig);

export default app;
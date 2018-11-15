// This file holds configuration for Firebase

import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD9TXblODPV_Vyktdl_0_YqIZ80eVYp46g",
    authDomain: "myblog-99515.firebaseapp.com",
    databaseURL: "https://myblog-99515.firebaseio.com",
    projectId: "myblog-99515",
    storageBucket: "myblog-99515.appspot.com",
    messagingSenderId: "204421284266"
};

if(!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
};
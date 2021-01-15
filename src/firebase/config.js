import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'

  var firebaseConfig = {
    apiKey: "AIzaSyAUKLDnsFdAVFFdMG8EY_jjadyERaG3aNc",
    authDomain: "chef-lyf.firebaseapp.com",
    databaseURL: "https://chef-lyf.firebaseio.com",
    projectId: "chef-lyf",
    storageBucket: "chef-lyf.appspot.com",
    messagingSenderId: "20026856161",
    appId: "1:20026856161:web:dded78a03594c8658a9da0",
    measurementId: "G-LGFMQY6L5T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectFirestore, projectStorage, timestamp };
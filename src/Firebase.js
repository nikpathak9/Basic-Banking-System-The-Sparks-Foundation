import  firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDlEKYdBpT9h4qdjQ-ORpAYhPj-qfEk4wM",
  authDomain: "banking-app-8f73a.firebaseapp.com",
  projectId: "banking-app-8f73a",
  storageBucket: "banking-app-8f73a.appspot.com",
  messagingSenderId: "27254220335",
  appId: "1:27254220335:web:0085549e83cec41318c8da",
  measurementId: "G-MCZT5D237S"
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
//   <script src="https://www.gstatic.com/firebasejs/8.3.0/firebase-app.js"></script>

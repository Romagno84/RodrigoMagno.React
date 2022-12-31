// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAyQ3WZnqNRR984bYX4iQ7t_Fc9ZNIlH4",
  authDomain: "delivery-de-bebidas-sos.firebaseapp.com",
  projectId: "delivery-de-bebidas-sos",
  storageBucket: "delivery-de-bebidas-sos.appspot.com",
  messagingSenderId: "473191371880",
  appId: "1:473191371880:web:d3739b6b4ef97df8f917dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize Cloud Firestore and get a referencia to the service 
export const db = getFirestore(app)
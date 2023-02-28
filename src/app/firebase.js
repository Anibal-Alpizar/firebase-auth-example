// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIvNzh3oMC2PXWICznUB4kzDi6G73NHig",
  authDomain: "fir-app-tuto-4da51.firebaseapp.com",
  projectId: "fir-app-tuto-4da51",
  storageBucket: "fir-app-tuto-4da51.appspot.com",
  messagingSenderId: "926166054316",
  appId: "1:926166054316:web:bddf71a12fe6a27c46f609",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

console.log(app)

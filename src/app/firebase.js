import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCIvNzh3oMC2PXWICznUB4kzDi6G73NHig",
  authDomain: "fir-app-tuto-4da51.firebaseapp.com",
  projectId: "fir-app-tuto-4da51",
  storageBucket: "fir-app-tuto-4da51.appspot.com",
  messagingSenderId: "926166054316",
  appId: "1:926166054316:web:bddf71a12fe6a27c46f609",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

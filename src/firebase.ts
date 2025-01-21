import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDwcUjz5fR5cU4oEWdFd5O1yTVG8pgBZqU",
  authDomain: "hubb-ecommerce.firebaseapp.com",
  projectId: "hubb-ecommerce",
  storageBucket: "hubb-ecommerce.firebasestorage.app",
  messagingSenderId: "151770102645",
  appId: "1:151770102645:web:1f74b71b40a8c2f534313c",
  measurementId: "G-BCHFMVQE0S"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-LLFkoMKhHtmgsxieOt8qpwsb-4a8Jl8",
  authDomain: "e-commerce-coder-ignacio-perez.firebaseapp.com",
  projectId: "e-commerce-coder-ignacio-perez",
  storageBucket: "e-commerce-coder-ignacio-perez.appspot.com",
  messagingSenderId: "535869283071",
  appId: "1:535869283071:web:06c366a26810eb08b14aca",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;

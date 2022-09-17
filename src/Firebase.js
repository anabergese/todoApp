import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyCwVeGDvWyau2NfQVFFBBZJw7_X2HmtRG0",
  authDomain: "todoapp-ad0d4.firebaseapp.com",
  projectId: "todoapp-ad0d4",
  storageBucket: "todoapp-ad0d4.appspot.com",
  messagingSenderId: "315910226271",
  appId: "1:315910226271:web:73b03b0dc85dea0706f6ea",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { db, storage };

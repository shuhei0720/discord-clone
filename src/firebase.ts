import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiLweJIZI9WMbscKCsiyy4Qqgvua2_AG8",
  authDomain: "discord-clone-91bdb.firebaseapp.com",
  projectId: "discord-clone-91bdb",
  storageBucket: "discord-clone-91bdb.firebasestorage.app",
  messagingSenderId: "613674105105",
  appId: "1:613674105105:web:0c2a91d7c1df149b4df4b0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };

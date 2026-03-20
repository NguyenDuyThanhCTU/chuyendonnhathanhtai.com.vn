import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCwl5zO5SUZVHi03-QTEJwh0tHMJV4k-Ls",

  authDomain: "xedulichhoanggia.firebaseapp.com",

  projectId: "xedulichhoanggia",

  storageBucket: "xedulichhoanggia.firebasestorage.app",

  messagingSenderId: "758193547802",

  appId: "1:758193547802:web:0d859b1f4ee29f3dd67fa3",

  measurementId: "G-ZMJLP88KK8",
};

const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export const auth = getAuth(app);

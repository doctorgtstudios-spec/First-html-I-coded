import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC05ZF9-U1ikn75Q59lD_tMm9Gf3aKjvM0",
    authDomain: "bingus-admin-panel-stuff.firebaseapp.com",
    projectId: "bingus-admin-panel-stuff",
    storageBucket: "bingus-admin-panel-stuff.firebasestorage.app",
    messagingSenderId: "256930657631",
    appId: "1:930657631:web:2fa28ecef32472382172ea"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

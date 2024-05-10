// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArM8JdbkB4HmzJGbllnK-tzyPgeMjT_Og",
    authDomain: "soheldev.firebaseapp.com",
    projectId: "soheldev",
    storageBucket: "soheldev.appspot.com",
    messagingSenderId: "548733852171",
    appId: "1:548733852171:web:9d2f7bcc078f834de9450e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA1JkCM8yrdLjyuGEkkoZ92_NASIs2edEE",
    authDomain: "realtime-chat-7a904.firebaseapp.com",
    databaseURL: "https://realtime-chat-7a904-default-rtdb.firebaseio.com",
    projectId: "realtime-chat-7a904",
    storageBucket: "realtime-chat-7a904.appspot.com",
    messagingSenderId: "620481217764",
    appId: "1:620481217764:web:5cdc0623d9b7a8227498f1",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };

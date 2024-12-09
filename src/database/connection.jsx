import { initializeApp } from "firebase/app";
import { getFirestore, collection, query } from "firebase/firestore";

const connection = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyANryJnROYlQT3ayzwC5p8TXcLcXlQp_Dw",
        authDomain: "weatherapp-21.firebaseapp.com",
        projectId: "weatherapp-21",
        storageBucket: "weatherapp-21.appspot.com",
        messagingSenderId: "447768893875",
        appId: "1:447768893875:web:7190b572241ded1f96d3c6"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);


    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);
    const usersCollection = collection(db, "usuarios");
    const usersQuery = query(usersCollection);
    console.log(usersQuery);
    return usersQuery;

   
}

export default connection;
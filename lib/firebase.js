// Import the functions you need from the SDKs you need
import axios from "axios";
import { initializeApp } from "firebase/app";
import { collection, addDoc, setDoc, getFirestore, doc, onSnapshot } from "firebase/firestore"; 
import { getBlob, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsZ57LEzJ1IgUqjvvSoqCxTC1U2ZcpVRY",
    authDomain: "store-json-test.firebaseapp.com",
    projectId: "store-json-test",
    storageBucket: "store-json-test.appspot.com",
    messagingSenderId: "50965771670",
    appId: "1:50965771670:web:9fddc0e2388fcbddc319b7"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const db = getFirestore(app);



// Create a reference to 'mountains.jpg'
const datasRef = ref(storage, 'data.json');


export const uploadJSONFileToStorage = async (data) => {

    // const saveObj = { "a": 1000 }; // tmp
    try {
        const text = JSON.stringify(data);
        const type = "text/plain";
        const file = new Blob([text], { type: type });
        
        uploadBytes(datasRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
    } catch (error) {
        throw new Error(error)
    }
   
}

export const getJSONFileFromStorage = async () => {
    return getDownloadURL(datasRef).then((url => url))
}

export const getMeetingSchedule = async () => {
    const dataFileURL = await getJSONFileFromStorage()

    if (dataFileURL) {

        const dataFileJSON = await axios.get(dataFileURL).then((response) => {
            return response.data
        })
    
        const meetings = dataFileJSON.VentuzXml.Meeting
        
        return meetings
    }
}



export const getMeetingScheduleData = () => {

    const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
        const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        console.log(source, " data: ", doc.data());
      });
      
}
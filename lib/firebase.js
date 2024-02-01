// Import the functions you need from the SDKs you need
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getBlob, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABbNw1YdVZ-4GRkcXe-2JKIYaZLTlsJGg",
  authDomain: "exhibition-web-app-94e41.firebaseapp.com",
  projectId: "exhibition-web-app-94e41",
  storageBucket: "exhibition-web-app-94e41.appspot.com",
  messagingSenderId: "685352793285",
  appId: "1:685352793285:web:6c6f2d968ba626b205ecac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Create a reference to 'mountains.jpg'
const datasRef = ref(storage, 'data.json');


export const uploadJSONFileToStorage = (data) => {

    // const saveObj = { "a": 1000 }; // tmp

    const text = JSON.stringify(data);
    const type = "text/plain";
    const file = new Blob([text], { type: type });

    uploadBytes(datasRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
    });
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
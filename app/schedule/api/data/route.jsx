import {db, getJSONFileFromStorage } from '@/lib/firebase';
import { doc, getDoc } from "firebase/firestore";

// import axios from 'axios';

export const dynamic = 'force-dynamic' // defaults to auto
export const revalidate = 0
export const fetchCache = 'force-no-store'


export async function GET() {

    // const dataFileURL = await getJSONFileFromStorage()

    // if (dataFileURL) {

    //     const dataFileJSON = await axios.get(dataFileURL).then((response) => {
    //         return response.data
    //     })
    
    //     const meetings = dataFileJSON.VentuzXml.Meeting
        
    //     return Response.json(meetings)
    // }

    const docRef = doc(db, "schedules", "json");

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        return Response.json(docSnap.data())
    } else {
    // docSnap.data() will be undefined in this case
        return Response.json({ Message: 'Error in getting schedules data', status: 500 });
    }

        
}
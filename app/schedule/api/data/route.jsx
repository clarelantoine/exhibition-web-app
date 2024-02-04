import {db, getJSONFileFromStorage } from '@/lib/firebase';
import { doc, getDoc } from "firebase/firestore";
import { revalidatePath } from 'next/cache';

// import axios from 'axios';

export async function GET() {

    try {
        const docRef = doc(db, "schedules", "json");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            // revalidatePath('/schedule/api/data')
            return Response.json(docSnap.data())
        }

    } catch (error) {
        return Response.json({ Message: `Error in getting schedules data:' ${error.message}`, status: 500 });
    }
        
}
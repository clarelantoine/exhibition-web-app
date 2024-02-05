import {db, getJSONFileFromStorage } from '@/lib/firebase';
import { doc, getDoc } from "firebase/firestore";

export const revalidate = 0

export async function GET() {

    try {
        const docRef = doc(db, "schedules", "json");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return Response.json(docSnap.data())
        }

    } catch (error) {
        return Response.json({ Message: `Error in getting schedules data:' ${error.message}`, status: 500 });
    }
        
}
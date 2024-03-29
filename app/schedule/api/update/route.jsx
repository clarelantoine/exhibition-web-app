// Import necessary modules
import { db, uploadJSONFileToStorage } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { revalidatePath } from "next/cache";

// export const dynamic = 'force-dynamic' // defaults to auto
// export const revalidate = 0
// export const fetchCache = 'force-no-store'

export async function POST (req) {
  
    try {
        const data = await req.json();
        
        if(!data.VentuzXml.Meeting) {
            await setDoc(doc(db, "schedules", "json"), {data: []});
        }else {
            await setDoc(doc(db, "schedules", "json"), {data: [].concat(data.VentuzXml.Meeting)});
        }
        return Response.json({ Message: "Success, JSON has been updated", status: 201 });

    } catch (error) {
        return Response.json({ Message: `Error in updating the JSON:' ${error.message}`, status: 500 });
    }

};
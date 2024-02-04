// Import necessary modules
import { db, uploadJSONFileToStorage } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { revalidatePath } from "next/cache";

// export const dynamic = 'force-dynamic' // defaults to auto
// export const revalidate = 0
// export const fetchCache = 'force-no-store'


// Define the POST handler for the file upload
export async function POST (req, res) {
    // console.log(req);
    // if(req.method === "POST") {
        const data = await req.json();
        try {
            // await uploadJSONFileToStorage(data);
            // let dataArray = []
            if(!data.VentuzXml.Meeting) {
                await setDoc(doc(db, "schedules", "json"), {data: []});
            }else {
                await setDoc(doc(db, "schedules", "json"), {data: [].concat(data.VentuzXml.Meeting)});
            }
            revalidatePath('schedule/api/update')
            return Response.json({ revalidated: true, Message: "Success, JSON has been updated", status: 201 });

        } catch (error) {
            revalidatePath('schedule/api/update')
            return Response.json({ revalidated: true, Message: `Error in updating the JSON:' ${error.message}`, status: 500 });
        }
    // }
};
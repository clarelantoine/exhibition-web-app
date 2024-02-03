// Import necessary modules
import { db, uploadJSONFileToStorage } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";

// export const revalidate = 0

// Define the POST handler for the file upload
export const POST = async (req, res) => {

    if(req.method === "POST") {
        const data = await req.json();
        try {
            // await uploadJSONFileToStorage(data);
            // let dataArray = []
            if(!data.VentuzXml.Meeting) {
                await setDoc(doc(db, "schedules", "json"), {data: []});
            }else {
                await setDoc(doc(db, "schedules", "json"), {data: [].concat(data.VentuzXml.Meeting)});
            }
            
            return Response.json({ Message: "Success, JSON has been updated", status: 201 });

        } catch (error) {
            return Response.json({ Message: `Error in updating the JSON:' ${error.message}`, status: 500 });
        }
    }
};
import { getJSONFileFromStorage } from '@/lib/firebase';
import axios from 'axios';

export async function GET() {

    const dataFileURL = await getJSONFileFromStorage()

    if (dataFileURL) {

        const dataFileJSON = await axios.get(dataFileURL).then((response) => {
            return response.data
        })
    
        const meetings = dataFileJSON.VentuzXml.Meeting
        
        return Response.json(meetings)
    }
        
}
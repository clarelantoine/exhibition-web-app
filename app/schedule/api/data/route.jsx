import fsPromises from 'fs/promises';
import path from 'path'

export async function GET() {
    // Get the path of the json file
    const filePath = path.join(process.cwd(), '/tmp/data.json');
    // Read the json file
    const jsonData = await fsPromises.readFile(filePath);
    // Parse data as json
    const objectData = JSON.parse(jsonData);

    const meetings = objectData.VentuzXml.Meeting

    return Response.json({meetings})
}
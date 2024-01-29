import { promises as fs } from 'fs';
import data from './data.json'

export default async function RoomSchedule() {
    // const file = await fs.readFile(process.cwd() + '/data.json', 'utf8');
    // const data = JSON.parse(data);
    console.log(data);

    return(
        <h1>room schedule</h1>
    )
}
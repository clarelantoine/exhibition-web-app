'use client'

import { UserContext } from "@/contexts/user.context";
import { fetcher } from "@/lib/fetcher";
import Link from "next/link";
import { useContext } from "react";
import useSWR from 'swr'
// import RoomSchedule from "@/components/room-schedule/room-schedule.component";

export default function Schedule () {

    const {handleUserLogout} = useContext(UserContext)
    const { data, error, isLoading } = useSWR('/schedule/api', fetcher)
    // const meetings = data.meetings
    if(data) {
        // console.log(data.meetings);
        const meetings = data.meetings
    // const rooms = meetings.reduce((acc, room) => {
    //     const { MeetingRoom, Schedule } = room;
    //     acc[MeetingRoom.toLowerCase()] = Schedule;
    //     return acc;
    // }, {})

    const rooms = meetings.reduce((acc, meeting) => {
        let {MeetingRoom, Schedule} = meeting;
        return {...acc, [MeetingRoom]: [...(acc[MeetingRoom] || []), meeting]};
    }, {});

    

    Object.keys(rooms).map((room) => {
        console.log(room);
    })
    
    }
    
    
    return (
        <div>
            <h1>Schedule page</h1>
            {/* <a href="/schedule/test">text link 1</a> */}
            <Link href='schedule/test'>text link</Link>
            <p onClick={handleUserLogout}>Logout</p>
            {/* <RoomSchedule /> */}
        </div>
    )
}
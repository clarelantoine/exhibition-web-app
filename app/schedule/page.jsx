'use client'

import { UserContext } from "@/contexts/user.context";
import { fetcher } from "@/lib/fetcher";
import Link from "next/link";
import { useContext } from "react";
import useSWR from 'swr'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

import './schedule.styles.scss'
// import RoomSchedule from "@/components/room-schedule/room-schedule.component";

export default function Schedule () {

    const {handleUserLogout} = useContext(UserContext)
    const { data, error, isLoading } = useSWR('/schedule/api/data', fetcher)
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
        <div className="schedule__wrapper">
            <aside className="schedule__days">
                <Link href="#" className="schedule__days__item active">Day 1</Link>
                <Link href="#" className="schedule__days__item">Day 2</Link>
                <Link href="#" className="schedule__days__item">Day 3</Link>
                <Link href="#" className="schedule__days__item">Day 4</Link>
            </aside>
            <main className="schedule__rooms">
                <div className="rooms">
                    <span className="room__navigation__arrow room__previous"><ArrowBackIosNewIcon /></span>
                    <span className="room__name">{`room 1`}</span>
                    <span className="room__navigation__arrow room__next"><ArrowForwardIosIcon /></span>
                </div>
                <div className="meetings">
                    <div className="meeting__card">
                        <span className="meeting__date meeting__detail">
                            <CalendarMonthIcon />
                            20/02/2024
                        </span>
                        <span className="meeting__time meeting__detail">
                            <AccessTimeIcon />
                            14:30 - 15:00
                        </span>
                        <span className="meeting__name meeting__detail">
                            <PermIdentityIcon />
                            John Doe
                        </span>
                    </div>
                    <div className="meeting__card">
                        <span className="meeting__date meeting__detail">
                            <CalendarMonthIcon />
                            20/02/2024
                        </span>
                        <span className="meeting__time meeting__detail">
                            <AccessTimeIcon />
                            14:30 - 15:00
                        </span>
                        <span className="meeting__name meeting__detail">
                            <PermIdentityIcon />
                            John Doe
                        </span>
                    </div>
                    <div className="meeting__card">
                        <span className="meeting__date meeting__detail">
                            <CalendarMonthIcon />
                            20/02/2024
                        </span>
                        <span className="meeting__time meeting__detail">
                            <AccessTimeIcon />
                            14:30 - 15:00
                        </span>
                        <span className="meeting__name meeting__detail">
                            <PermIdentityIcon />
                            John Doe
                        </span>
                    </div>
                </div>
            </main>
            {/* <a href="/schedule/test">text link 1</a> */}
            {/* <Link href='schedule/test'>text link</Link> */}
            
            {/* <RoomSchedule /> */}
        </div>
    )
}
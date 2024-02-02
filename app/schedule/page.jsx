'use client'

import Link from "next/link";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

import './schedule.styles.scss'
import { getMeetingSchedule } from "@/lib/firebase";
import { useContext, useEffect, useState } from "react";
import { ScheduleContext } from "@/contexts/schedule.context";

const roomDefaultValues = {
    previous: null,
    selected: 0,
    next: 1
}
export default function Schedule () {
    const {schedules} = useContext(ScheduleContext)

    const [meetings, setMeetings] = useState(null)
    const [day, setDay] = useState(1)
    const [room, setRoom] = useState(0)

    const handleDayChange = (event) => {

        event.preventDefault()

        const {dataset} = event.target

        document.querySelectorAll('.schedule__days__item').forEach(item => {
            item.classList.remove('active')
        })

        event.target.classList.add('active')
        // console.log(dataset.day);

        setDay(parseInt(dataset.day))
    }

    const handleNextRoom = (event) => {
        event.preventDefault()

        const {dataset} = event.target

        let nextIndex = room

        if(dataset.btn === 'next') {
            console.log('next');
            // nextIndex += 1
            if(nextIndex < 2) nextIndex += 1
        } else {
            console.log('prev');
            // nextIndex -= 1
            if(nextIndex > 0) nextIndex -= 1
        }

        setRoom(nextIndex)
    }

    const getSelectedMeetingsDay = (day, room) => {
        const selectedMeetingsDay = schedules.filter(item => {
            return parseInt(item.Day) === day && parseInt(item.MeetingRoom) === room +1
        })

        setMeetings(selectedMeetingsDay)
    }

    useEffect(() => {
        // console.log("day changed");
        getSelectedMeetingsDay(day, room)

    }, [day, room])

    useEffect(() => {
        console.log(room);
    }, [room])
    
    useEffect(() => {
        // console.log("day changed");
        console.log(meetings);

    }, [meetings])
    

    return (
        <div className="schedule__wrapper">
            <aside className="schedule__days">
                <Link href="#" className="schedule__days__item active" data-day="1" onClick={handleDayChange}>Day 1</Link>
                <Link href="#" className="schedule__days__item" data-day="2" onClick={handleDayChange}>Day 2</Link>
                <Link href="#" className="schedule__days__item" data-day="3" onClick={handleDayChange}>Day 3</Link>
                <Link href="#" className="schedule__days__item" data-day="4" onClick={handleDayChange}>Day 4</Link>
                <Link href="#" className="schedule__days__item" data-day="5" onClick={handleDayChange}>Day 5</Link>
            </aside>
            <main className="schedule__rooms">
                <div className="rooms">
                    <span className="room__navigation__arrow room__previous" data-btn="prev" onClick={handleNextRoom}><ArrowBackIosNewIcon /></span>
                    {/* <span className="room__navigation__arrow room__previous" data-room={`${room.previous}`}><ArrowBackIosNewIcon /></span> */}
                    <span className="room__name">{
                        ['ALAUJA', 'ALMASMAK', 'TUWAIQ'][room]
                    }</span>
                    <span className="room__navigation__arrow room__next" data-btn="next" onClick={handleNextRoom}><ArrowForwardIosIcon /></span>
                    {/* <span className="room__navigation__arrow room__next" data-room={`${room.next}`} onClick={handleNextRoom}><ArrowForwardIosIcon /></span> */}
                </div>
                <div className="meetings">
                    
                    {meetings && meetings.length > 0 ? (
                        meetings.map((item, index) => (
                            <div key={index} className="meeting__card">
                                <span className="meeting__date meeting__detail">
                                    <CalendarMonthIcon />
                                    {item.Date}
                                </span>
                                <span className="meeting__time meeting__detail">
                                    <AccessTimeIcon />
                                    {`${item.StartTime} - ${item.EndTime}`}
                                </span>
                                <span className="meeting__name meeting__detail">
                                    <PermIdentityIcon />
                                    {item.Name}
                                </span>
                            </div>
                        ))
                    ) : (
                        <p className="noschedule__message">No schedule yet...</p>
                    )}
                    
                </div>
            </main>

        </div>
    )
}

// {
//     "MeetingRoom": "2",
//     "Day": "1",
//     "Schedule": "15/02/24",
//     "StartTime": "12:00",
//     "EndTime": "14:00",
//     "Email": "test@mail.com",
//     "Name": "John Doe",
//     "Company": "CA Studio"
// }
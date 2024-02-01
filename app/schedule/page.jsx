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

export default function Schedule () {
    const {schedules} = useContext(ScheduleContext)

    const {meetings, setMeetings} = useState(null)
    const [day, setDay] = useState(1)




    const handleDayChange = (event) => {

        event.preventDefault()

        const {dataset} = event.target

        document.querySelectorAll('.schedule__days__item').forEach(item => {
            item.classList.remove('active')
        })

        event.target.classList.add('active')
        console.log(dataset.day);

        setDay[dataset.day]
    }

    const getSelectedMeetingsDay = (day) => {
        // const selectedMeetingsDay = schedules.filter(item => {
        //     if(item.Schedule)
        // })

        return schedules.map(item => {
            return item
        })
    }

    useEffect(() => {
        console.log(getSelectedMeetingsDay())
    }, [day])

    return (
        <div className="schedule__wrapper">
            <aside className="schedule__days">
                <Link href="#" className="schedule__days__item active" data-day="1" onClick={handleDayChange}>Day 1</Link>
                <Link href="#" className="schedule__days__item" data-day="2" onClick={handleDayChange}>Day 2</Link>
                <Link href="#" className="schedule__days__item" data-day="3" onClick={handleDayChange}>Day 3</Link>
                <Link href="#" className="schedule__days__item" data-day="4" onClick={handleDayChange}>Day 4</Link>
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
'use client'

import Image from "next/image"
import { useContext } from "react"
import { UserContext } from "@/contexts/user.context"
import LogoutIcon from '@mui/icons-material/Logout';

import "./schedule.styles.scss"
import { ScheduleContext } from "@/contexts/schedule.context";


const ScheduleLayout = ({ children }) => {
    
    const {handleUserLogout} = useContext(UserContext)
    const {schedules} = useContext(ScheduleContext)
    
    return (
        <div className="schedule">

            {/* header section */}
            <section className="schedule__header">
                <figure className="logo">
                    <Image src='/images/logo.png' fill alt="sami logo" priority />
                </figure>
                <span className="logout" onClick={handleUserLogout}><LogoutIcon /> Logout</span>
            </section>

            {/* schedule section */}
            <section className="schedule__main">
                    {schedules ? (children) : (<p className="schedule__loader">Loading...</p>)}
                </section>
        </div>
    )
}

export default ScheduleLayout
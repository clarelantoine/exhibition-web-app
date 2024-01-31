'use client'

import Image from "next/image"
import { useContext } from "react"
import { UserContext } from "@/contexts/user.context"
import LogoutIcon from '@mui/icons-material/Logout';

import "./schedule.styles.scss"


const ScheduleLayout = ({ children }) => {
    const {handleUserLogout} = useContext(UserContext)
    return (
        <div className="schedule">

            {/* header */}
            <section className="schedule__header">
                <figure className="logo">
                    <Image src='/images/logo.png' fill alt="sami logo" priority />
                </figure>
                <span className="logout" onClick={handleUserLogout}><LogoutIcon /> Logout</span>
            </section>

            <section className="schedule__main">
                {children}
            </section>


            
        </div>
    )
}

export default ScheduleLayout
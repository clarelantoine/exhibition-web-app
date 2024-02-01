'use client'

import { getMeetingSchedule } from "@/lib/firebase";
import { createContext, useEffect, useState } from "react";

const getSchedulesData = async (setSchedules) => {
    const data = await getMeetingSchedule()
    setSchedules(data)
}


export const ScheduleContext = createContext({
    schedules: null,
    setSchedules: () => {}
})

export const ScheduleProvider = ({children}) => {

    const [schedules, setSchedules] = useState(null)

    useEffect(() => {
        getSchedulesData(setSchedules)
    }, [])
    
    useEffect(() => {
        console.log(schedules)
    }, [schedules])



    const value = {
        schedules,
        setSchedules
    }

    return(
        <ScheduleContext.Provider value={value}>{children}</ScheduleContext.Provider>
    )
}
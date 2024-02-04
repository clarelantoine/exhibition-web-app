'use client'

import { db, getMeetingSchedule } from "@/lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";
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
        // getSchedulesData(setSchedules)

        const unsubscribe = onSnapshot(doc(db, "schedules", "jsonTest"), (doc) => {
            setSchedules(doc.data())
        });
        return unsubscribe;
    }, [])

    const value = {
        schedules,
        setSchedules
    }

    return(
        <ScheduleContext.Provider value={value}>{children}</ScheduleContext.Provider>
    )
}
'use client'

import { UserContext } from "@/contexts/user.context";
import { fetcher } from "@/lib/fetcher";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useContext, useLayoutEffect } from "react";
import useSWR from 'swr'
// import RoomSchedule from "@/components/room-schedule/room-schedule.component";

export default function Schedule () {

    const {handleUserLogout} = useContext(UserContext)
    const { data, error, isLoading } = useSWR('/schedule/api', fetcher)

    console.log(data);
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
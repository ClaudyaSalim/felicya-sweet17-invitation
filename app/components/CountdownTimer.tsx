"use client"

import { useEffect, useState } from "react"

interface Time {
    days: number
    hours: number
    minutes: number
    seconds: number
}

function CalculateTime(dday: Date){
    const timeLeft = dday.getTime() - new Date().getTime()

    const days = Math.floor(timeLeft/(1000*60*60*24)) // 3 days = 259200 secs / 3600 secs * 24 hours
    const hours = Math.floor((timeLeft/(1000*60*60))%24) // 259200 secs divide by 3600 secs per hour and remainder when divide by 24 hours (0 when there is 0 hours left and amount is exactly in days)
    const mins = Math.floor((timeLeft/(1000*60))%60) // 259200 secs divide by 60 secs per min and remainder when divide by 60 mins (0 when there is 0 mins left and amount is exactly in hours)
    const secs = Math.floor((timeLeft/1000)%60) // 259.200.000 millisecs divide by 1000 to get 259200 secs and remainder when divide by 60 secs (0 when there is 0 secs and amount is exactly in minutes)

    return {
        days: days,
        hours: hours,
        minutes: mins,
        seconds: secs
    }
}

export default function CountdownTimer(){
    const dday = new Date('2026-07-18T10:30:00')
    const [timeLeft, setTimeLeft] = useState({days: 0, hours: 0, minutes: 0, seconds: 0})

    useEffect(()=>{
        const timer = setInterval(()=>{
            setTimeLeft(CalculateTime(dday))
        }, 1000)

        return ()=> clearInterval(timer)
    }, [])

    const units = [
        { label: "Days", value: timeLeft.days},
        { label: "Hours", value: timeLeft.hours},
        { label: "Minutes", value: timeLeft.minutes},
        { label: "Seconds", value: timeLeft.seconds},
    ]

    return <div className="flex flex-row items-center gap-3">
        {units.map((unit, i)=><div key={unit.label} className="flex flex-row gap-3">
            <div className="flex flex-col items-center">
                <span className="font-heading text-5xl">{String(unit.value).padStart(2, "0")}</span>
                <span className="uppercase text-sm tracking-widest">{unit.label}</span>
            </div>
            {i!==units.length-1 && <span className="text-5xl">:</span>}
        </div>)}
    </div>
}
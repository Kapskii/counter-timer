import React, { useEffect, useState } from "react";
import { ActionButton } from "../../components/ActionButton";
import s from "./Timer.module.css"


export const Timer = ({ days = 0, hours = 0, minutes = 0, seconds = 0 }) => {

    const [status, setStatus] = useState({ pause: false, end: false })
    const [time, setTime] = useState({ d: days, h: hours, m: minutes, s: seconds });

    const tick = () => {
        if (status.pause || status.end) return;
        setTime(prevTime => {
            let { d, h, m, s } = prevTime;
            if (d === 0 && h === 0 && m === 0 && s === 0) {
                setStatus({ ...status, end: true });
            } else if (h === 0 && m === 0 && s === 0) {
                d -= 1;
                h = 23;
                m = 59;
                s = 59;
            } else if (m === 0 && s === 0) {
                h -= 1;
                m = 59;
                s = 59;
            } else if (s === 0) {
                m -= 1;
                s = 59;
            } else {
                s -= 1;
            }


            return { d, h, m, s };
        });
    };

    const reset = () => {
        setTime({ d: +days, h: +hours, m: +minutes, s: +seconds });
        setStatus({ ...status, pause: false });
        setStatus({ ...status, end: false });
    };

    useEffect(() => {
        const timerID = setInterval(tick, 1000);
        return () => clearInterval(timerID);
    }, [status.pause, status.end]);


    useEffect(() => {
        localStorage.setItem("time", JSON.stringify(time));
    }, [time])

    useEffect(() => {
        const time = localStorage.getItem("time");
        if (time) {
            setTime(JSON.parse(time));
        }
    }, [])


    return (
        <div className={s.container}>
            <h3 className={s.title}>
                {` 
                    ${time.d.toString()}:
                    ${time.h.toString().padStart(2, '0')}:
                    ${time.m.toString().padStart(2, '0')}:
                    ${time.s.toString().padStart(2, '0')}
                `}
            </h3>
            <div>
                <ActionButton title={status.pause ? 'Resume' : 'Pause'} callBack={() => setStatus({ ...status, pause: !status.pause })} />
                <ActionButton title={"Restart"} callBack={reset} />
            </div>
        </div>
    )

}

import React, { useEffect, useState } from "react";
import { ActionButton } from "../../components/ActionButton";
import s from "./Timer.module.css"


export const Timer = ({ days = 0, hours = 0, minutes = 0, seconds = 0 }) => {

    const [pause, setPause] = useState(false)
    const [end, setEnd] = useState(false)
    const [time, setTime] = useState({ d: days, h: hours, m: minutes, s: seconds });

    const tick = () => {
        if (pause || end) return;
        setTime(prevTime => {
            let { d, h, m, s } = prevTime;
            if (d === 0 && h === 0 && m === 0 && s === 0) {
                setEnd(true);
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
        setPause(false);
        setEnd(false);
    };

    useEffect(() => {
        const timerID = setInterval(tick, 1000);
        return () => clearInterval(timerID);
    }, [pause, end]);


    const date = new Date();

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
                <ActionButton title={pause ? 'Resume' : 'Pause'} callBack={() => setPause(!pause)} />
                <ActionButton title={"Restart"} callBack={reset} />
            </div>
        </div>
    )

}

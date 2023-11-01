import React from "react";
import { ActionButton } from "../../components/ActionButton";
import s from "./Timer.module.css"


export const Timer = () => {
    return (
        <div className={s.container}>
            <h3 className={s.title}>00:00:00</h3>
            <div>
                <ActionButton title={"Pause"} callBack={() => { }} />
                <ActionButton title={"Restart"} callBack={() => { }} />
            </div>
        </div>
    )
}

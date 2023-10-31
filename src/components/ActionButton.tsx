import React from "react";
import s from './Button.module.css'

type PropsType = {
    title: string
    callBack: ()=>void
}

export const ActionButton = (props:PropsType) => {
    return( 
        <button className={s.button} onClick={props.callBack}>{props.title}</button>
    )
}
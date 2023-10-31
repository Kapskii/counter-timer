import React, { ChangeEvent, ChangeEventHandler, useState } from "react";

type PropsType = {
    callBack: (e: ChangeEvent<HTMLInputElement>) => void
    title: string
}

export const Input = (props: PropsType) => {


    return (
        <div>
            <div>{props.title}</div>
            <input
                onChange={props.callBack}
                type="number"
            />
        </div>
    )
}
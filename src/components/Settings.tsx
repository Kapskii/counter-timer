import React, { ChangeEvent, useState } from "react";
import { ActionButton } from "./ActionButton";
import { Input } from "./Input";
import s from "./Setting.module.css"
import { CounterDataType } from "../App";

type PropsType = {
    state: CounterDataType
    setState: (value: CounterDataType) => void
}



export const Settings = (props: PropsType) => {

    const [settingState, setSettingState] = useState({ start: 0, max: 0 })


    const setSettings = () => {
        const {max, start} = settingState; //settingState.max, settingState.start

        props.setState({
            ...props.state,
            ...settingState,
            count: start
        })
        // props.count[1](state.start)
        // props.setMax(state.max)
    }

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const maxValue = +e.currentTarget.value;
        setSettingState({ ...settingState, max: maxValue })
    }

    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const startValue = +e.currentTarget.value;
        setSettingState({ ...settingState, start: startValue })
    }



    return (
        <div className={s.container}>
            <h1>Settings</h1>
            <Input
                callBack={onChangeMaxHandler}
                title='max value'
                />
            <Input
                callBack={onChangeStartHandler}
                title='start value'
                />
            <ActionButton title="Set" callBack={setSettings} />
        </div>
    )
}
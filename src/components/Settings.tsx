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
        // props.setState({ ...props.state, count: settingState.start, max: settingState.max, start: settingState.start })
        const {start} = settingState;
        props.setState({...props.state,...settingState,count: start })
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
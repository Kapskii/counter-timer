import React, { useState } from "react";
import { ActionButton } from "../../components/ActionButton";
import s from "./Tablo.module.css";
import { CounterDataType } from "../../App";

type CounterTypeProps = {
    state: CounterDataType;
    setState: (value: CounterDataType) => void;
};

export const Tablo = (props: CounterTypeProps) => {
    const setCountHandler = () => {
        if (props.state.count < props.state.max) {
            let newCount = props.state.count + 1;
            props.setState({ ...props.state, count: newCount });
        }
    };

    const resetCountHandler = () => {
        props.setState({ ...props.state, count: props.state.start });
    };

    return (
        <div className={s.container}>
            <h1 className={s.title}>{props.state.count}</h1>
            <div className={s.buttonContainer}>
                <ActionButton title="+" callBack={setCountHandler} />
                <ActionButton title="Reset" callBack={resetCountHandler} />
            </div>
        </div>
    );
};

import React, { useState } from "react";
import { Tablo } from "./Tablo";
import { Settings } from "./Settings";

export const Counter = () => {

    const [state, setState] = useState({ count: 0, max: 0, start: 0 });

    return (
        <>
        <Tablo state={state} setState={setState}/>
        <Settings state={state} setState={setState}/>
        </>
    )
}
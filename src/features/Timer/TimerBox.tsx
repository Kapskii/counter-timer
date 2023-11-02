import { Timer } from "./Timer"
import { TimerSetting } from "./TimerSetting"

export const TimerBox = () => {
    return (
        <div>
            <Timer days={1} hours={0} minutes={0} seconds={1}/>
            <TimerSetting/>
        </div>
    )
}
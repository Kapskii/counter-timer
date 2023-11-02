import { ActionButton } from "../../components/ActionButton"
import { Input } from "../../components/Input"

export const TimerSetting = () => {
    return (
        <div>
            <Input title="Days" callBack={()=>{}}/>
            <Input title="Hours" callBack={()=>{}}/>
            <Input title="Minuts" callBack={()=>{}}/>
            <Input title="Seconds" callBack={()=>{}}/>
            <ActionButton title="Start" callBack={()=>{}}/>
        </div>
    )
}
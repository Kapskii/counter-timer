import React from "react";
import s from "./Button.module.css";

type PropsType = {
  title: string;
  callBack: () => void;
  disabled?: boolean
};

export const ActionButton = (props: PropsType) => {
  return (
    <button disabled={props.disabled} className={s.button} onClick={props.callBack}>
      {props.title}
    </button>
  );
};

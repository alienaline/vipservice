import React from "react";
import ButtonStyles from "./Button.module.css";

interface IButton {
    type: "submit" | "reset" | "button",
    form?: string,
    buttonText: string
}

function Button(props: IButton) {
    return (
        <button
            type={props.type}
            form={props.form}
            className={ButtonStyles.button} >
            {props.buttonText}
        </button>
    );
}

export default Button;
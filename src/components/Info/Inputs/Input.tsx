import React from "react";
import { Controller } from "react-hook-form";
import InputStyles from "./Input.module.css";
import warningIcon from "../../../assets/img/warningIcon.png";

interface IInputProps {
    legend: string,
    placeholder?: string,
    type: string,
    name: string,
    control: any,
    rules?: object,
    helperText?: string,
    min?: string,
    max?: string
}

function Input(props: IInputProps) {
    return (
        <Controller 
            name={props.name}
            control={props.control}
            rules={props.rules}
            render={({field}) => (
                <fieldset className={InputStyles.fieldset}>
                    <legend     
                        className={InputStyles.legend}>
                        {props.legend}
                    </legend>
                    <input 
                        type={props.type}
                        className={InputStyles.input}
                        placeholder={props.placeholder}
                        value={field.value || ""}
                        min={props.min}
                        onChange={(event) => field.onChange(event)} />
                    <p className={InputStyles.helperText}>
                        {props.helperText && <img className={InputStyles.warningIcon} src={warningIcon} />}
                        {props.helperText || ""}
                    </p>
                </fieldset>
            )} />
    );
}

export default Input;
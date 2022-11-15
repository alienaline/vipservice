import React from "react";
import { Controller, Control } from "react-hook-form";
import InputStyles from "./Input.module.css";
import warningIcon from "../../assets/img/warningIcon.png";
import { IForm } from "../Avia/Form/Form";

interface IInputProps {
    legend: string,
    placeholder?: string,
    type: string,
    name: "from" | "to" | "departureDate" | "arrivalDate",
    control: Control<IForm>,
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
                        max={props.max}
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
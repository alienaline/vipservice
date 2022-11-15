import React from "react";
import FormStyles from "./Form.module.css";
import Input from "../../Inputs/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { createData } from "../../../store/aviaSlice";
import { useAppDispatch } from "../../../hooks/hooks";
import { useNavigate } from "react-router-dom";

interface IProps {
    id: string
}

export interface IForm {
    from: string,
    to: string,
    departureDate: string,
    arrivalDate: string
}

function Form(props: IProps) {
    const { control, handleSubmit, formState: { errors } } = useForm<IForm>({mode: "all"});
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<IForm> = (data) => {
        dispatch(createData(data));
        navigate("/info");
    };

    const minDate = () => {
        const today = new Date();
        const dd = today.getDate();
        const mm = today.getMonth() + 1;
        const yyyy = today.getFullYear();
        const minDate = `${yyyy}-${mm}-${dd}`;

        return minDate;
    };

    const maxDate = () => {
        const today = new Date();
        const dd = today.getDate();
        const mm = today.getMonth() + 1;
        const yyyy = today.getFullYear() + 1;
        const maxDate = `${yyyy}-${mm}-${dd}`;

        return maxDate;
    };

    return (
        <form 
            id={props.id}
            className={FormStyles.form}
            onSubmit={handleSubmit(onSubmit)} >
            <Input
                placeholder="Город вылета"
                legend="Откуда *"
                type="text"
                name="from"
                control={control}
                rules={{
                    required: "Введите город вылета",
                    pattern: {
                        value: /[А-Яа-я]+/,
                        message: "Введите город вылета на русском языке"
                    },
                    minLength: {
                        value: 2,
                        message: "Город отправления не должен быть короче 1 буквы"
                    }
                }}
                helperText={errors?.from?.message} />
            <Input
                placeholder="Город прилёта"
                legend="Куда *"
                type="text"
                name="to"
                control={control}
                rules={{
                    required: "Введите город прилёта",
                    pattern: {
                        value: /[А-Яа-я]+/,
                        message: "Введите город прилёта на русском языке"
                    },
                    minLength: {
                        value: 2,
                        message: "Город назначения не должен быть короче 1 буквы"
                    }
                }} 
                helperText={errors?.to?.message} />
            <Input
                legend="Туда *"
                type="date"
                min={minDate()}
                max={maxDate()}
                name="departureDate"
                control={control}
                rules={{
                    required: "Введите дату отпраления"
                }} 
                helperText={errors?.departureDate?.message} />
            <Input
                legend="Обратно" 
                type="date"
                min={minDate()}
                max={maxDate()}
                name="arrivalDate"
                control={control} />
        </form>
    );
}

export default Form;
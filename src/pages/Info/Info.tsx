/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../../components/Info/Inputs/Input";
import InfoStyles from "./Info.module.css";

interface IForm {
    from: string,
    to: string,
    departureDate: string,
    arrivalDate: string
}

function Info() {
    const { control, handleSubmit, formState: { errors } } = useForm<IForm>({mode: "all"});
    const onSubmit: SubmitHandler<IForm> = (data) => console.log(data);

    const todayDate = () => {
        const today = new Date();
        const dd = today.getDate();
        const mm = today.getMonth() + 1;
        const yyyy = today.getFullYear();
        const todayDate = `${yyyy}-${mm}-${dd}`;

        return todayDate;
    };

    
    return (
        <div className={InfoStyles.infoContainer}>
            <div className={InfoStyles.formContainer}>
                <form 
                    id="searchForm"
                    className={InfoStyles.infoForm}
                    onSubmit={handleSubmit(onSubmit)} >
                    <Input
                        placeholder="Город вылета"
                        legend="Откуда *"
                        type="text"
                        name="from"
                        control={control}
                        rules={{
                            required: "Это обязательное поле",
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
                            required: "Это обязательное поле",
                            minLength: {
                                value: 2,
                                message: "Город назначения не должен быть короче 1 буквы"
                            }
                        }} 
                        helperText={errors?.to?.message} />
                    <Input
                        legend="Туда *"
                        type="date"
                        min={todayDate()}
                        name="departureDate"
                        control={control}
                        rules={{
                            required: "Это обязательное поле"
                        }} 
                        helperText={errors?.departureDate?.message} />
                    <Input
                        legend="Обратно" 
                        type="date"
                        min={todayDate()}
                        name="arrivalDate"
                        control={control} />
                </form>
            </div>
            <div className={InfoStyles.submitContainer}>
                <button
                    type="submit"
                    form="searchForm"
                    className={InfoStyles.submitButton} >
                    Найти билеты
                </button>
            </div>
        </div>
    );
}

export default Info;
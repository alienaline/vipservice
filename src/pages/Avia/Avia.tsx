/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Button from "../../components/Buttons/Button";
import AviaStyles from "./Avia.module.css";
import Form from "../../components/Avia/Form/Form";

function Avia() {

    return (
        <div className={AviaStyles.aviaContainer}>
            <div className={AviaStyles.formContainer}>
                <Form 
                    id="searchForm"/>
            </div>
            <div className={AviaStyles.submitContainer}>
                <Button 
                    type="submit"
                    form="searchForm"
                    buttonText="Найти билеты" />
            </div>
        </div>
    );
}

export default Avia;
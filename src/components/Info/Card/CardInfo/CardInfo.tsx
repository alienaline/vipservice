import React, { useState } from "react";
import CardInfoStyles from "./CardInfo.module.css";
import s7logo from "../../../../assets/img/s7logo.png";
import luggage from "../../../../assets/img/luggage.png";
import handLuggage from "../../../../assets/img/handLuggage.png";
import TimeInfo from "./TimeInfo/TimeInfo";
import TimeLine from "./TimeLine/TimeLine";

interface IProps {
    from: string,
    to: string,
    date: string
}

function CardInfo(props: IProps) {
    const timing = [
        "09:20 - 11:05",
        "10:20 - 12:05",
        "11:20 - 13:05"
    ];
    const [selectedTime, setSelectedTime] = useState(timing[0]);    
    const [active, setActive] = useState("");
    const departureTime = selectedTime.split("-")[0];
    const arrivalTime = selectedTime.split("-")[1];

    const clickHandler = (elem: string) => {
        setSelectedTime(elem);
        setActive(elem);
    };

    return (
        <div className={CardInfoStyles.cardInfoContainer}>
            <div className={CardInfoStyles.cardLogo}>
                <img 
                    className={CardInfoStyles.logo} 
                    src={s7logo} />
                <p className={CardInfoStyles.logoName}>
                    S7 Airlines
                </p>
            </div>
            <div className={CardInfoStyles.cardInfo}>
                <div className={CardInfoStyles.info}>
                    <TimeInfo
                        time={departureTime}
                        city={props.from}
                        date={props.date} />
                    
                    <TimeLine 
                        from="SVO"
                        to="ROV"
                        roadTime="В пути 1 ч 55 мин" />

                    <TimeInfo
                        time={arrivalTime}
                        city={props.to}
                        date={props.date} />
                </div>
                <div className={CardInfoStyles.timing}>
                    {timing.map((elem) => 
                        <button
                            type="button"
                            key={timing.indexOf(elem)}
                            className={CardInfoStyles.button}
                            onClick={() => clickHandler(elem)}
                            data-state={`${active == elem ? "active" : ""}`} >
                            {elem}
                        </button>
                    )}
                </div>
            </div>
            <div className={CardInfoStyles.luggageInfo}>
                <img className={CardInfoStyles.luggageLogo} src={handLuggage} />
                <img className={CardInfoStyles.luggageLogo} src={luggage} />
            </div>
        </div>
    );
}

export default CardInfo;
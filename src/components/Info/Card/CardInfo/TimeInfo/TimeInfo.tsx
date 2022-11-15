import React from "react";
import TimeInfoStyles from "./TimeInfo.module.css";

interface IProps {
    time: string,
    city: string,
    date: string
}

function TimeInfo(props: IProps) {
    
    const date = props.date.split("-").reverse().join(".");

    return (
        <div className={TimeInfoStyles.timeInfo}>
            <time 
                className={TimeInfoStyles.time}>
                {props.time}
            </time>
            <p className={TimeInfoStyles.location}>
                {props.city}
                <br/>
                <span className={TimeInfoStyles.date}>{date}</span>
            </p>
        </div>
    );
}

export default TimeInfo;
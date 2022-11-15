import React from "react";
import TimeLineStyles from "./TimeLine.module.css";

interface IProps {
    from: string,
    to: string,
    roadTime: string
}

function TimeLine(props: IProps) {
    return (
        <div className={TimeLineStyles.timeLine}>
            <div className={TimeLineStyles.airportCodes}>
                <span className={TimeLineStyles.airportCode}>{props.from}</span>
                <span className={TimeLineStyles.airportCode}>{props.to}</span>
            </div>
            <div className={TimeLineStyles.lineContainer}>
                <hr className={TimeLineStyles.line} />
            </div>
            <p className={TimeLineStyles.roadTime}>{props.roadTime}</p>
        </div>
    );
}

export default TimeLine;
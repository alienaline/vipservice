import React from "react";
import { useAppSelector } from "../../../hooks/hooks";
import { aviaData } from "../../../store/aviaSlice";
import CardStyles from "./Card.module.css";
import CardInfo from "./CardInfo/CardInfo";

function Card() {

    const data = useAppSelector(aviaData);

    return (
        <div className={CardStyles.cardContainer}>
            <div className={CardStyles.cardInfo}>
                <div className={CardStyles.infoContainer}>
                    <span className={CardStyles.cardSticker}>
                        Невозвратный
                    </span>
                    <CardInfo
                        from={data.from || ""}
                        to={data.to || ""}
                        date={data.departureDate || ""} />
                </div>
                {data.arrivalDate &&  
                    <>
                        <hr className={CardStyles.line} />
                        <div className={CardStyles.infoContainer}>
                            <span className={CardStyles.cardSticker}>
                                Невозвратный
                            </span>
                            <CardInfo
                                from={data.to || ""}
                                to={data.from || ""}
                                date={data.arrivalDate || ""} />
                        </div> 
                    </> 
                }
            </div>
            <div className={CardStyles.cardCost}>
                <p className={CardStyles.cost}>
                    {data.arrivalDate ? "8 300 ₽" : "4 150 ₽"}
                </p>
            </div>

        </div>
    );
}

export default Card;
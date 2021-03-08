import { CalendarSvg } from "../../../common/CalendarSvg"
import { IconPlaneSvg } from "../../../common/IconPlaneSvg"
import { ArrowSvg } from "../../../common/ArrowSvg"
import style from "./BlockInfo.module.css"
import Slaider from "./Slaider"
import { LineSvg } from "../../../common/LineSvg"
import { Heart } from "../../../common/Heart"

let BlockInfo = (props) => {
    return (
        <div className={style.infoBlock}>

            <div className={style.infoBlock__header}>
                <DepartureInfo />
                <Slaider />
            </div>
            <div className={style.basket}>
                    <p>
                        Добавленно в Избранное:
                        <span className={style.span}>10</span>
                        рейсов
                    </p>
                </div>
            <div className={style.tickets}>
                
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
            </div>
        </div>
    )
}

let DepartureInfo = () => {
    return (

        <div className={style.departure}>

            <div className={style.departureInfo}>

                <div className={style.departureInfo__item}>
                    ВЫЛЕТЫ
            </div>
                <div className={style.departureInfo__item}>
                    <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L9.66667 9.66667L1 18.3333" stroke="#A7A7A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className={style.departureInfo__item}>
                    SVO - JFK
        </div>
            </div>

            <div className={style.departureData}>
                <div className={style.departureData__text}>
                    07 июля 2020
        </div>
                <div className={style.departureData__icon}>
                    <CalendarSvg />
                </div>
            </div>

        </div>
    )
}


let Ticket = (props) => {
    return (
        <div className={style.ticket}>
            <div className={style.ticket__icon}>
                <IconPlaneSvg />
            </div>
            <div className={style.ticket__info}>
                <div className={style.ticket__city}>
                    MOSCOW (SVO)
                        <div className={style.arrow}><ArrowSvg /></div>
                        New York City(JFK)
                        </div>

                <div className={style.ticket__data}>
                    28 June, 2020
                        <div className={style.arrow}><LineSvg /></div>
                        14:50
                        </div>
                <div className={style.ticket__data}>
                    Aeroflot
                        </div>
            </div>

            <div className={style.ticket__control}>
                <Heart fill={false} />
                <div className={style.ticketPrice}>
                    <div className={style.ticketPrice__title}>Price:</div>
                    <div className={style.ticketPrice__value}>23 924 Р</div>
                </div>
            </div>

        </div>
    )
}

export default BlockInfo
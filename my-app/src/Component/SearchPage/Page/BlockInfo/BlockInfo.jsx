import moment from 'moment'

import { CalendarSvg } from "../../../common/CalendarSvg"
import { IconPlaneSvg } from "../../../common/IconPlaneSvg"
import { ArrowSvg } from "../../../common/ArrowSvg"
import style from "./BlockInfo.module.css"
import Slaider from "./Slaider"
import { LineSvg } from "../../../common/LineSvg"
import { Heart } from "../../../common/Heart"

let BlockInfo = (props) => {
    debugger;
    let ticketJSX = props.tickets.map(el => <Ticket ticket={el} originName={props.departureData.origin.name} destinationName={props.departureData.destination.name} />)

    return (
        <div className={style.infoBlock}>

            <div className={style.infoBlock__header}>
                <DepartureInfo />
                <Slaider />
            </div>
            <Basket />
            <div className={style.tickets}>
                {ticketJSX}
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

let Basket = (props) => {
    return (
        <div className={style.basket}>
            <p>
                Добавленно в Избранное:
                        <span className={style.span}>10</span>
                        рейсов
                    </p>
        </div>
    )
}

let Ticket = (props) => {
    let dataForm = moment(props.ticket.depart_date).format('DD MMMM, YYYY')
    return (
        <div className={style.ticket}>
            <div className={style.ticket__icon}>
                <IconPlaneSvg />
            </div>
            <div className={style.ticket__info}>

                <div className={style.ticket__city}>
                    {props.originName} ({props.ticket.origin})
                        <div className={style.arrow}><ArrowSvg /></div>
                    {props.destinationName} ({props.ticket.destination})
                </div>

                <div className={style.ticket__data}>
                    {dataForm}
                        <div className={style.arrow}><LineSvg /></div>
                        14:50
                </div>
                <div className={style.ticket__data}>
                    {props.ticket.gate}
                </div>
            </div>

            <div className={style.ticket__control}>
                <Heart fill={false} />
                <div className={style.ticketPrice}>
                    <div className={style.ticketPrice__title}>Price:</div>
                    <div className={style.ticketPrice__value}>{props.ticket.value} ₽</div>
                </div>
            </div>

        </div>
    )
}

export default BlockInfo
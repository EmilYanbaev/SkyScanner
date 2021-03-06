import { deepEqual } from "../../../../utils/deepEqual"
import { CalendarSvg } from "../../../common/CalendarSvg"


import style from "./BlockInfo.module.css"


import Ticket from "./Blocks/Ticket"
import Basket from "./Blocks/Basket"
import Slaider from "./Blocks/Slaider"

import { Preloader } from "../../../common/Preloader"



const BlockInfo = (props) => {
    let ticketJSX = props.tickets.map(
        (el, index) => {

            let isLike = props.ticketsLike.some(t => deepEqual(el, t))
            return <Ticket ticket={el} originName={props.departureData.origin.name} destinationName={props.departureData.destination.name} onLike={props.onLike} isLike={isLike} key={index} />
        })

    return (
        <div className={style.infoBlock}>

            <div className={style.infoBlock__header}>
                <DepartureInfo departureData={props.departureData} />
                <Slaider />
            </div>

            <Basket count={props.basketCount} />

            {props.viewPrelodaer && <Preloader />}

            <div className={style.tickets}>
                {props.viewTickets && ticketJSX}
            </div>

            <div className = {style.infoBlock_btnWrapp}>
            {props.viewTickets && <button className = {style.infoBlock__btn} onClick = {props.getTickets}>Eще билеты</button>}
            </div>
        </div>
    )
}

const DepartureInfo = (props) => {
    return (

        <div className={style.departure}>

            <div className={style.departureInfo}>

                <div className={style.departureInfo__item}>
                    Вылеты
            </div>
                <div className={style.departureInfo__item}>
                    <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L9.66667 9.66667L1 18.3333" stroke="#A7A7A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                {props.departureData && <div className={style.departureInfo__item}>
                    {props.departureData.origin.iata} - {props.departureData.destination.iata}
                </div>}
            </div>

            <div className={style.departureData}>
                {props.departureData && <div className={style.departureData__text}>
                    {props.departureData.month.name} 2021
                </div>}
                <div className={style.departureData__icon}>
                    <CalendarSvg />
                </div>
            </div>

        </div>
    )
}




export default BlockInfo
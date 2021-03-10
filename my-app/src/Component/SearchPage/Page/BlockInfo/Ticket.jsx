import style from "./BlockInfo.module.css"

import moment from 'moment'


import { LineSvg } from "../../../common/LineSvg"

import { IconPlaneSvg } from "../../../common/IconPlaneSvg"
import { ArrowSvg } from "../../../common/ArrowSvg"
import { Like } from "./Like"

let Ticket = (props) => {

    console.log(props.isLike)

    let handleLike = () => {
        props.onLike(props.ticket)
    }

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

                <Like handleLike={handleLike} isLike={props.isLike}
                />

                <div className={style.ticketPrice}>
                    <div className={style.ticketPrice__title}>Price:</div>
                    <div className={style.ticketPrice__value}>{props.ticket.value} ₽</div>
                </div>
            </div>

        </div>
    )
}

export default Ticket
import style from "./BlockBasket.module.css"
import moment from 'moment'
import { connect } from "react-redux"
import { setLike } from "../../../../redux/reducers/ticketsReducer"
import {DeleteSvg} from "../../../common/DeleteSvg"

const BasketContainer = (props) => {
    let handleDeleteTicket = (ticket) => {
        props.deleteTicket(ticket,false)
    }
    return (
        <>
            <Basket
                tickets={props.tickets}
                departureData={props.departureData}
                deleteTicket={handleDeleteTicket} />
        </>
    )
}

const mapStateToProps = (state) => ({
    tickets: state.tickets.ticketsLike,
    departureData: state.tickets.dataDeparture,
})
export default connect(mapStateToProps,{deleteTicket:setLike})(BasketContainer)

const Basket = (props) => {
    let ticketJSX = props.tickets.map(
        (t, index) => <MiniTicket ticket={t} key={index} originName={props.departureData.origin.name} destinationName={props.departureData.destination.name} delete = {props.deleteTicket} />)
    return (
        <div className={style.basket}>
            <p className={style.basket__title}>Избранное:</p>
            <div className={style.container}>
                {ticketJSX}
            </div>
        </div>
    )
}





const MiniTicket = (props) => {
    let dataForm = moment(props.ticket.depart_date).format('DD MMMM, YYYY')
    let onClick = ()=>{
        props.delete(props.ticket)
    }
    return (
        <div className={style.miniTicket}>
            <div className={style.miniTicket__info}>


                <div className={style.miniTicket__item}>
                    {props.ticket.origin} - {props.ticket.destination}
                </div>

                <div className={style.miniTicket__item}>
                    {dataForm}
                </div>
                <div className={style.miniTicket__item}>{props.ticket.gate}</div>

            </div>
            <button className = {style.miniTicket__btn} type = "button" onClick = {onClick}><DeleteSvg /></button>
        </div>
    )
}
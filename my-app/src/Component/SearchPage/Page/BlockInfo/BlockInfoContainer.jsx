import { connect } from "react-redux"
import { setLike } from "../../../../redux/reducers/ticketsReducer"
import BlockInfo from "./BlockInfo"

const BlockInfoContainer = (props) => {

    let handleLike=(ticket)=>{
        props.setLike(ticket,true)
    }

    return (<>
        <BlockInfo 
        departureData={props.departureData}
        tickets={props.tickets}
        viewTickets={props.viewTickets}
        basketCount={props.basketCount}
        ticketsLike={props.ticketsLike}
        onLike = {handleLike}
        />
    </>
    )
}
const mapStateToProps = (state) => ({
    tickets: state.tickets.data,
    departureData: state.tickets.dataDeparture,
    basketCount: state.tickets.basketCount,
    viewTickets: state.tickets.setTicketsSuccess,
    ticketsLike:state.tickets.ticketsLike
})
export default connect(mapStateToProps, {setLike:setLike})(BlockInfoContainer)
import { connect } from "react-redux"
import { beginingSearch } from "../../../../redux/reducers/common/commonAction"
import { setLike } from "../../../../redux/reducers/ticketsReducer"
import BlockInfo from "./BlockInfo"

const BlockInfoContainer = (props) => {

    let handleLike = (ticket, isLike) => {
        props.setLike(ticket, isLike)
    }

    let hadnleGetTickes = () => {
        debugger;
        props.search({ ...props.departureData, page: props.currentPage + 1 },props.token)
    }

    return (<>
        <BlockInfo
            departureData={props.departureData}
            tickets={props.tickets}
            viewTickets={props.viewTickets}
            viewPrelodaer={props.viewPrelodaer}
            basketCount={props.basketCount}
            ticketsLike={props.ticketsLike}

            onLike={handleLike}
            getTickets={hadnleGetTickes}
        />
    </>
    )
}
const mapStateToProps = (state) => ({
    tickets: state.tickets.data,
    departureData: state.tickets.dataDeparture,
    currentPage: state.tickets.currentPage,
    basketCount: state.tickets.basketCount,
    viewTickets: state.tickets.setTicketsSuccess,
    viewPrelodaer: state.preloaders.viewPreloaderSearchTickets,
    ticketsLike: state.tickets.ticketsLike,

    token: state.auth.token,
})
export default connect(mapStateToProps, { setLike: setLike, search: beginingSearch })(BlockInfoContainer)
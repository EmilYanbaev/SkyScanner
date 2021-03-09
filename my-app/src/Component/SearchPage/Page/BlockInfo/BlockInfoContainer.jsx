import { connect } from "react-redux"
import { getDepartureData } from "../../../../selectors/getDataSearchSelector"
import BlockInfo from "./BlockInfo"

const BlockInfoContainer = (props)=>{

    return (<>
        <BlockInfo departureData = {props.departureData} tickets = {props.tickets}/>
        </>
    )
}
const mapStateToProps = (state)=>({
    tickets:state.tickets.data,
    departureData:getDepartureData(state)
})
export default connect(mapStateToProps,{})(BlockInfoContainer)
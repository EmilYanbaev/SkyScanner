import { connect } from "react-redux"
import BlockInfo from "./BlockInfo"

const BlockInfoContainer = (props)=>{

    return (<>
        <BlockInfo />
        </>
    )
}
const mapStateToProps = (state)=>({
    tickets:state.tickets.data,
})
export default connect(mapStateToProps,{})(BlockInfoContainer)
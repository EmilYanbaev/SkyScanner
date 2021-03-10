import { useEffect } from "react"
import { connect } from "react-redux"
import { logOut } from "../../redux/reducers/authReducer"
import SearchPage from "./Page/SearchPage"

let SearchContainer = (props) => {
    let handleLogOut = ()=>{
        props.logOut()
    }
    return (<>
        <SearchPage logOut = {handleLogOut} />
    </>)
}

export default connect(null,{logOut})(SearchContainer)
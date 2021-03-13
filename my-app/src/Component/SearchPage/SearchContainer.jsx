import { connect } from "react-redux"
import { logOut } from "../../redux/reducers/authReducer"
import SearchPage from "./Page/SearchPage"

const SearchContainer = (props) => {
    let handleLogOut = ()=>{
        props.logOut()
    }
    return (<>
        <SearchPage logOut = {handleLogOut} />
    </>)
}

export default connect(null,{logOut})(SearchContainer)
import { useEffect } from "react"
import { connect } from "react-redux"
import { signSuccess } from "../redux/reducers/authReducer"
import ViewContentControl from "./ViewContentControl"

let InitializeApp = (props) => {
    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            props.isAuthorized(sessionStorage.getItem("token"));
        }
    }, [props.isLogin])
    return (
        <>
            <ViewContentControl />
        </>
    )
}

const mapStateToProps = (state)=>({
    isLogin:state.auth.isLogin
})

export default connect(mapStateToProps, { isAuthorized: signSuccess })(InitializeApp)
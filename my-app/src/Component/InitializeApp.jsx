import { useEffect } from "react"
import { connect } from "react-redux"
import { signSuccess } from "../redux/reducers/authReducer"
import ViewContentControl from "./ViewContentControl"

let InitializeApp = (props) => {
    useEffect(() => {
        if(!props.isLogin && props.token){
            debugger;
            sessionStorage.clear()
        }
        if (sessionStorage.getItem("token")) {
            props.isAuthorized(sessionStorage.getItem("token"));
        }
        // return () => { sessionStorage.clear() };
    }, [props.isLogin])

    return (
        <>
            <ViewContentControl />
        </>
    )
}

const mapStateToProps = (state) => ({
    isLogin: state.auth.isLogin,
    token:state.auth.token
})

export default connect(mapStateToProps, { isAuthorized: signSuccess })(InitializeApp)
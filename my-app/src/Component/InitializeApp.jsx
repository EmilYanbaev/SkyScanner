import { useEffect } from "react"
import { connect } from "react-redux"
import { clearToken, signSuccess } from "../redux/reducers/authReducer"
import ViewContentControl from "./ViewContentControl"

const InitializeApp = (props) => {
    useEffect(() => {
        if (!props.isLogin && props.token) {
            debugger;
            sessionStorage.clear()
            props.clearToken();
        }
        if (sessionStorage.getItem("token")) {
            props.isAuthorized(sessionStorage.getItem("token"));
        }
        // return () => { sessionStorage.clear() };
    }, [props.isLogin])

    return <ViewContentControl />
}

const mapStateToProps = (state) => ({
    isLogin: state.auth.isLogin,
    token: state.auth.token,
})

export default connect(mapStateToProps, { isAuthorized: signSuccess, clearToken: clearToken })(InitializeApp)
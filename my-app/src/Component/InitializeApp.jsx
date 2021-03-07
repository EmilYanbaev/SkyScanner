import { useEffect } from "react"
import { connect } from "react-redux"
import { signSuccess } from "../redux/reducers/authReducer"
import ViewContentControl from "./ViewContentControl"

let InitializeApp = (props) => {
    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            props.isAuthorized(sessionStorage.getItem("token"));
        }
    }, [])
    return (
        <>
            <ViewContentControl />
        </>
    )
}


export default connect(null, { isAuthorized: signSuccess })(InitializeApp)
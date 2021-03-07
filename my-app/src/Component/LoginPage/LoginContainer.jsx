import { connect } from "react-redux"
import {signIn } from "../../redux/reducers/authReducer"
import LoginPage from "./Page/LoginPage"

let LoginContainer = (props) => {
    let handleSignIn = (data) => {
        props.signIn(data);
    }

    return (
        <>
            <LoginPage signIn={handleSignIn} />
        </>
    )
}

export default connect(null, { signIn: signIn })(LoginContainer)
import { connect } from "react-redux"
import { signIn } from "../../redux/reducers/authReducer"
import LoginPage from "./Page/LoginPage"

let LoginContainer = (props) => {
    let handleSignIn = (data) => {
        data.encryptedToken = props.encryptedToken;
        props.signIn(data);
    }

    return (
        <>
            <LoginPage signIn={handleSignIn} />
        </>
    )
}

const mapStateToProps = (state) => ({
    encryptedToken: state.auth.encryptedToken
})

export default connect(mapStateToProps, { signIn: signIn })(LoginContainer)
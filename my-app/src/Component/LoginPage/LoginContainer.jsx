import { useState } from "react"
import { connect } from "react-redux"
import { signIn } from "../../redux/reducers/authReducer"
import LoginPage from "./Page/LoginPage"

let LoginContainer = (props) => {
    let [viewModal,setModalView] = useState(true)

    let handleSignIn = (data) => {
        data.encryptedToken = props.encryptedToken;
        props.signIn(data);
    }

    let handleCloseModal = ()=>{
        setModalView(false)
    }

    return (
        <>
            <LoginPage signIn={handleSignIn} viewModal = {viewModal} closeModal = {handleCloseModal} />
        </>
    )
}

const mapStateToProps = (state) => ({
    encryptedToken: state.auth.encryptedToken
})

export default connect(mapStateToProps, { signIn: signIn })(LoginContainer)
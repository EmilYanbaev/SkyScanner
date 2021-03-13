import LoginForm from "./LoginForm"
import style from "./LoginPage.module.css"
import ModalContainer from "./Modal"

const LoginPage = ({ viewModal, closeModal, signIn,viewPreloader }) => {
    return (
        <div className={style.page}>
            <section className={style.page__form}>
                <h2 className={style.page__title}>Simple Flight Check</h2>
                <LoginForm onSubmit={signIn} viewPreloader = {viewPreloader} />
            </section>
            <ModalContainer view = {viewModal} closeModal = {closeModal} />
        </div>
    )
}


export default LoginPage
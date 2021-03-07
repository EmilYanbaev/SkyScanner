import LoginForm from "./LoginForm"
import style from "./LoginPage.module.css"

let LoginPage = ({signIn}) => {
    return (
        <div className={style.page}>
            <section className={style.page__form}>
                <h2 className={style.page__title}>Simple Flight Check</h2>
                <LoginForm onSubmit={signIn} />
            </section>
        </div>
    )
}


export default LoginPage
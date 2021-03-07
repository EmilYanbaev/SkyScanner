import style from "./LoginForm.module.css"
import { Field, reduxForm } from "redux-form";
import Button from "../../common/Button";
import { isValidEmail,isValidValuePass, minLengthCreator, required } from "../../../utils/validators";

let minLength = minLengthCreator(8)
let LoginForm = ({ handleSubmit, error }) => {
    return (
        <form className={style.form_group} onSubmit={handleSubmit} >
            <Field name="login" component={FormItem} title="Логин:" type="text" validate={[required, isValidEmail]} />
            <Field name="pass" component={FormItem} title="Пароль:" type="password" validate={[required,isValidValuePass,minLength]} />

            {error && <div className = {style.warning} >{error}</div>}
            <div className={style.form_group__btnWrap}>
                <Button type="Submit">Войти</Button>
            </div>
        </form>
    )
}

export default LoginForm = reduxForm({ form: "login" })(LoginForm)


let FormItem = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={style.formItem}>
            <label className={style.formItem__title + " " + (hasError ? style.warning : "")}>{props.title}</label>
            <input className={style.formItem__input + " " + (hasError ? style.warning : "")} {...input} {...props} />
            {hasError && <p className={style.formItem__error}>{meta.error}</p>}
        </div>
    )
}

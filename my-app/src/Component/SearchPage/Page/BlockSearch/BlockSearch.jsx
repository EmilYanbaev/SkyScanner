import { Field, reduxForm } from "redux-form";
import style from "./BlockSearch.module.css"
import { isValidEmail, isValidValuePass, minLengthCreator, required } from "../../../../utils/validators";
import Button from "../../../common/Button";
let BlockSearch = (props) => {
    return (
        <div className={style.searchBlock}>
        12312
            {/* <SearchForm /> */}
        </div>
    )
}


// let SearchForm = (props) => {
//     return (
//         <form className={style.form_group}  >
//             <Field name="login" component={FormItem} title="Откуда" type="text" validate={[required]} />
//             <Field name="pass" component={FormItem} title="Куда" type="password" validate={[required]} />
//             <Field name="pass" component={FormItem} title="Месяц вылета" type="password" validate={[required]} />
//             <div className={style.form_group__btnWrap}>
//                 <Button type="Submit">Войти</Button>
//             </div>
//         </form>
//     )
// }

// let FormItem = ({ input, meta, ...props }) => {
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={style.formItem}>
//             <label className={style.formItem__title + " " + (hasError ? style.warning : "")}>{props.title}</label>
//             <input className={style.formItem__input + " " + (hasError ? style.warning : "")} {...input} {...props} />
//             {hasError && <p className={style.formItem__error}>{meta.error}</p>}
//         </div>
//     )
// }

// SearchForm = reduxForm({ form: "search" })(SearchForm)
export default BlockSearch
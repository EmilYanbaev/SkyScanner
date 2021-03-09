import React from "react"
import style from "./SearchForm.module.css"
import Button from "../../../../common/Button"
class SearchFormContainer extends React.Component {
    render() {
        return <SearchForm />
    }
}

let SearchForm = () => {
    return (
        <form className={style.form}>
            <div className = {style.wrapp}>
                <FormItem title="Откуда:" />
                <FormItem title="Куда:" />
            </div>
            <FormCalendar />
            <Button>Найти</Button>
        </form>
    )
}

let FormItem = (props) => {
    let helpJSX = props.help?.map(el => <button className={style.formItemHelp__btn}>{el}</button>)
    return (
        <div className={style.formItem}>
            <label className={style.formItem__title}>{props.title}</label>
            <input className={style.formItem__input} type="text" />
            <div className={style.formItemHelp}>
                {helpJSX}
            </div>
        </div>
    )
}

let FormCalendar = () => {
    return (
        <div className={style.calendar}>
            <p className={style.calendar__title}>Месяц: Март</p>
            <div className={style.calendarWrapp}>
                <div className={style.calendar__item}>Март</div>
                <div className={style.calendar__item}>Апрель</div>
                <div className={style.calendar__item}>Май</div>
                <div className={style.calendar__item}>Июнь</div>
                <div className={style.calendar__item}>Июль</div>
                <div className={style.calendar__item}>Август</div>
                <div className={style.calendar__item}>Сентябрь</div>
                <div className={style.calendar__item}>Октябрь</div>
                <div className={style.calendar__item}>Ноябрь</div>
                <div className={style.calendar__item}>Декабрь</div>
            </div>
        </div>
    )
}

export default SearchFormContainer
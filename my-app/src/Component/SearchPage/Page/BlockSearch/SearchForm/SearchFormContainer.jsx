import React from "react"
import style from "./SearchForm.module.css"
import Button from "../../../../common/Button"
import { connect } from "react-redux"
import { clearInput, updateInputValue } from "../../../../../redux/reducers/searchReducer"
class SearchFormContainer extends React.Component {
    constructor(props) {
        super(props)
        this.handleUpdateInput = this.handleUpdateInput.bind(this)
    }

    handleUpdateInput(value, id) {
        this.props.updateInput(value, id)
        if(!value)
        this.props.clearInput(id)
    }
    render() {
        return <SearchForm
            originInput={this.props.originInput}
            originHelp={this.props.originHelp}
            destinationInput={this.props.destinationInput}
            destinationHelp={this.props.destinationHelp}
            updateInput={this.handleUpdateInput} />
    }
}

let SearchForm = (props) => {
    return (
        <form className={style.form}>
            <div className={style.wrapp}>
                <FormItem title="Откуда:"
                    value={props.originInput}
                    help={props.originHelp}
                    updateInput={props.updateInput}
                    id = "1" />
                <FormItem title="Куда:"
                    value={props.destinationInput}
                    help={props.destinationHelp}
                    updateInput={props.updateInput}
                    id = "2" />
            </div>
            <FormCalendar />
            <Button type="button">Найти</Button>
        </form>
    )
}


let FormItem = (props) => {

    let onChange = (event)=>{
        props.updateInput(event.target.value,props.id)
    }

    let helpJSX = props.help?.map((el, index) => <button className={style.formItemHelp__btn} key={index}>{el.name}({el.code})</button>)
    return (
        <div className={style.formItem}>
            <label className={style.formItem__title}>{props.title}</label>
            <input className={style.formItem__input} type="text" value = {props.value}  onChange = {onChange}/>
            <div className={style.formItemHelp}>
                {helpJSX}
            </div>
        </div>
    )
}

class FormCalendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { month: [{ name: "Март", number: 3 }, { name: "Апрель", number: 4 }, { name: "Май", number: 5 }, { name: "Июнь", number: 6 }, { name: "Июль", number: 7 }, { name: "Август", number: 8 }, { name: "Сентябрь", number: 9 }, { name: "Октябрь", number: 10 }, { name: "Ноябрь", number: 11 }, { name: "Декабрь", number: 12 }] }
    }

    handleClick(event) {
        console.log(event.target.id)
    }

    render() {
        let monthJSX = this.state.month.map((el, index) => <button className={style.calendar__item} onClick={this.handleClick} id={el.number} key={el.index} type="button">{el.name}</button>)
        return (
            <div className={style.calendar}>
                <p className={style.calendar__title}>Месяц: Март</p>
                <div className={style.calendarWrapp}>
                    {monthJSX}
                </div>
            </div>
        )
    }
}




const mapStateToProps = (state) => ({
    originInput: state.search.originInput,
    originHelp: state.search.originHelp,
    destinationInput: state.search.destinationInput,
    destinationHelp: state.search.destinationHelp
})

export default connect(mapStateToProps, { updateInput: updateInputValue,clearInput:clearInput })(SearchFormContainer)
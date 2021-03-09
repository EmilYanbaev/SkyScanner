import React, { useState } from "react"
import style from "./SearchForm.module.css"
import Button from "../../../../common/Button"
import { connect } from "react-redux"
import { clearInput, setHiddenHelp, setMonth, updateInputValue } from "../../../../../redux/reducers/searchReducer"
import { beginingSearch } from "../../../../../redux/reducers/common/commonAction"
import { dataMonth } from "../../../../../utils/dataMonth"
class SearchFormContainer extends React.Component {
    constructor(props) {
        super(props)
        this.handleUpdateInput = this.handleUpdateInput.bind(this);
        this.handleSetHiddenHelp = this.handleSetHiddenHelp.bind(this);
        this.handleSetMonth = this.handleSetMonth.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    handleUpdateInput(value, id) {
        this.props.updateInput(value, id)
    }
    handleSetHiddenHelp(id, isHidden) {
        this.props.setHiddenHelp(id, isHidden)
    }
    handleSetMonth(number) {
        this.props.setMonth(number)
    }

    onSearch() {
        this.props.handleSearch({ origin: this.props.originInput, destination: this.props.destinationInput, month: this.props.month })
    }
    render() {
        return <SearchForm
            originInput={this.props.originInput}
            originHelp={this.props.originHelp}
            hiddenOriginHelp={this.props.hiddenOriginHelp}

            destinationInput={this.props.destinationInput}
            destinationHelp={this.props.destinationHelp}
            hiddenDestinationHelp={this.props.hiddenDestinationHelp}

            month={this.props.month}

            updateInput={this.handleUpdateInput}
            setHiddenHelp={this.handleSetHiddenHelp}
            setMonth={this.handleSetMonth}
            search={this.onSearch}
        />
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
                    hidden={props.hiddenOriginHelp}
                    setHiddenHelp={props.setHiddenHelp}
                    id="1"
                />
                <FormItem title="Куда:"
                    value={props.destinationInput}
                    help={props.destinationHelp}
                    updateInput={props.updateInput}
                    hidden={props.hiddenDestinationHelp}
                    setHiddenHelp={props.setHiddenHelp}
                    id="2"
                />
            </div>
            <FormCalendar setMonth={props.setMonth} month={props.month} />
            <Button type="button" onClick={props.search}>Найти</Button>
        </form>
    )
}


let FormItem = (props) => {

    let onChangeData = (event) => {
        if (event.target.localName == "input") {
            props.setHiddenHelp(props.id, false);
            props.updateInput(event.target.value, props.id)
        }
        else {
            props.updateInput(props.help[event.target.id].name, props.id)
            props.setHiddenHelp(props.id, true);
        }
    }

    let helpJSX = props.help?.map((el, index) => <button className={style.formItemHelp__btn} key={index} id={index} onClick={onChangeData} type="button">{el.name}({el.code})</button>)

    return (
        <div className={style.formItem}>
            <label className={style.formItem__title}>{props.title}</label>
            <input className={style.formItem__input} type="text" value={props.value} onChange={onChangeData} />
            {!props.hidden && <div className={style.formItemHelp}>
                {helpJSX}
            </div>}
        </div>
    )
}

const FormCalendar = (props) => {

    let [months,] = useState(dataMonth(0));

    const handleClick = (event) => {
        props.setMonth(event.target.id)
    }


    let monthsJSX = months.map((el, index) => <button className={style.calendar__item} onClick={handleClick} id={el.number} key={index} type="button">{el.name}</button>)
    return (
        <div className={style.calendar}>
            <p className={style.calendar__title}>Месяц:{months[props.month - 1].name}</p>
            <div className={style.calendarWrapp}>
                {monthsJSX}
            </div>
            {/* НЕМНОЖКО ХАРДКОДА:( */}
            {props.month < 3 && <p className={style.calendar__attention}>Не рекомендуется - API пустые результаты</p>}
        </div>
    )

}




const mapStateToProps = (state) => ({
    originInput: state.search.originInput,
    originHelp: state.search.originHelp,
    hiddenOriginHelp: state.search.hiddenOriginHelp,
    destinationInput: state.search.destinationInput,
    destinationHelp: state.search.destinationHelp,
    hiddenDestinationHelp: state.search.hiddenDestinationHelp,

    month: state.search.month
})

export default connect(mapStateToProps, { updateInput: updateInputValue, setHiddenHelp: setHiddenHelp, setMonth: setMonth, })(SearchFormContainer)
import { connect } from "react-redux"
import { beginingSearch } from "../../../../redux/reducers/common/commonAction"
import style from "./BlockSearch.module.css"
import SearchFormContainer from "./SearchForm/SearchFormContainer"
const BlockSearch = (props) => {

    let handleSearch = (data) => {
        props.search({ ...data, page: 1,month:{number:data.month} }, props.token)
    }

    return (
        <div className={style.searchBlock}>
            <SearchFormContainer handleSearch={handleSearch} />
        </div>
    )
}
const mapStateToProps = (state) => ({
    token: state.auth.token
})
export default connect(mapStateToProps, { search: beginingSearch })(BlockSearch)
import style from "./BlockSearch.module.css"
import SearchFormContainer from "./SearchForm/SearchFormContainer"
let BlockSearch = (props) => {
    return (
        <div className={style.searchBlock}>
        <SearchFormContainer />
        </div>
    )
}
export default BlockSearch
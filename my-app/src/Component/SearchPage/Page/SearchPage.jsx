import { LogOutSvg } from '../../common/LogOutSvg'
import Basket from './BlockBasket/BlockBasket'
import BlockInfoContainer from './BlockInfo/BlockInfoContainer'
import BlockSearch from './BlockSearch/BlockSearch'
import style from './SearchPage.module.css'

const SearchPage = (props) => {
    return (
        <div className={style.page}>
            <div className={style.logOut}>
                <button className={style.logOut__btn} onClick={props.logOut}>
                    <p className={style.logOut__text}>Выйти</p>
                    <div className={style.wrappIcon} >
                        <LogOutSvg />
                    </div>
                </button>
            </div>
            <div className={style.main}>
                <div className = {style.wrapp}>
                    <BlockSearch />
                    <Basket />
                </div>
                <BlockInfoContainer />

            </div>

        </div>


    )
}
export default SearchPage
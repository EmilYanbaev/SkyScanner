import { LogOutSvg } from '../../common/LogOutSvg'
import BlockInfo from './BlockInfo/BlockInfo'
import BlockSearch from './BlockSearch/BlockSearch'
import style from './SearchPage.module.css'

let SearchPage = (props) => {
    return (
        <div className={style.page}>
            <div className={style.logOut}>
                <button className={style.logOut__btn}>
                    <p className={style.logOut__text}>Выйти</p>
                    <div className={style.wrappIcon} >
                        <LogOutSvg />
                    </div>
                </button>
            </div>
            <div className={style.main}>
                <BlockSearch />
                <BlockInfo />
            </div>
        </div>


    )
}
export default SearchPage
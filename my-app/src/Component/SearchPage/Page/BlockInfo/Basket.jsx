import style from "./BlockInfo.module.css"
import { declOfNum } from '../../../../utils/declOfNum'

let Basket = (props) => {
    let declWord = declOfNum(props.count, ["рейс", "рейса", "рейсов"])
    return (
        <div className={style.basket}>
            <p>
                Добавленно в Избранное:
                        <span className={style.span}>{props.count}</span>
                {declWord}
            </p>
        </div>
    )
}
export default Basket;
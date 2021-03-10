import preloaderStyle from "./Preloader.module.css"
import preloader from "../../assets/preloader.gif"

export let Preloader = ({ style }) => {
    return (
        <div className={preloaderStyle.wrapper} style={style} >
            <img className={preloaderStyle.preloader} src={preloader} alt="" />
        </div>
    )
}
import style from "./../BlockInfo.module.css"
import { Heart } from "../../../../common/Heart"
// import { useState } from 'react'

export const Like = (props)=>{
    // const [fill,setfill] = useState(props.isLike)
    // let handleMouseOver = ()=>{
    //     setfill(true)
    // }
    // let handleMouseOut = ()=>{
    //     setfill(false)
    // }
    // if(!props.isLike)
    // return(
    //     <button className={style.ticket__btnLike} type="button" onMouseOver = {handleMouseOver} onMouseOut = {handleMouseOut} onClick = {props.handleLike}><Heart fill={fill} /></button>
    // )
    // else 
    return(
        <button className={style.ticket__btnLike} type="button" onClick = {props.handleLike}><Heart fill={props.isLike} /></button>
    )
}

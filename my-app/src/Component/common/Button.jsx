import style from './Button.module.css'

let Button = (props) =>{
    return (
        <button className={style.btn} onClick={props.onClick} disabled={props.disabled} type={props.type} style={props.style}>
            {props.children}
        </button>
    )
}

export default Button
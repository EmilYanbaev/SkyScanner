import style from "./Modal.module.css"
import ModalPortal from "../../common/ModalPortal"

let ModalContainer = (props) => {
    const modal = props.view ? <ModalBlock closeModal={props.closeModal} /> : null;

    return (<>{modal}</>)
}

export default ModalContainer


let ModalBlock = ({ closeModal }) => {
    return (
        <ModalPortal>
            <div className={style.modal}>
                <div className={style.container}>
                    <h2 className={style.modal__title}>Кратко о проекте</h2>
                    <div className = {style.modal__items}>
                        <div className={style.modal__item}>
                            0. Никакого хардкода
                        </div>

                        <div className={style.modal__item}>1.Были использованы:
                        <strong> redux, redux-saga, redux-form, axios, pure-react-carousel...
                        </strong></div>

                        <div className={style.modal__item}>
                            2. Был создан собственный прокси сервер
                        </div>
                        <div className={style.modal__item}>
                            3. Использовалась Api от авиасейлс
                        </div>
                        <div className={style.modal__item}>
                            4. Авторизация: пароль расшифровывает - по алгоритму Виженера - партнерский токен, который отсылается к авиасейлс для проверки.
                        </div>

                        <div className={style.modal__item}>
                            5. Сайт полность адаптивный. (Но стили стоит порефакторить)
                        </div>

                        <div className={style.modal__item}>
                            6.<strong> Функционал:</strong> поиск билетов по заданным параметрам,автокомплит с помощью апи, хранение билетов до момента перезагрузки страницы. Все помеченные нами билеты билеты, при новом запросе не теряются и всегда будут помечены снова. А так же хранятся в Избранном. + еще пару функции
                        </div>
                        <div className={style.modal__item}>
                            7.<strong> Предостережение:</strong> С Айфона не зайти. Не везде на запросах try catch. Не стоят предохранители. Есть что рефакторить.
                        </div>
                        <div className={style.modal__item}>
                            Надеюсь я смог выполнить успешно тестовое, хоть и с опозданием:)  
                        </div>
                    </div>
                    <button className = {style.modal__btn} onClick = {closeModal}>Закрыть</button>
                </div>
            </div>
        </ModalPortal>)
}
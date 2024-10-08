import ProfileSetingsCss from "../../Components/ProfileSetings/ProfileSetings.module.css"
const Tracking = () => {

    return (

        <div className={ProfileSetingsCss.tracking}>
            <div className={ProfileSetingsCss.trackInput}>
                <input className={ProfileSetingsCss.form__field} type="text" placeholder="Введите номер заказа" />
                <hr />
            </div>
            <div className={ProfileSetingsCss.Tracking}>
                <div className={ProfileSetingsCss.trackData}>
                    <p>1 декабря 2020</p>
                    <p>2 декабря 2020</p>
                    <p>10 декабря 2020</p>
                    <p>12 декабря 2020</p>
                    <p>17 декабря 2020</p>
                    <p>1 декабря 2020</p>
                </div>
                <div className={ProfileSetingsCss.Circls}>
                    <div className={ProfileSetingsCss.trackCircl}></div>
                    <div className={ProfileSetingsCss.trackCircl}></div>
                    <div className={ProfileSetingsCss.trackCircl}></div>
                    <div className={ProfileSetingsCss.trackCircl}></div>
                    <div className={ProfileSetingsCss.trackCircl}></div>
                    <div className={ProfileSetingsCss.trackCircl}></div>
                </div>
                <div className={ProfileSetingsCss.track1}>
                    <p>Заказ поступил в обработку</p>
                    <p>Заказ сформирован и отправлен</p>
                    <p>Поступил в сортировочный центр г. Красноярска</p>
                    <p>Отправлен из г. Красноярска</p>
                    <p>Поступил в сортировочный центр г. Москва</p>
                    <p>Заказ выдан получателю и оплачен</p>
                </div>
            </div>
        </div>
    )
}

export default Tracking


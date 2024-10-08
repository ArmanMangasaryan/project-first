import ProfileSetingsCss from "../../Components/ProfileSetings/ProfileSetings.module.css"

const Basket = () => {

    return (

        <div>
            <div className={ProfileSetingsCss.basketData}>
                <div>
                    <h1>Номер заказа</h1>
                    <p>123456789</p>
                    <p>123456789</p>
                    <p>123456789</p>
                    <p>123456789</p>
                </div>
                <div>
                    <h1>Дата</h1>
                    <p>12 июля 2019</p>
                    <p>13 августа 2020</p>
                    <p>1 декабря 2020</p>
                    <p>30 декабря 2020</p>
                </div>
                <div>
                    <h1>Предметов</h1>
                    <p>1</p>
                    <p>2</p>
                    <p>2</p>
                    <p>1</p>
                </div>
                <div>
                    <h1>Сумма</h1>
                    <p>2580 ₽</p>
                    <p>2340 ₽</p>
                    <p>3780 ₽</p>
                    <p>3990 ₽</p>
                </div>
                <div>
                    <h1>Доставлено</h1>
                    <div className={ProfileSetingsCss.inputCheckbox}>
                        <div>
                            <input type="checkbox" />
                            <input type="checkbox" />
                            <input type="checkbox" />
                            <input type="checkbox" />
                        </div>
                    </div>
                </div>
                <div>
                    <h1>Оплачено</h1>
                    <div className={ProfileSetingsCss.inputCheckbox}>
                        
                        <div>
                            <input type="checkbox" />
                            <input type="checkbox" />
                            <input type="checkbox" />
                            <input type="checkbox" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket
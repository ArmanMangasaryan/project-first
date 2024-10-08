import DeliverymodulCss from "../Delivery/Delivery.module.css"
import imageCDEK from "../../images/cdek.png"
import imagePost from "../../images/PochtaRossii.png"
const Delivery = () => {

    return (

        <div className={DeliverymodulCss.Delivery}>
            <h1 className={DeliverymodulCss.Deliveryh1}>Доставка</h1>
            <div>
                <h1 className={DeliverymodulCss.delInfo}>Мы отправляем заказы по всей России СДЭКом или Почтой России. Рассмотрим оба варианта подробнее</h1>
                <hr />
            </div>
            <div className={DeliverymodulCss.CDEK}>
                <h1 className={DeliverymodulCss.CDEKh1}>1.СДЭК</h1>
                <div className={DeliverymodulCss.deliverCdek}>
                    <div>
                        <h1>КРАТКО:</h1>
                        <p>Быстрая доставка, оплата при получении, возможность примерки перед оплатой за товар.</p>
                    </div>
                    <div>
                        <img src={imageCDEK} alt="" />
                    </div>
                </div>
            </div>
            <div className={DeliverymodulCss.CDEKul}>
                <h1>ПОДРОБНО:</h1>
                <div>
                    <ul>
                        <li>После оформления заказа, в течение 1-3 дней, мы выдаём Вам трек-код, для отслеживания статуса посылки (а ещё у нас есть бот, который будет писать Вам о изменениях статуса трека)</li>
                        <li>Далее, в течение 5-8 рабочих дней с момента заказа, посылка будет доставлена до Вас, а наш бот уведомит о том, что заказ можно забирать.</li>
                        <li>Когда пойдете забирать посылку, возьмите с собой паспорт. Таковы правила СДЭКа, чтобы никто не мог получить заказ вместо Вас.</li>
                        <li>Перед оплатой за товар у Вас будет бесплатная возможность осмотра и примерки.</li>
                        <li>После того, как Вы примерили и Вас всё устроило, Вы оплачиваете заказ, а наш бот на всякий случай свяжется с вопросом всё ли Вам понравилось.</li>
                        <li className={DeliverymodulCss.ligrey}>Стоимость оказанной услуги доставки оплачивается в любом случае. Мы на этом никак не зарабатываем, вся эта сумма идет компании СДЭК</li>
                    </ul>
                    <hr />
                </div>
            </div>
            <div className={DeliverymodulCss.post}>
                <h1 className={DeliverymodulCss.posth1}>2. Почта России</h1>
                <div className={DeliverymodulCss.BrieflyPost}>
                    <div className={DeliverymodulCss.Briefly}>
                        <h1>КРАТКО:</h1>
                        <p>Обычные сроки доставки, иногда дешевле СДЭКа.</p>
                    </div>
                    <div>
                        <img src={imagePost} alt="" />
                    </div>
                </div>
                <div className={DeliverymodulCss.Postul}>
                    <div>
                        <h1>ПОДРОБНО:</h1>
                    </div>
                    <div>
                        <ul>
                            <li>После оформления заказа, в течение 1-5 дней, мы выдаём Вам трек-код, для отслеживания статуса посылки (а ещё у нас есть бот, который будет писать Вам о изменениях статуса трека).</li>
                            <li>Далее, в течение 10-15 рабочих дней с момента заказа, посылка будет доставлена до Вас, а наш бот уведомит о том, что заказ можно забирать.</li>
                            <li>Когда пойдете забирать посылку, возьмите с собой паспорт. Таковы правила Почты России, чтобы никто не мог получить заказ вместо Вас.</li>
                            <li>После того, как Вы получите посылку наш бот на всякий случай свяжется с вопросом всё ли Вам понравилось.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delivery
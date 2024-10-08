import iconFour from "../../images/image (3).png"
import iconFive from "../../images/image (4).png"
import iconSix from "../../images/image (5).png"
import ProductsStyle from "./infoproduct.module.css"

const InfoProduct = () => {

    return (
        <div className={ProductsStyle.infoboxs}>
            <h1 className={ProductsStyle.NameMenu}>Блог</h1>
            <div className={ProductsStyle.sneackerCard}>
                <img className={ProductsStyle.kross1} src={iconFour} />

                <div className={ProductsStyle.texts}>
                    <h2 className={ProductsStyle.sneckerName}>КРОССОВКИ NIKE AIR MAX 270</h2>

                    <div className={ProductsStyle.dataIprosmotri}>

                        <p className={ProductsStyle.aboutSneacker}>Nike Air Max 720 Saturn представлен в совершенно новой цветовой гамме Black / Team Orange.</p>

                        <ul className={ProductsStyle.moreInfo}>
                            <li><p>15 августа 2019</p></li>
                            <li><img src={iconSix} alt="" /></li>
                            <li><p>4 416</p></li>
                        </ul>
                    </div>
                </div>
               
            </div>

            <div className={ProductsStyle.CardTwo}>
                <img src={iconFive} alt="" />
                <div className={ProductsStyle.textsCard}>
                    <h2 className={ProductsStyle.cardName}>Кроссовки Nike Air Max 720 Saturn</h2>
                    <div className={ProductsStyle.dataCardTwo}>
                        <p className={ProductsStyle.twoText}>Nike Air Max 720 Saturn представлен в совершенно новой цветовой гамме Black / Team Orange.</p>
                        <ul className={ProductsStyle.moreInfoTwo}>
                            <li><p className={ProductsStyle.dataDay}>15 августа 2019</p></li>
                            <li><img src={iconSix} alt="" /></li>
                            <li><p>4 416</p></li>
                        </ul>
                    </div>
                </div>
            </div>
           
            <div className={ProductsStyle.registerCard}>
                <div className={ProductsStyle.registermenu}>
                    <div className={ProductsStyle.registertexts}>
                        <h2>Подпишись на рассылку и получи скидку до 10 %</h2>
                    </div>
                </div>
                <div className={ProductsStyle.registerText}>
                    <input type="email" placeholder="Введите Ваш email"/>
                    <hr />
                    <button className={ProductsStyle.podpis}>Подписаться</button>
                    <p>Политика конфиденциальности</p>
                </div>
            </div>
        </div>
    )
}

export default InfoProduct;
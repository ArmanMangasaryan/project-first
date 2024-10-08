
import productPageStyle from "../../Pages/SneakerPage/productPage.module.css"

const AboutAccessorie = () => {
    return (
        <section>
            <div className="container">
                <div className={productPageStyle.productDescription}>

                

                                    <p className={productPageStyle.aboutProduct}>Кроссовки Nike Air Presto – обувь, которая создана с учетом максимальной вентиляции стопы и комфорта при ношении и занятиях спортом. Верхняя часть кроссовок изготовлена из материала, который обеспечивает идеальный микроклимат внутри обуви и комфорт при ношении. Подошва эластичная и в пяточной части имеет вставки «Air Sole» для лучшей амортизации. Глубокий рельеф протектора обеспечивает мягкость хода и удобство при ношении. Для фиксации стопы предусмотрена шнуровка через специальный каркас, который при затягивании образует жесткую и эластичную конструкцию.
                        - Комфортный микроклимат
                        - Легкий вес
                        - Амортизация стопы</p>

                    
                    <div className={productPageStyle.productCategorisAll}>
                        <ul className={productPageStyle.productCategorisKey}>
                            <li><p>Категория</p></li>
                            <li><p>Модель</p></li>
                            <li><p>Сезон</p></li>
                            <li><p>Цвет</p></li>
                        </ul>

                        <ul className={productPageStyle.productCategorisValue}>
                            <li><span>Спортивный стиль</span></li>
                            <li><span>Air Presto</span></li>
                            <li><span>Лето</span></li>
                            <li><span>Разноцветный</span></li>
                        </ul>

                    </div>

                </div>
            </div>
        </section>


    )
}
export default AboutAccessorie
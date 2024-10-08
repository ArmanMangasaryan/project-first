import productPageStyle from "../SneakerPage/productPage.module.css"

import bigPhoto from "../../images/krossovki-nike-air-presto-1 1.png"
import photo2 from "../../images/krossovki-nike-air-presto-2.png"
import photo3 from "../../images/krossovki-nike-air-presto-4.png"
import photo4 from "../../images/krossovki-nike-air-presto-5.png"
import photo5 from "../../images/krossovki-nike-air-presto-6 1.png"

import { Route, Routes } from "react-router-dom"



import ProductLayOut from "../ProductLayOut/ProductLayOut"
import { useDispatch, useSelector } from "react-redux"

import { useEffect } from "react"

import AboutAccessorie from "../../Components/AboutAccessorie/AboutAccessorie"
import { selectAccessories } from "../../store/slices/accessories/accessoriesSlice"
import { fetchAccessories } from "../../store/slices/accessories/API"

const AccessoriePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAccessories())
    } , [])

    const accessoriesData = useSelector(selectAccessories)

    const accessor = accessoriesData.data[12]

    

   


    return (
        <div>
            <section className={productPageStyle.productPageSection}>
                <div className="container">
                    <div className={productPageStyle.productParentDiv}>



                        <h1 className={productPageStyle.productName}>КРОСОВКИ NIKE AIR PRESTO</h1>

                        <div className={productPageStyle.productCard}>

                            <div className={productPageStyle.images}>

                                <span className={productPageStyle.productId}>Артикул 19666 </span>
                                <div className={productPageStyle.images}>

                                    <img className={productPageStyle.bigImg} src={bigPhoto} alt="" />

                                    <img className={productPageStyle.smallPhoto} src={photo2} alt="" />
                                    <img className={productPageStyle.smallPhoto} src={photo3} alt="" />
                                    <img className={productPageStyle.smallPhoto} src={photo4} alt="" />
                                    <img className={productPageStyle.smallPhoto} src={photo5} alt="" />
                                </div>
                            </div>

                            <div className={productPageStyle.productRight}>
                                <h2 className={productPageStyle.productPrice}>3490 ₽</h2>

                                <div className={productPageStyle.selectProductSizeParent}>
                                    <h3 className={productPageStyle.selectProductSize}>ВЫБЕРИТЕ РАЗМЕР</h3>

                                    <ul className={productPageStyle.productSizes}>
                                        <li>

                                            <p><span>40 EUR</span>(25 см)</p>
                                        </li>
                                        <li>

                                            <p><span>41 EUR</span>(26 см)</p>
                                        </li>
                                        <li>

                                            <p><span>42 EUR</span>(26.5 см)</p>
                                        </li>
                                        <li>

                                            <p><span>43 EUR</span>(27.5 см)</p>
                                        </li>
                                        <li>

                                            <p><span>44 EUR</span>(28 см)</p>
                                        </li>
                                        <li>

                                            <p><span>45 EUR</span>(29 см)</p>
                                        </li>
                                        <li>

                                            <p><span>46 EUR</span>(30 см)</p>
                                        </li>
                                    </ul>

                                    <button>КАК ОПРЕДЕЛИТЬ РАЗМЕР?</button>


                                </div>

                                <ul className={productPageStyle.buyProduct}>
                                    <li>
                                        <button className={productPageStyle.addProductInBasket}>В корзину</button>
                                    </li>
                                    <li>
                                        <button className={productPageStyle.buyProductNow}>Купить сейчас</button>
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>

                <Routes>
                    <Route path="/" element={<ProductLayOut />}>
                        <Route index element={<AboutAccessorie />} />
                        <Route path="payment" element={<h1>Оплата и Доставка</h1>} />
                        <Route path="exchange" element={<h1>Обмен и возврат</h1>} />
                        <Route path="guarantees" element={<h1>Гарантии</h1>} />
                        <Route path="moreInfo" element={<h1>О Товаре</h1>} />
                    </Route>
                </Routes>
            </section>



        </div>



    )
}
export default AccessoriePage;
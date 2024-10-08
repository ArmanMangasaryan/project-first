import productPageStyle from "./clouthingPage.module.css";

import { Route, Routes, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectSneakers } from "../../store/slices/sneakersData/SneakersSlice";
import ProductLayOut from "../ProductLayOut/ProductLayOut";
import AboutSneaker from "../../Components/AboutSneaker/AboutSneaker";
import Slider from "../../Components/Slider/Slider";
import { selectClouthing } from "../../store/slices/clouthingData/clouthingDataSlice";
import AboutClouthing from "../../Components/AboutClouthing/AboutClouthing";
import ClouthingLayOut from "../ClouthingLayOut/ClouthingLayOut";

const ClouthingPage = () => {
  const { id } = useParams();

  const clouthingData = useSelector(selectClouthing);

  const sneaker = clouthingData.data[id];

  return (
    <div>
      <section className={productPageStyle.productPageSection}>
        <div className="container">
          <div className={productPageStyle.productParentDiv}>
            <h1 className={productPageStyle.productName}>{sneaker?.description}</h1>

            <div className={productPageStyle.productCard}>
              <div className={productPageStyle.images}>
                <span className={productPageStyle.productId}>Артикул {sneaker?.article} </span>
                <div className={productPageStyle.images}>
                  <img className={productPageStyle.bigImg} src={sneaker?.image} alt="" />

                  <img className={productPageStyle.smallPhoto} src={sneaker?.image} alt="" />
                  <img className={productPageStyle.smallPhoto} src={sneaker?.image} alt="" />
                  <img className={productPageStyle.smallPhoto} src={sneaker?.image} alt="" />
                  <img className={productPageStyle.smallPhoto} src={sneaker?.image} alt="" />
                </div>
              </div>

              <div className={productPageStyle.productRight}>
                <h2 className={sneaker?.sale ? productPageStyle.productPrice2 : productPageStyle.productPrice}>{sneaker?.price} ₽</h2>
                {sneaker?.sale && <h2 className={sneaker?.sale && productPageStyle.productPrice}>{Math.round((sneaker?.price / 100) * 70)} ₽</h2>}

                <div className={productPageStyle.selectProductSizeParent}>
                  <h3 className={productPageStyle.selectProductSize}>ВЫБЕРИТЕ РАЗМЕР</h3>

                  <ul className={productPageStyle.productSizes}>
                    <li>
                      <p>
                        <span>40 EUR</span>(25 см)
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>41 EUR</span>(26 см)
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>42 EUR</span>(26.5 см)
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>43 EUR</span>(27.5 см)
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>44 EUR</span>(28 см)
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>45 EUR</span>(29 см)
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>46 EUR</span>(30 см)
                      </p>
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
          <Route path="/" element={<ClouthingLayOut />}>
            <Route index element={<AboutClouthing sneaker={sneaker} />} />
            <Route path="payment" element={<h1>Оплата и Доставка</h1>} />
            <Route path="exchange" element={<h1>Обмен и возврат</h1>} />
            <Route path="guarantees" element={<h1>Гарантии</h1>} />
            <Route path="moreInfo" element={<h1>О Товаре</h1>} />
          </Route>
        </Routes>

        <Slider />
      </section>
    </div>
  );
};
export default ClouthingPage;

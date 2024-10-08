import { NavLink, Outlet } from "react-router-dom";
import productPageStyle from "../../Pages/SneakerPage/productPage.module.css";

const ClouthingLayOut = () => {
  return (
    <div>
      <section className={productPageStyle.moreInfoProduct}>
        <NavLink to="./">Описание</NavLink>
        <NavLink to="payment">Оплата и доставка</NavLink>
        <NavLink to="exchange">Обмен и возврат</NavLink>
        <NavLink to="guarantees">Гарантии</NavLink>
        <NavLink to="moreInfo">О товаре</NavLink>
      </section>
      <Outlet />
    </div>
  );
};
export default ClouthingLayOut;

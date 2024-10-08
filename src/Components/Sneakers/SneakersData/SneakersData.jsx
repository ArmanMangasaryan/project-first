import { useDispatch, useSelector } from "react-redux";
import sneakersData from "./sneakersData.module.css";
import { selectSneakers } from "../../../store/slices/sneakersData/SneakersSlice";
import { Link } from "react-router-dom";

const SneakersData = () => {
  const { data } = useSelector(selectSneakers);

  const newSneakersData = data.slice(40 , 70)


  return (
    <div className={sneakersData.sneakersMotherDiv}>

      {newSneakersData?.map((el) => {
        return (
          
          <div key={el.id} className={sneakersData.sneakersCards}>
            <Link to={`${el.id - 1}`}>
            <div className={sneakersData.sneakersImageDiv}>
              <img src={el.image} alt="" className={sneakersData.sneakersImage} />
            </div>

            <div className={sneakersData.sneakersInfoDiv}>
              <h3 className={sneakersData.sneakersBrandName}>{el.brand}</h3>
              <h3 className={sneakersData.sneakersArticul}>Артикул {el.article}</h3>
              <div className={sneakersData.sneakersPriceDiv}>
                <h3 className={sneakersData.sneakersPrice}>{el.price} ₽</h3>
                <p className={sneakersData.sneakersFavorites}>
                  <i className="bi bi-heart-fill "></i>
                </p>
              </div>
            </div>
          </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SneakersData;

import { useDispatch, useSelector } from "react-redux";
import { clickHeart } from "../../store/slices/cardsData/cardsSlice";
import { rightLeft } from "../../store/slices/direction/directionSlice";
import slaydStyle from "./slider.module.css";
import { selectSneakers } from "../../store/slices/sneakersData/SneakersSlice";
import { Link } from "react-router-dom";

const Slider = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(selectSneakers);
  const direction = useSelector((state) => state.direction);
  const sliderData = data.slice(40, 60);


  return (
    <div className={slaydStyle.generalSlide}>
      <h1>Лучшие из Лучших</h1>
      <div className={slaydStyle.positionReletivSlider}>
        <p className={slaydStyle.sliderCaretLeft} onClick={() => dispatch(rightLeft({ A: false, B: sliderData.length }))}>
          <i className="bi bi-caret-left-fill"></i>
        </p>
        <p className={slaydStyle.sliderCaretRight} onClick={() => dispatch(rightLeft({ A: true, B: sliderData.length }))}>
          <i className="bi bi-caret-right-fill"></i>
        </p>
        <div className={slaydStyle.slide}>
          <div className={slaydStyle.sliderTransform} style={{ transform: `translateX(${direction * -285}px)` }}>
            {sliderData?.map((shoes, index) => {
              return (
                <div key={index} className={slaydStyle.sliderCardShoes}>
                  <Link to={`/sneakers/${shoes.id - 1}`}>
                  
                  <div className={slaydStyle.sliderCardShoesPosition}>
                    <img src={shoes?.image} alt="" className={slaydStyle.imgCardSlider} />
                    <div className={slaydStyle.sliderInnerDivShoesDescription}>
                      <p className={slaydStyle.sliderCardShoesDescription}>
                        {shoes?.category} <br />
                        {shoes?.brand}
                        {/* {shoes?.description} */}
                      </p>
                      <p className={slaydStyle.sliderCardShoesArticule}>Артикул {shoes?.articule}</p>
                      <div className={slaydStyle.sliderInnerDivShoesPriceAndheart}>
                        <p className={slaydStyle.sliderCardShoesPrice}>{shoes?.price} ₽</p>
                        <p
                          className={slaydStyle.sliderCardShoesHeart}
                          style={{ color: shoes.favorites ? "red" : "grey" }}
                          onClick={() => dispatch(clickHeart(shoes.id))}
                        >
                          <i className="bi bi-suit-heart-fill"></i>
                        </p>
                      </div>
                      <div className={slaydStyle.sliderCardSizeDiv}>
                        {shoes.size.map((size, index) => {
                          return <p key={index}>{size}</p>;
                        })}
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

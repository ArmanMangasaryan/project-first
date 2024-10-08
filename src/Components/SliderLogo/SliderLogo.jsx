import nkar from "../../images/pngwing.com.png";
import slideStyls from "./logo.module.css";

import { rightLeftLogo } from "../../store/slices/directionLogo/directionLogoSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectSneakers } from "../../store/slices/sneakersData/SneakersSlice";

const SliderLogo = () => {
  
  const dispatch = useDispatch();
  
  const {data} = useSelector(selectSneakers);
  const directionLogo = useSelector((state) => state.logo);
 

  return (
    <div className={slideStyls.slideLogoGeneral}>
      <p className={slideStyls.slideLogoCaretRight} onClick={() => dispatch(rightLeftLogo({ A: true, B: data.length }))}>
        <i className="bi bi-caret-right-fill"></i>
      </p>
      <p className={slideStyls.slideLogoCaretLeft} onClick={() => dispatch(rightLeftLogo({ A: false, B: data.length }))}>
        <i className="bi bi-caret-left-fill"></i>
      </p>
      <div className={slideStyls.sliderLogoDiv}>
        <div className={slideStyls.sliderLogoDivTransform} style={{ transform: `translateX(${directionLogo * -182}px)` }}>
          {data?.map((logo, index) => {
            return (
              <div key={index}>
                <img src={nkar} alt="" className={slideStyls.sliderLogoImg} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SliderLogo;

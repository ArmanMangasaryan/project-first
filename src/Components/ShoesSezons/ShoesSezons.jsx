import { useDispatch, useSelector } from "react-redux";
import shoesSezons from "./shoesSezons.module.css"
import { seasontype } from "../../store/slices/shoesTypeHeader/shoesTypeSlice";

const ShoesSezons = () => {

  const shoesTypeSeasons = useSelector((state) => state.shoesType.seasons)
  const dispatch = useDispatch()

  return (
      <div className={shoesSezons.shoesSezons} >
        <h1>Сезон</h1>
            {shoesTypeSeasons.map((season) => {
              return(
                <div className={shoesSezons.choseYourSezon}>
                <div className={shoesSezons.shoesSezonsDiv} style={{backgroundColor: season.value ? 'red' : '',border: season.value ? '3px solid red' : '3px solid #B3C0D2', color: season.value && "white"}} onClick={() => dispatch(seasontype(season.text))}>
                <i class="bi bi-check-lg"></i>
                </div> 
                <h2>{season.text}</h2>
            </div>
              )
            })}

        </div>
  );
}

export default ShoesSezons
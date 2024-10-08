
import { useDispatch, useSelector } from "react-redux"
import shoesBrend from "./shoesBrend.module.css"
import { brandtype } from "../../store/slices/shoesTypeHeader/shoesTypeSlice"
const ShoesBrend = ()=>{
  const shoesTypebrands = useSelector((state) => state.shoesType.brands)
  const dispatch = useDispatch()
return(
    <div className={shoesBrend.shoesCategory}>
        <h1>Бренд</h1>
    
      <div>
          {shoesTypebrands.map((brand) => {
            return(
              <div className={shoesBrend.choseYourSezon}>
              <div className={shoesBrend.shoesSezonsDiv} style={{backgroundColor: brand.value ? 'red' : '',border: brand.value ? '1px solid red' : '3px solid #B3C0D2', color:brand.value && "white"}} onClick={() => dispatch(brandtype(brand.brand))}>
              <i class="bi bi-check-lg"></i>
              </div> 
              <h2>{brand.brand}</h2>
              </div>
            )
          })}
      </div>
</div>

    )
}

export default ShoesBrend
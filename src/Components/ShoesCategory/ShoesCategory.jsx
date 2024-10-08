import { useDispatch, useSelector } from "react-redux"
import shoesCategory from "./shoesCategory.module.css"
import { categorytype } from "../../store/slices/shoesTypeHeader/shoesTypeSlice"

const ShoesCategory = () =>{
const shoesTypeCategorys = useSelector((state) => state.shoesType.categorys)
const dispatch = useDispatch()
return(
    <div className={shoesCategory.shoesCategory}>
            <h1>Категория</h1>
        <div className={shoesCategory.choseYourSezon}>
                {shoesTypeCategorys.map((category) => {
                        return(
                        <div className={shoesCategory.flex}>
                                <div className={shoesCategory.shoesSezonsDiv} style={{backgroundColor: category.value ? 'red' : '',border: category.value ? '1px solid red' : '3px solid #B3C0D2', color: category.value && "white"}} onClick={() => dispatch(categorytype(category.category))}>
                                <i class="bi bi-check-lg"></i>
                                </div> 
                                <h2>{category.category}</h2> 
                        </div>

                                
                        )
                })}
        </div>
    </div>
    )
}
export default ShoesCategory

import { useDispatch, useSelector } from "react-redux"
import shoesSize from "./shoesSize.module.css"
import { sizetype } from "../../store/slices/shoesTypeHeader/shoesTypeSlice"

const ShoesSize = () =>{
    const shoesTypeSize = useSelector((state) => state.shoesType.sizes)
    const dispatch = useDispatch()
    console.log(shoesTypeSize)
    return(
        <div className={shoesSize.shoessizes}>
            <h1 className={shoesSize.sizeH1}>Размер</h1>
        <div className={shoesSize.shoesSizeUles}>
        <ul>
            <li>
                {shoesTypeSize?.map((size) => {
                    return(
                        <ul style={{backgroundColor:size.value && "red", borderRadius:"10px", color:size.value && "white"}} onClick={() => dispatch(sizetype(size.size))}>
                            {size.size}
                        </ul>
                    )
                })}
            </li>
        </ul>
        
        </div>
    </div>
    )
}

export default ShoesSize
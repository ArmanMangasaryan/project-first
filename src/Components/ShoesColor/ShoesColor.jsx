import { useDispatch, useSelector } from "react-redux"
import shoesColor from "./shoesColor.module.css"
import { colortype } from "../../store/slices/shoesTypeHeader/shoesTypeSlice"

const ShoesColor = ()=>{
  const shoesTypeColor = useSelector((state) => state.shoesType.colors)
  const dispatch = useDispatch()
    return(
        <div>
            <h1>Цвет</h1>

            <div className={shoesColor.shoesColor}>
                {
                    shoesTypeColor.map((color) => {
                        return(
                            <div className={shoesColor.position}>
                                <div className={shoesColor.color} style={{backgroundColor: color.color,transform: color.value && "scale(1.5)"}} onClick={() => dispatch(colortype(color.color))}>
                                
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default ShoesColor
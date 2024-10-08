import { useState } from "react"
import sale from "./sale.module.css"

const Sale = () =>{
    const [isRed,setRed] = useState(false)
    const handleClick = ()=>{
        setRed(!isRed)
    }
    return(
        <div className={sale.sale}>
            <div  className={sale.saleshoes}>
                <div className={sale.shoesSezonsDiv} style={{backgroundColor: isRed ? 'red' : '',border: isRed ? '1px solid red' : '3px solid #B3C0D2',}} onClick={handleClick}>
                    </div> 
                <h1 style={{paddingLeft:"15px"}}> Sale</h1>
            </div>
            <div>
                <button className={sale.buttonForTrying}>Применить</button>
                <button className={sale.buttonCencle}>Отменить</button>
            </div>
        </div>
    )
}

export default Sale
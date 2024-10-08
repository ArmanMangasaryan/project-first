import { useSelector } from "react-redux"

import colthingData from "./clothing.module.css"
import { selectClouthing } from "../../../store/slices/clouthingData/clouthingDataSlice"
import { Link } from "react-router-dom"

const ClothingData = () => {
                      
    const product = useSelector(selectClouthing)
    
    
    const clothing = product.data.slice(0, 30);

    return(
        <div>
            <div className={colthingData.clothingMotherDiv}>
            {
                clothing?.map(el=>{
                    return (
                      <div key={el.id} className={colthingData.clothingCards}>
                        <Link to={`${el.id - 1}`}>
                          <div className={colthingData.clothingImageDiv}>
                            <img src={el.image} alt="" className={colthingData.colthingImage} />
                          </div>

                          <div className={colthingData.clothingInfoDiv}>
                            <h3 className={colthingData.clothingBrandName}>{el.brand}</h3>
                            <h3 className={colthingData.clothingArticul}>Артикул {el.article}</h3>
                            <div className={colthingData.clothingPriceDiv}>
                              <h3 className={colthingData.clothingPrice}>{el.price} ₽</h3>
                              <p className={colthingData.clothingFavorites}>
                                <i class="bi bi-heart-fill "></i>
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                })
            }
        </div>
        </div>
    )
}

export default ClothingData
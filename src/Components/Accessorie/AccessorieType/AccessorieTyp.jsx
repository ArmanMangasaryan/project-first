import { useState } from "react";
import accessorie from "./accessorietype.module.css"

const AccessorieType = ()=>{
    const [isRed3, setIsRed3] = useState(false);
    const handleClick3 = () => {
      setIsRed3(!isRed3);
    };
    const [isRed4, setIsRed4] = useState(false);
    const handleClick4 = () => {
      setIsRed4(!isRed4);
    };
    const [isRed5, setIsRed5] = useState(false);
    const handleClick5 = () => {
      setIsRed5(!isRed5);
    };
    const [isRed6, setIsRed6] = useState(false);
    const handleClick6 = () => {
      setIsRed6(!isRed6);
    };
    const [isRed7, setIsRed7] = useState(false);
    const handleClick7 = () => {
      setIsRed7(!isRed7);
    };
    const [isRed8, setIsRed8] = useState(false);
    const handleClick8 = () => {
      setIsRed8(!isRed8);
    };
    const [isRed9, setIsRed9] = useState(false);
    const handleClick9 = () => {
      setIsRed9(!isRed9);
    };
    const [isRed10, setIsRed10] = useState(false);
    const handleClick10 = () => {
      setIsRed10(!isRed10);
    };
    const [isRed11, setIsRed11] = useState(false);
    const handleClick11 = () => {
      setIsRed11(!isRed11);
    };

    return(
        <div className={accessorie.chosingAccesorieDiv}>
            <div>
                <h1>Вид аксессуаров</h1>
                
            <div className={accessorie.choseYourSezon}>
                    <div className={accessorie.clothingdiv} style={{backgroundColor: isRed3 ? 'red' : '',border: isRed3 ? '1px solid red' : '3px solid #B3C0D2',}} onClick={handleClick3}>
                    </div> 
                    <h2>Авто/вело  <br />товары</h2>
                </div>
            <div className={accessorie.choseYourSezon}>
                    <div className={accessorie.clothingdiv} style={{backgroundColor: isRed4 ? 'red' : '',border: isRed4 ? '1px solid red' : '3px solid #B3C0D2',}} onClick={handleClick4}>
                    </div> 
                    <h2>Аудио</h2>
                </div>
                <div className={accessorie.choseYourSezon}>
                    <div className={accessorie.clothingdiv} style={{backgroundColor: isRed5 ? 'red' : '',border: isRed5 ? '1px solid red' : '3px solid #B3C0D2',}} onClick={handleClick5}>
                    </div> 
                    <h2>Браслеты</h2>
                </div>
                <div className={accessorie.choseYourSezon}>
                    <div className={accessorie.clothingdiv} style={{backgroundColor: isRed6 ? 'red' : '',border: isRed6 ? '1px solid red' : '3px solid #B3C0D2',}} onClick={handleClick6}>
                    </div> 
                    <h2>Брелок <br /> спортивные</h2>
                </div>
                <div className={accessorie.choseYourSezon}>
                    <div className={accessorie.clothingdiv} style={{backgroundColor: isRed7 ? 'red' : '',border: isRed7 ? '1px solid red' : '3px solid #B3C0D2',}} onClick={handleClick7}>
                    </div> 
                    <h2>Бутылка для воды</h2>
                </div>
                <div className={accessorie.choseYourSezon}>
                    <div className={accessorie.clothingdiv} style={{backgroundColor: isRed8 ? 'red' : '',border: isRed8 ? '1px solid red' : '3px solid #B3C0D2',}} onClick={handleClick8}>
                    </div> 
                    <h2>Визитницы</h2>
                </div>
            </div>

            {/* gin */}

        <div className={accessorie.clothSum}>
            <h1>Цена</h1>
      
            <input min={590} max={8390} type="range" />
        </div>


                    {/* color */}
                    <h1>Цвет</h1>
        <div className={accessorie.colores}>
            <h1>Цвет</h1>
                <div className={accessorie.shoesColor}>
                    <div className={accessorie.black}></div>
                    <div className={accessorie.white}></div>
                    <div className={accessorie.pink}></div>
                    <div className={accessorie.red}></div>
                    <div className={accessorie.oxra}></div>
                    <div className={accessorie.blue}></div>
                    <div className={accessorie.darkblue}></div>
                    <div className={accessorie.purple}></div>
                    <div className={accessorie.green}></div>
                    <div className={accessorie.darkgreen}></div>
                    <div className={accessorie.yellow}></div>
                    <div className={accessorie.gray}></div>
                </div>
            </div>

            {/* brend */}
            <div>
                <h1>Бренд</h1>
                
            <div className={accessorie.choseYourSezon}>
                    <div className={accessorie.clothingdiv} style={{backgroundColor: isRed9 ? 'red' : '',border: isRed9 ? '1px solid red' : '3px solid #B3C0D2',}} onClick={handleClick9}>
                    </div> 
                    <h2>Adidas</h2>
                </div>
            <div className={accessorie.choseYourSezon}>
                    <div className={accessorie.clothingdiv} style={{backgroundColor: isRed10 ? 'red' : '',border: isRed10 ? '1px solid red' : '3px solid #B3C0D2',}} onClick={handleClick10}>
                    </div> 
                    <h2>Alexander  <br />McQueen</h2>
                </div>
                <div className={accessorie.choseYourSezon}>
                    <div className={accessorie.clothingdiv} style={{backgroundColor: isRed5 ? 'red' : '',border: isRed5 ? '1px solid red' : '3px solid #B3C0D2',}} onClick={handleClick5}>
                    </div> 
                    <h2>Asics</h2>
                </div>
                <div className={accessorie.choseYourSezon}>
                    <div className={accessorie.clothingdiv} style={{backgroundColor: isRed6 ? 'red' : '',border: isRed6 ? '1px solid red' : '3px solid #B3C0D2',}} onClick={handleClick6}>
                    </div> 
                    <h2>Caterpillar <br /> спортивные</h2>
                </div>
                <div className={accessorie.choseYourSezon}>
                    <div className={accessorie.clothingdiv} style={{backgroundColor: isRed7 ? 'red' : '',border: isRed7 ? '1px solid red' : '3px solid #B3C0D2',}} onClick={handleClick7}>
                    </div> 
                    <h2>Columbia</h2>
                </div>
                <div className={accessorie.choseYourSezon}>
                    <div className={accessorie.clothingdiv} style={{backgroundColor: isRed8 ? 'red' : '',border: isRed8 ? '1px solid red' : '3px solid #B3C0D2',}} onClick={handleClick8}>
                    </div> 
                    <h2>Columbia</h2>
                </div>
            </div>

            {/* sale */}
               <div className={accessorie.sale}>
                <div className={accessorie.sale}>
                <div  className={accessorie.saleshoes}>
                    <div className={accessorie.shoesSezonsDiv} style={{backgroundColor: isRed11 ? 'red' : '',border: isRed11 ? '1px solid red' : '3px solid #B3C0D2',}} onClick={handleClick11}>
                        </div> 
                    <h1 style={{paddingLeft:"15px"}}> Sale</h1>
                </div>
                <div>
                    <button className={accessorie.buttonForTrying}>Применить</button>
                    <button className={accessorie.buttonCencle}>Отменить</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AccessorieType
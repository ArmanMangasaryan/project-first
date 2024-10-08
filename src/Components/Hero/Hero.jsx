import { Link } from "react-router-dom";
import heroGeneralPhoto from "../../images/heroFirst.png";
import heroSecondPhoto from "../../images/heroSecond.png";
import heroLastPhoto from "../../images/heroLast.png";
import heroStyle from "./hero.module.css";
import { nextHero, selectHeroes } from "../../store/slices/heroes/heroesSlice";
import { useSelector , useDispatch } from "react-redux"

const Hero = () => {

    const dispatch = useDispatch()

    const heroes = useSelector(selectHeroes)

    return(
        <div className={heroStyle.generalHeader}>

        {
            heroes === "jogger" ? 
            <div className = {heroStyle.hero}>
                <div className = {heroStyle.heroGeneral}>
                    <h1 className={heroStyle.heroH1H2}>Adidas </h1>
                    <h2 className={heroStyle.heroH1H2}>Nite Jogger</h2>
                    <p>Городские кроссовки в ярком стиле 80-х</p>
                    <Link to="/sneakers">Смотреть все</Link>
                </div>
                <div className= {heroStyle.header}>
                    <div className= {heroStyle.emptyBack}></div>
                    <img src={heroGeneralPhoto} alt="" />
                </div>
                <div className= {heroStyle.arrow}>
                    <i className="bi bi-caret-right-fill"></i>
                </div>
            <div className= {heroStyle.heroCards}>
                {/* <div className={heroStyle.card}>
                    <img src={heroGeneralPhoto} alt="" />
                    <div className={heroStyle.divCard}>
                        <p>Adidas Nite Jogger</p>
                    </div>
                    <div className={heroStyle.circleArrow}><i className="bi bi-arrow-right-short"></i></div>
                </div> */}

                <div className= {heroStyle.card}>
                    <img src={heroSecondPhoto} alt="" />
                    <div className= {heroStyle.divCard}>
                        <p>Adidas Yeezy Boost</p>
                    </div>
                    <div className = {heroStyle.circleArrow}><i onClick={() => dispatch(nextHero("boost"))} className="bi bi-arrow-right-short"></i></div>
                </div>

                <div className={heroStyle.card}>
                    <img src={heroLastPhoto} alt="" />
                    <div className = {heroStyle.divCard}>
                        <p>Nike Air Max</p>
                    </div>
                    <div className = {heroStyle.circleArrow}><i onClick={() => dispatch(nextHero("max"))} className="bi bi-arrow-right-short"></i></div>
                </div>
            </div>
            </div> : heroes === "boost" ? 
            
            
            <div className= {heroStyle.hero2}>
                <div className={heroStyle.heroSecond}>
                    <h1 className={heroStyle.heroH1H2}>Adidas</h1>
                    <h2 className={heroStyle.heroH1H2}>Yeezy Boost</h2>
                    <p>Городские кроссовки в ярком стиле 80-х</p>
                    <Link to="/sneakers">Смотреть все</Link>
                </div>
                <div className={heroStyle.header}>
                    <div className={heroStyle.emptyBack}></div>
                    <img src={heroSecondPhoto} alt="" />
                </div>
                <div className={heroStyle.arrow}>
                    <i className="bi bi-caret-right-fill"></i>
                </div>


                <div className= {heroStyle.heroCards}>
                    <div className={heroStyle.card}>
                        <img src={heroGeneralPhoto} alt="" />
                        <div className={heroStyle.divCard}>
                            <p>Adidas Nite Jogger</p>
                        </div>
                        <div className={heroStyle.circleArrow}><i onClick={() => dispatch(nextHero("jogger"))} className="bi bi-arrow-right-short"></i></div>
                    </div>

                    {/* <div className= {heroStyle.card}>
                        <img src={heroSecondPhoto} alt="" />
                        <div className= {heroStyle.divCard}>
                            <p>Adidas Yeezy Boost</p>
                        </div>
                        <div className = {heroStyle.circleArrow}><i className="bi bi-arrow-right-short"></i></div>
                    </div> */}

                    <div className={heroStyle.card}>
                        <img src={heroLastPhoto} alt="" />
                        <div className = {heroStyle.divCard}>
                            <p>Nike Air Max</p>
                        </div>
                        <div className = {heroStyle.circleArrow}><i onClick={() => dispatch(nextHero("max"))} className="bi bi-arrow-right-short"></i></div>
                    </div>
                </div>
            </div> : 
            
            
            <div className={heroStyle.hero3}>
                <div className= {heroStyle.heroLast}>
                    <h1 className={heroStyle.heroH1H2}>Nike</h1>
                    <h2 className={heroStyle.heroH1H2}>Air Max</h2>
                    <p>Городские кроссовки в ярком стиле 80-х</p>
                    <Link to="/sneakers">Смотреть все</Link>
                </div>

                <div className={heroStyle.header}>
                    <div className={heroStyle.emptyBack}></div>
                    <img src={heroLastPhoto} alt="" />
                </div>
                <div className={heroStyle.arrow}>
                    <i className="bi bi-caret-right-fill"></i>
                </div>

                <div className= {heroStyle.heroCards}>
                    <div className={heroStyle.card}>
                        <img src={heroGeneralPhoto} alt="" />
                        <div className={heroStyle.divCard}>
                            <p>Adidas Nite Jogger</p>
                        </div>
                        <div className={heroStyle.circleArrow}><i onClick={() => dispatch(nextHero("jogger"))} className="bi bi-arrow-right-short"></i></div>
                    </div>


                    <div className= {heroStyle.card}>
                        <img src={heroSecondPhoto} alt="" />
                        <div className= {heroStyle.divCard}>
                            <p>Adidas Yeezy Boost</p>
                        </div>
                        <div className = {heroStyle.circleArrow}><i onClick={() => dispatch(nextHero("boost"))} className="bi bi-arrow-right-short"></i></div>
                    </div>

                    {/* <div className={heroStyle.card}>
                        <img src={heroLastPhoto} alt="" />
                        <div className = {heroStyle.divCard}>
                            <p>Nike Air Max</p>
                        </div>
                        <div className = {heroStyle.circleArrow}><i className="bi bi-arrow-right-short"></i></div>
                    </div> */}
                </div>    
            </div>
        }


            
            



            {/* ============= hero slider 2 ========= */}
           
            
           

            {/* ===========hero slider 3======= */}

        
        </div>
    )
}

export default Hero;
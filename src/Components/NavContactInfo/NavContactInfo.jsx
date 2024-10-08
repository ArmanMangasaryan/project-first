import { Link } from "react-router-dom";
import navLogo from "../../images/navlogo.png";
import navContactStyle from "./navcontact.module.css";

const NavContactInfo = () => {
    return(
        <div>
            <div className= {navContactStyle.blackNav}> 
                <div className= {navContactStyle.navBlackSale}>
                    {/* <p>Только три дня скидка <span>-30% </span> на всё!</p> */}
                </div>
            </div>
            <div  className= {navContactStyle.navContactInfo}>

                <div className= {navContactStyle.phoneMail}>
                    <div className= {navContactStyle.telephone}>
                        <Link><i className="bi bi-telephone"></i> &nbsp; &nbsp; &nbsp; &nbsp;  +7 951 999 28 34</Link>
                    </div>
                    <div className= {navContactStyle.email}>
                        <Link><i className="bi bi-envelope"></i>&nbsp; &nbsp; &nbsp; &nbsp;   info@stageboxbrand.ru </Link>
                    </div>
                </div>
                {/* -------------------- */}
                <div className={navContactStyle.navLogo}>
                    <Link to="/"><img src={navLogo} alt="" /></Link>
                    
                </div>
                {/* --------------------- */}
                <div className= {navContactStyle.navUserSelectIcons}>
                    <div className={navContactStyle.bag}><i className="bi bi-bag"></i></div>
                    <div className={navContactStyle.person}><Link to="/profile"><i className="bi bi-person"></i></Link></div>
                    <div className={navContactStyle.heart}><i className="bi bi-heart"></i></div>
                </div>
            </div>
        </div>
    )
}

export default NavContactInfo;
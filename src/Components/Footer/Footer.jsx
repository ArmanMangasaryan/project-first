import navLogo from "../../images/navlogo.png";
import instagram from "../../images/instagram.png";
import whatsapp from "../../images/whatsapp.png";
import vk from "../../images/vk-social-logotype.png";
import tel from "../../images/phone-call.png";
import email from "../../images/email.png";
import search from "../../images/Vector.png";
import Basket from "../../images/shop.png";
import frend from "../../images/person.png";
import { Link } from "react-router-dom";
import footerStyle from "../Footer/footer.module.css"

const Footer = ()=>{
    return (
        <div className={footerStyle.conteinerfooter}>
            <div className={footerStyle.footerlogo}>
                <img src={navLogo} alt="" />
            </div>  
            <div className = {footerStyle.contact}>
                <Link><img src={instagram} alt="" /></Link>
                <Link><img src={whatsapp} alt="" /></Link>
                <Link><img src={vk} alt="" /></Link>  
                <div className={footerStyle.tell}>
                    <Link> <img src={tel} alt="" /><p> &nbsp; +7 951 999 28 34</p></Link>
                    <Link> <img src={email} alt="" /><p> &nbsp; info@stageboxbrand.ru</p></Link>
                </div>
            </div> 
            <div className={footerStyle.footermenu}>
                <Link to="delevery">Доставка</Link>
                <Link to="guarant">Гарантии</Link>
                <Link to="sizeTable">Таблица размеров</Link>
                <Link to="exchange">Обмен и возврат</Link>
                <Link to="questions">Вопросы и ответы</Link>
            </div>
            <div className={footerStyle.searchBlock}>
                <div className={footerStyle.Basket}>
                    <img src={Basket} alt="" className={footerStyle.img1}/>
                    <img src={frend} alt="" className={footerStyle.img2} />
                </div>
                <div className={footerStyle.search} >
                    <label htmlFor=""></label>
                    <input  placeholder="Поиск" className={footerStyle.input} type="text" />
                    <div className={footerStyle.searchicon}>
                        <img src={search} alt=""/>
                    </div>
                </div>
            </div>  
        </div>
    )
}
export default Footer;
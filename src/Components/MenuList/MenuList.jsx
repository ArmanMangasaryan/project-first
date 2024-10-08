import { NavLink } from "react-router-dom";
import menulistStyle from "./menulist.module.css";

const MenuList = ()=>{
    return(
        <div className={menulistStyle.menuListFlex}>
            <div className= {menulistStyle.menuList}>
                <NavLink to = "/sneakers">Кросовки</NavLink>
                <NavLink to = "/clothing">Одежда</NavLink>
                <NavLink to = "/accessories">Аксессуары</NavLink>
                <NavLink to = "/blog">Блог</NavLink>
                <NavLink to = "/reviews">Отзывы</NavLink>
            </div>
            <div className={menulistStyle.menuSearch}>
                <label htmlFor="">
                    <input type="text" placeholder="Поиск"/>
                    <div className= {menulistStyle.search}>
                        <i className="bi bi-search" ></i>
                        </div>
                </label>
            </div>
        </div>
    )
}


export default MenuList;
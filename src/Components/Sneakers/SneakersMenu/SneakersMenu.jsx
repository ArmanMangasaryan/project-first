import sneakersMenu from "./sneakersMenu.module.css"

const SneakersMenu = () => {
    return(
        <div className={sneakersMenu.sneakersMenuMother}>
            <div className={sneakersMenu.sneakersMenu}>
                    <div className={sneakersMenu.sneakersMenuLeft}>
                        <h2 className={sneakersMenu.sort}>Сортировка</h2>
                        <button className={sneakersMenu.options}>
                            по умолчанию 
                            <p className={sneakersMenu.caret}>
                            <i className="bi bi-caret-down-fill " ></i>
                            </p>
                        </button>
                    </div>
                    
                    <div className={sneakersMenu.sneakersMenuRight}>
                        <h2 className={sneakersMenu.quality}>Количество</h2>
                        <ul className={sneakersMenu.sneakersMenuUl}>
                            <li className={sneakersMenu.sneakersMenuLi}>18</li>
                            <li>30</li>
                            <li>60</li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}

export default SneakersMenu
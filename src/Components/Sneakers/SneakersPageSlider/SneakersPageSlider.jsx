import sneakersPages from "./sneakersPageSlider.module.css"

const SneakersPageSlider = () => {
    return(
        <div className={sneakersPages.sneakersPages}>
            <p className={sneakersPages.sneakersLeftCaret}>
                <i className="bi bi-caret-left-fill"></i>
            </p>
                <ul className={sneakersPages.snaekaersPagesUl}>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>...</li>
                    <li>25</li>           
                </ul>
            <p className={sneakersPages.sneakersRightCaret}>
                <i className="bi bi-caret-right-fill"></i>
            </p>
        </div>
    )
}

export default SneakersPageSlider
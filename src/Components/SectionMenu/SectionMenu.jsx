import iconOne from "../../images/image.png"
import iconTwo from "../../images/image (1).png"
import iconThree from "../../images/image (2).png"
import SectionStyle from "./sectionStyle.module.css"

const SectionMenu = () => {

    return (
        <div className={SectionStyle.headerBlog}>
            <div className={SectionStyle.box1}>
                <img src={iconOne} alt="#" />
                <p className={SectionStyle.name1}>Гарантируем качество товара</p>
            </div>
            <div className={SectionStyle.box2}>
                <img src={iconTwo} alt="#" />
                <p className={SectionStyle.name2}>Поможем подобрать размер</p>
            </div>
            <div className={SectionStyle.box3}>
                <img src={iconThree} alt="#" />
                <p className={SectionStyle.name3}>Быстро доставим покупку</p>
            </div>
        </div>
    )
}

export default SectionMenu;
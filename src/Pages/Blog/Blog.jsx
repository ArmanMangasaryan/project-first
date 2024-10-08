import blogCss from "../Blog/blog.module.css"
import nike from "../../images/1000h1100_Saturn-1000x1100-min 2.png"
import img1 from "../../images/loY2uLUvnG-air-max-720-saturn-pristigna-noviot-fenomenalen-model-na-nike 2.png"
import img3 from "../../images/1920x750_Saturn 1.png"
import img4 from "../../images/nike-air-max-720-saturn-CI1959_036-4 1.png"
const Blog = ()=>{
    return(
        <section className={blogCss.blogRoot}>
            <div className={blogCss.name}>
               <h1 className={blogCss.h1}>Кроссовки Nike Air Max 720 Saturn</h1>
               <p className={blogCss.data}>
                    15 августа 2019 <br /> <span>4 416</span>
               </p>
            </div>
            <div className={blogCss.nike}>
                <img src={nike} alt="" />
            </div>
            <div>
                <div className={blogCss.text}>
                    <div className={blogCss.info}>
                         <p>Nike Air Max 720 Saturn представлен в совершенно новой цветовой гамме Black /
                              Team Orange. Что больше всего выделяется, 
                             так это принт, используемый по всему силуэту,
                              который вдохновлен баскетболом и выполнен в стиле аниме. Яркие
                               оранжевые акценты на всем протяжении дополняют расцветку.
                         </p>
                          <p>
                              Модель оснащена интересной системой застежки - оранжевая молния
                               в виде ленты по бокам c надписью «Nike League».
                               И конечно же бренд не забыл встроить знаменитый огромный прозрачный баллон Air Max в подошву, 
                               который видно со всех сторон.
                          </p>
                    </div>
                     <div className={blogCss.animacia}>
                      
                       <img src={img1} alt="" />
                     </div>
                </div>

            <div className={blogCss.imgrot}>
                <div className={blogCss.img3}>
                       <img src={img3} alt="" />
                </div>
                <div className={blogCss.img4}>
                       <img  src={img4} alt="" />
                </div>
                <button>Посмотреть Nike Air Max 720 Saturn</button>
            </div>
            </div>
        </section>
    )
}

export default Blog;
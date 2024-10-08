
import imageVK from "../../images/vk-social-logotype.png"
import imageWhatsapp from "../../images/whatsapp.png"
import imageTelegram from "../../images/telegram.png"
import imageViber from "../../images/viber.png"
import imageInstagram from "../../images/instagram.png"

import profileSetingsCss from "../ProfileSetings/ProfileSetings.module.css"


const ProfileSetings = () => {

    
    return (
        <div className={profileSetingsCss.container}>
          


            <div className={profileSetingsCss.profile}>

                <div className={profileSetingsCss.address}>
                    <div>
                        <h1>Личные данные</h1>
                        <input type="text" placeholder="Фамилия" className={profileSetingsCss.form__field} />
                        <hr />
                        <input type="text" placeholder="Имя" className={profileSetingsCss.form__field} />
                        <hr />
                        <input type="text" placeholder="Отчество" className={profileSetingsCss.form__field} />
                        <hr />
                    </div>
                    <div className={profileSetingsCss.personaldata}>
                        <h1>Изменить пароль</h1>
                        <input type="password" placeholder="Старый пароль" className={profileSetingsCss.form__field} />
                        <hr />
                        <input type="password" placeholder="Новый пароль" className={profileSetingsCss.form__field} />
                        <hr />
                        <input type="password" placeholder="Повторите пароль" className={profileSetingsCss.form__field} />
                        <hr />
                    </div>
                    
                </div>
                <div className={profileSetingsCss.Deliveryaddress}>
                    <div className={profileSetingsCss.h1Addres}>
                        <h1>Адрес доставки и контакты</h1>
                    </div>
                    <div className={profileSetingsCss.address}>
                        <div >
                            <input type="text" placeholder="Регион" className={profileSetingsCss.form__field} />
                            <hr />
                            <input type="text" placeholder="Населенный пункт" className={profileSetingsCss.form__field} />
                            <hr />
                            <input type="text" placeholder="Улица" className={profileSetingsCss.form__field} />
                            <hr />
                        </div>
                        <div className={profileSetingsCss.inputFather}>
                            <input type="email" placeholder="почта" className={profileSetingsCss.form__field} />
                            <hr />
                            <input type="tel" placeholder="tell..." className={profileSetingsCss.form__field} />
                            <hr />
                            <p className={profileSetingsCss.form__field}> Выберите удобный способ связи</p>
                        </div>
                    </div>


               
                </div>
            </div>
            <div className={profileSetingsCss.section}>
                <div className={profileSetingsCss.inputNumber}>
                    <div>
                        <input type="number" className={profileSetingsCss.form__field} />
                        <hr />
                    </div>
                    <div>
                        <input type="number" className={profileSetingsCss.form__field} />
                        <hr />
                    </div>
                    <div>
                        <input type="number" className={profileSetingsCss.form__field} />
                        <hr />
                    </div>
                </div>
                <div className={profileSetingsCss.social}>
                    <button className={profileSetingsCss.vk}><img src={imageVK} alt="#" /></button>
                    <button className={profileSetingsCss.whatsapp}><img src={imageWhatsapp} alt="#" /></button>
                    <button className={profileSetingsCss.telegram}><img src={imageTelegram} alt="#" /></button>
                    <button className={profileSetingsCss.viber}><img src={imageViber} alt="#" /></button>
                    <button className={profileSetingsCss.instagram}><img src={imageInstagram} alt="#" /></button>
                </div>
            </div>
            <div className={profileSetingsCss.inputTwo}>
                <div className="form__group field">
                    <input type="password" className={profileSetingsCss.form__field} placeholder="пароль" />
                    <hr />
                </div>
                <div>
                    <input type="text" placeholder="соц сеть" className={profileSetingsCss.form__field} />
                    <hr />
                </div>
            </div>
            <div className={profileSetingsCss.savechanges}>
                <button>Сохранить изменения</button>
            </div>
            
        </div>
    )
}

export default ProfileSetings
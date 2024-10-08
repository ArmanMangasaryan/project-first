import { NavLink, Outlet } from "react-router-dom"
import imageMydetalis from "../../images/mydetails.png"
import imageBbasket from "../../images/bbasket.png"
import imageTracking from "../../images/tracking.png"
import profileSetingsCss from "../../Components/ProfileSetings/ProfileSetings.module.css"

const RegLayOut = () => {

    return (

        <div className={profileSetingsCss.profileGlobal}>
            <div className={profileSetingsCss.buttonHover}>
                <NavLink to="./" className={profileSetingsCss.mydetails}><img src={imageMydetalis} alt="#" /></NavLink>
                <NavLink to="basket" className={profileSetingsCss.basket}><img src={imageBbasket} alt="#" /></NavLink>
                <NavLink to="tracking" className={profileSetingsCss.tracking}><img src={imageTracking} alt="#" /></NavLink>
            </div>
            <Outlet/>
        </div>
    )
}

export default RegLayOut
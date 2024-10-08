import { Route, Routes } from "react-router-dom"
import RegLayOut from "../RegLayOut/RegLayOut"
import ProfileSetings from "../ProfileSetings/ProfileSetings"
import Basket from "../Basket/Basket"
import Tracking from "../Tracking/Tracking"

const ProfileGlobal = () => {

    return(

        <div >
            <Routes>
                <Route path="/" element={<RegLayOut/>}>
                    <Route index element={<ProfileSetings/>}/>
                    <Route path="basket" element={<Basket/>} />
                    <Route path="tracking" element={<Tracking/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default ProfileGlobal
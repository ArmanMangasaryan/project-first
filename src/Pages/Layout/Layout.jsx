import { Outlet } from "react-router-dom";
import GeneralMenu from "../../Components/GeneralMenu/GeneralMenu";
import Footer from "../../Components/Footer/Footer";

const Layout = ()=>{
    return(
        <nav className="container">
            <GeneralMenu/>
            <Outlet/>
            

            <Footer/>
            
        </nav>
    )
}

export default Layout;
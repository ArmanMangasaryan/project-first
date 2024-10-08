import Hero from "../Hero/Hero";
import InfoProduct from "../InfoProduct/InfoProduct";
import SectionMenu from "../SectionMenu/SectionMenu";
import Slider from "../Slider/Slider";
import SliderLogo from "../SliderLogo/SliderLogo";

const Header = ()=>{
    return(
        <header>
            <Hero/>
            
            <Slider/>
            <SectionMenu/>
            <InfoProduct/>
            <SliderLogo/>
        </header>
    )
}

export default Header;
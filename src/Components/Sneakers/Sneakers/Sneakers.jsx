import SneakersData from "../../../Components/Sneakers/SneakersData/SneakersData";
import SneakersMenu from "../../../Components/Sneakers/SneakersMenu/SneakersMenu";
import SneakersPageSlider from "../../../Components/Sneakers/SneakersPageSlider/SneakersPageSlider";
import ShoesTypeHeader from "../../../Pages/ShoesTypeHeader/ShoesTypeHeader";
import sneakersStyle from "./sneakers.module.css";

const Sneakers = () => {
  return (
    <div className={sneakersStyle.mainSnakersPage}>
      <ShoesTypeHeader />
      <div>
        <SneakersMenu />
        <SneakersData />
        <SneakersPageSlider />
      </div>
    </div>
  );
};

export default Sneakers;

import ShoesTypeHeader from "../../../Pages/ShoesTypeHeader/ShoesTypeHeader";
import SneakersMenu from "../../Sneakers/SneakersMenu/SneakersMenu";
import SneakersPageSlider from "../../Sneakers/SneakersPageSlider/SneakersPageSlider";
import ClothingData from "../ClothingData/ClothingData";
// import clothing from "./clothing.module.css"

const Clothing = () => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <ShoesTypeHeader />
      </div>
      <div>

      <SneakersMenu />
      <ClothingData />
      <SneakersPageSlider />
      </div>
    </div>
  );
};

export default Clothing;

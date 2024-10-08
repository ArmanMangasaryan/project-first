import Sale from "../../Components/Sale/Sale";
import ShoesBrend from "../../Components/ShoesBrend/ShoesBrend";
import ShoesCategory from "../../Components/ShoesCategory/ShoesCategory";
import ShoesColor from "../../Components/ShoesColor/ShoesColor";
import ShoesSize from "../../Components/ShoesSize/ShoesSize";
import ShoesSum from "../../Components/ShoesSum/ShoesSum";
import ShoesSezons from "../../Components/ShoesSezons/ShoesSezons"
import shoesTypeHeaders from "./shoesTypeHeader.module.css";

const ShoesTypeHeader = () => {
  return (
    <div className={shoesTypeHeaders.shoesTypeHeader}>
      <ShoesSize />
      <ShoesSezons />
      <ShoesSum />
      <ShoesColor />
      <ShoesCategory />
      <ShoesBrend />
      <Sale />
    </div>
  );
};

export default ShoesTypeHeader;

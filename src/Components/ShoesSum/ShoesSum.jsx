import shoesSum from "./shoesSum.module.css";

const ShoesSum = () => {
  return (
    <div >
      <h1>Цена</h1>
      
      <input min={5900} max={8390} type="range"/>
    </div>
  );
};

export default ShoesSum;

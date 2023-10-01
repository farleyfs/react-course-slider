import { VscTriangleRight, VscTriangleLeft } from "react-icons/vsc";

const Buttons = ({ nextSlide, prevSlide }) => {
  return (
    <>
      <button
        className="prev"
        onClick={() => {
          prevSlide();
        }}
      >
        <VscTriangleLeft />
      </button>
      <button
        className="next"
        onClick={() => {
          nextSlide();
        }}
      >
        <VscTriangleRight />
      </button>
    </>
  );
};
export default Buttons;

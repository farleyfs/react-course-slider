import { useEffect, useState } from "react";
import { list, longList } from "./data";
import { VscTriangleRight, VscTriangleLeft } from "react-icons/vsc";
import Carousel from "./assets/Carousel";
import "./index.css";

const App = () => {
  return <section className="slider-container">{<Carousel />}</section>;
};
export default App;

// import * as d3 from "d3";
// import { useState } from "react";
// import LinePlot from "./LinePlot";
import "./styles.css";
import Tree from "./tidyTree";
import flare from "./flare.json";
import JsonToArray from './JsonToArray.jsx';
// import TreeChart from "./TreeChart";

export default function App() {
  // const [data, setData] = useState(() => d3.ticks(-2, 2, 200).map(Math.sin));

  // function onMouseMove(event) {
  //   const [x, y] = d3.pointer(event);
  //   setData(data.slice(-200).concat(Math.atan2(x, y)));
  // }
  
  const convertedArray = JsonToArray({ jsonFile: flare });
  console.log("convertedArray = " + convertedArray);

  return (
    // <div onMouseMove={onMouseMove}>
    <div>
      <Tree data={convertedArray} />
      {/* <LinePlot data={data} /> */}
    </div>
  );
}
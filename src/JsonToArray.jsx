import { useState, useEffect } from "react";

const JsonToArray = ({ jsonFile }) => {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    const convertToArray = (node) => {
      dataArray.push(node);
      if (node.children) {
        node.children.forEach((child) => convertToArray(child));
      }
    };

    convertToArray(jsonFile);
    setDataArray([...dataArray]);
  }, [jsonFile, dataArray]);

  return dataArray;
};

export default JsonToArray;

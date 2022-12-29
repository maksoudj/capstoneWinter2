import { FixedSizeList as List } from "react-window";
import StandardCard from "./StandardCard";
import classes from "./ListOfStandards.module.css";
import DropArea from "./DropArea";
import axios from "axios";
import { useState, useEffect } from "react";


function StandardInfoApi() {
 
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3000/api/Standard_info");
      console.log(result.data);
      console.log(result);
      setData(result.data);
    };
    fetchData();
  }, []);
  
}

export default function list() {
  const size = 10;

  const SIA = StandardInfoApi();
  

  const Column = ({ index, style }) => (
    <div style={style}>
      <StandardCard />
    </div>
  );

  return (
    <div className="mt-6">
      <List
        className={classes.noScroll}
        height={window.innerHeight * 0.66}
        itemCount={size}
        itemSize={window.innerWidth / 3}
        layout="horizontal"
        width={window.innerWidth}
      >
        {Column}
      </List>
    </div>
  );
}

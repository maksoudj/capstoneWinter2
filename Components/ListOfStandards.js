import { FixedSizeList as List } from "react-window";
import StandardCard from "./StandardCard";
import classes from "./ListOfStandards.module.css";
import DropArea from "./DropArea";
import axios from "axios";
import { useState, useEffect } from "react";
import { useContext, PureComponent } from "react";
import DataContext from "../Context/FormContext";

function GetCardList(data){
  return data.map((standard) => {return <StandardCard key = {standard.standard_id} standard_id = {standard.standard_id} description = {standard.description} context_of_the_standard = {standard.context_of_the_standard} />})
}

export default function list({data}) {
  const cardsList = GetCardList(data)
  console.log(cardsList)
  
  console.log(data)

  const size = data.length
  console.log(data)
  //console.log(SIA)

  const Column = ({ index, style }) => (
    <div style={style}>
      {cardsList[index]}
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

import StandardCard from "./StandardCard";
import classes from "./ListOfStandards.module.css";
import DropArea from "./DropArea";
import axios from "axios";
import { useState, useEffect } from "react";
import { useContext, PureComponent } from "react";
import DataContext from "../Context/FormContext";

export default function list({ data }) {
  const cardsList = data.map((standard) => {
    return (
      <StandardCard
        key={standard.standard_id}
        standard_id={standard.standard_id}  
        description={standard.description}
        context_of_the_standard={standard.context_of_the_standard}
      />
    );
  });
  console.log(cardsList);
  console.log(data);

  return (
    <div className="mt-6 scroll">
      <div className={classes.horizontalList}>{cardsList}</div>
    </div>
  );
}

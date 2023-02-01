import StandardCard from "./StandardCard";
import classes from "./ListOfStandards.module.css";
import DropArea from "./DropArea";
import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";
import DataContext from "../Context/FormContext";
import SimpleBarReact from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

export default function List({ data }) {
  const {scrollVisibility} = useContext(DataContext)
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
  console.log(data);

  return (
    <div className="mt-6">
        <SimpleBarReact style={{zIndex : 5 , overflow : scrollVisibility}}
        
        >
        <div className="flex flex-row h-[66vh] z-0">
        {cardsList}
        </div>
        </SimpleBarReact>
    </div>
  );
}

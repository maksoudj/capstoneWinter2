import classes from "./TopBar.module.css";
import topLogo from "../images/TopLogo.svg";
import Image from "next/image";
import info from "../images/info.svg";
import First_Help from "./First_Help";
import { useState, useContext } from "react";
import DataContext from "../Context/FormContext";
import Second_Help from "./Second_Help";
import Third_Help from "./Third_Help";
import Fourth_Help from "./Fourth_Help";
/**************************************************************************************
Component: TopBar
Function: Renders the top navigation bar with a logo and an information icon. 
When the information icon is clicked, a help page corresponding to the current page is displayed.
*------------------------------------------------------------------------------------------------------
Input:
Parameters - None
Output:
Return – The rendered top navigation bar component
**************************************************************************************/
function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { page,setPage } = useContext(DataContext);
  function helpPage(page){

    if (page == 0){

         return <First_Help setIsOpen={setIsOpen}/>
      }
      else if (page == 1){
        return <Second_Help setIsOpen={setIsOpen}/>
      }
      else if (page == 2){
        return <Third_Help setIsOpen={setIsOpen}/>
      }
      else if(page == 3){
        return <Fourth_Help setIsOpen={setIsOpen}/>
      }
  }
 

  
    return (
      <div className="w-full h-12 flex items-center justify-between bg-codeVa-vDarkBlue ">
        <Image className={classes.TopLogo} src={topLogo} alt="aa" />
        <div className="pr-4 absolute right-0">
          {isOpen && helpPage(page)}
          <button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <Image className={classes.info} src={info} alt="aa" />
          </button>
        </div>
      </div>
    );
  
}

export default TopBar;

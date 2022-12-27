import { FixedSizeList as List } from 'react-window';
 import StandardCard from './StandardCard';
 import classes from './ListOfStandards.module.css'
 import DropArea from "./DropArea";

 


 
export default function list() {
  
  const size = 10



  const Column = ({ index, style }) => (
    <div style={style}><StandardCard /></div>
  );
  return (
    <div className = "mt-6">
  <List className= {classes.noScroll}
    height={window.innerHeight * .66}
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
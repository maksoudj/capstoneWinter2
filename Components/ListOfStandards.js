import { FixedSizeList as List } from 'react-window';
 import StandardCard from './StandardCard';
 import classes from './ListOfStandards.module.css'
 import DropArea from "./DropArea";

const Column = ({ index, style }) => (
  <div style={style}><StandardCard/></div>
);
 
export default function list() {
  return (
    <div className = "mt-6">
  <List className= {classes.noScroll}
    height={window.innerHeight * .66}
    itemCount={1000}
    itemSize={window.innerWidth / 3}
    layout="horizontal"
    width={window.innerWidth}
  >
    {Column}
  </List>
  </div>
);
}
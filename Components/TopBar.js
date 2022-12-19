import classes from './TopBar.module.css'
import topLogo from '../images/TopLogo.svg'
import Image from 'next/image'
function TopBar (){
    return (<div className= {classes.header}>
    <Image  className = {classes.TopLogo} src={topLogo} alt = 'aa'/>
    </div>
    )
}

export default TopBar
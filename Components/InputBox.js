import classes from './InputBox.module.css'
function InputBox (props){
    
    return (
        <div className={classes.control}>
          <label htmlFor={props.type}>{props.name}</label>
          <input type={props.type} required id={props.id} ref={props.ref} />
        </div>
    )
}

export default InputBox;
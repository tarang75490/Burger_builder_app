import React from 'react';
import classes from './Button.module.css'

const Button =(props) =>{
      return(
      <button 
      disabled={props.disabled}
      className={[classes.Button,classes[props.btntype]].join(' ')}
      onClick={props.clicked}>{props.label}</button>
      );
}



export default Button;
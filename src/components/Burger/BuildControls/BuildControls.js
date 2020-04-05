import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css'
const controls =[
    {label:'Meat' , type:'meat'},
    {label:'Cheese' , type:'cheese'},
    {label:'Bacon' , type:'bacon'},
    {label:'Salad' , type:'salad'},
]


const BuildControls = (props) => {
    return (
    <div className={classes.BuildControls}>
        <p>Current Price : <strong>&#8377; {props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => {
          return  <BuildControl 
          key={ctrl.label} 
          Label={ctrl.label}
          added = {()=>props.added(ctrl.type)}
          reduced = {()=>props.reduced(ctrl.type)}
          disabled = {props.disabled[ctrl.type]}
          />
        })}
        <button className={classes.OrderButton}
        onClick={props.ordered}
        disabled={!props.purchaseable}>ORDER NOW</button>
    </div>);
}

export default BuildControls
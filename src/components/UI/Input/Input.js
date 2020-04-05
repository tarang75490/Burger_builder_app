import React from 'react'
import classes from './Input.module.css'



class Input extends React.Component{
render(){

    let inputElement =null;
    let inputClasses = [classes.InputElement]
    let validationError = null
    if(!this.props.isValid&& this.props.touched){
        inputClasses.push(classes.InValid)
        validationError = <p>Please enter a valid value!</p>;
    }
    switch(this.props.elementType){
        case('input'):  
            inputElement=<input onChange={this.props.changed} className={inputClasses.join(' ')} {...this.props.elementConfig} value={this.props.value}/>
            break
        case('textarea'):  
            inputElement=<textarea  onChange={this.props.changed}className={inputClasses.join(' ')} {...this.props.elementConfig} value={this.props.value}/>
            break
        case('select'):  
            inputElement=<select  onChange={this.props.changed} className={inputClasses.join(' ')}  value={this.props.value}>
                {this.props.elementConfig.options.map(option =>{
                        return(
                    <option  key={option.value} value={option.value} >{option.displayValue}</option>
                )})}
            </select>
            break
        default:  
            inputElement=<input className={inputClasses.join(' ')} {...this.props.elementConfig} value={this.props.value}     />
    }
    return <div className={classes.Input}>
        <label className={classes.Label}>{this.props.label}</label>
        {inputElement}
        {validationError}
    </div>
}}







export default Input
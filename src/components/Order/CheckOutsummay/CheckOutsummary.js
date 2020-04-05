import React,{Component} from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import './CheckOutsummary.css'

class CheckOutsummary extends  Component{
    render(){
        return(
        <div class="CheckoutSummary">
            <h1>We hope it tastes well!</h1>
            <div style={{width:"80%" ,}} >
                <Burger ingredients={this.props.ingredients}/>
            </div>
            <Button label="CANCEL" btntype="Danger" clicked={this.props.checkoutcancelhandler}/>
            <Button label="CONTINUE" btntype="Success" clicked={this.props.checkoutcontinuehandler}/>
        </div>);
    }

}


export default CheckOutsummary;
import React from 'react'
import classes from './Order.module.css'    
import axios from '../../axios-orders'
class Order extends React.Component{
    
    render(){
        console.log(this.props.ingredient)
        const ingredients=[]
        for (let ingredientname in this.props.ingredient){
            ingredients.push({
                name:ingredientname,
                amount:this.props.ingredient[ingredientname]
            })
        }
        const ingredient = ingredients.map((item)=>{
        return <p key={item.name} >{item.name} : {item.amount}</p>
        })
        console.log(ingredients)
        return(
            <div className={classes.Order}>
                {ingredient}
                <p>Price : {this.props.price}</p>
            </div>
        );
    }

}

export default Order
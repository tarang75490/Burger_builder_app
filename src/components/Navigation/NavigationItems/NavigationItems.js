import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) =>{
return(
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' exact>Burger Builder</NavigationItem>
        <NavigationItem link="/Checkout">Checkout</NavigationItem>
        <NavigationItem link="/Orders">Orders</NavigationItem>
    </ul>
);
}

export default NavigationItems
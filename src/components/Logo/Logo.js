import React from 'react'
import BurgerLogo from '../Assests/images/burger.png'
import classes from './Logo.module.css'
// returns the path of logo needed for webpack to know

const Logo = () =>{
    return(<div className={classes.Logo}>
         <img   src={BurgerLogo}  alt="MyBurger" />
    </div>
    )
}



export default Logo
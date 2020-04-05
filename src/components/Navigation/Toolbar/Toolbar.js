import React from 'react'
import classes  from'./Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Drawertoggle from '../Sidedrawer/DrawerToggle/Drawertoggle'
const Toolbar = (props) => {
return(
    <header className={classes.Toolbar}>
        <Drawertoggle clicked={props.drawtoggleclicked}/>   
        <div className={classes.Logo}><Logo/></div>
        <nav >
            <NavigationItems/>
        </nav>
    </header>
);
}


export default Toolbar;
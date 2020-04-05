import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './Sidedrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../Hoc/Auxiliary'

const SideDrawer = (props) =>{
    let attachedClasses = [classes.Sidedrawer,classes.Close];
    if (props.open){
        attachedClasses=[classes.Sidedrawer,classes.Open]
    }
    return(
        <Aux>
         <Backdrop className={classes.Backdrop} show={props.open} clicked={props.closed}/>
        <div className ={attachedClasses.join(' ')}>
            <div className={classes.Logo}> <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Aux>
    );
}


export default SideDrawer
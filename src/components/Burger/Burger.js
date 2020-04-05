import React ,{Component} from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger=(props)=> {
    let TransformedIngredients = Object.keys(props.ingredients).map(igKey =>{
                                            return [...Array(props.ingredients[igKey])].map((_,i)=>{
                                                return <BurgerIngredient type={igKey} key={igKey+i}/>;
                                            })
                                        })
                                    .reduce((arr,el)=>{
                                        return arr.concat(el);
                                    },[])
    if(TransformedIngredients.length === 0){
        TransformedIngredients = <p>Please Add The Ingredients</p>
    }
    return( 
    <div className={classes.Burger}>
        <BurgerIngredient type="bread-top" />
        {TransformedIngredients}
        <BurgerIngredient type="bread-bottom" />
    </div>
    );

}


export default Burger;
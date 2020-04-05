import React,{Component} from 'react'
import CheckoutSummary from '../../components/Order/CheckOutsummay/CheckOutsummary'
import {withRouter,Route}  from 'react-router-dom'
import ContactData from '../ContactData/ContactData.js'
class CheckOut extends  Component{
    state={
        ingredients:{
            salad:1,
            cheese:1,
            meat:1,
            bacon:1
        },
        price:0
    }
    componentDidMount() {
        const ingredient={}
        let price=0
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            if (param[0] === 'totalprice'){
                price=param[1]
            }else{
            ingredient[param[0]] = +param[1]
        }
    }
        console.log(ingredient)
        this.setState({
            ingredients:ingredient,
            price:price
        })
    }
    checkoutcancelhandler=()=>{
        this.props.history.goBack();
    }
    checkoutcontinuehandler=()=>{
        this.props.history.replace('/checkout/contact-data')
    }
render(){
    console.log(this.props)
    return(
        <div>
            <CheckoutSummary ingredients={this.state.ingredients} checkoutcancelhandler={this.checkoutcancelhandler} checkoutcontinuehandler={this.checkoutcontinuehandler}/>
            <Route path={this.props.match.url+"/contact-data"}  render={()=><ContactData ingredients={this.state.ingredients} price={this.state.price} />}  />
        </div>
    )
}
}


export default withRouter(CheckOut);
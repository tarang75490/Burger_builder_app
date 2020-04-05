import React ,{Component} from 'react'
import Button from '../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import Spinner from '../../components/UI/Spinner/Spinner'
import axios from '../../axios-orders'
import {withRouter} from 'react-router-dom'
class ContactData extends Component{
    state={
        name:"",
        email:"",
        address:{
            street:"",
            postalCode:""
        },
        loading:false
    }
    componentDidMount(){
        console.log(this.props)
    }
    orderHandler=(e)=>{
        e.preventDefault();
        console.log(this.props.ingredients)
        this.setState({
            loading:true
        })
        
        const order ={
            ingredient:this.props.ingredients,
            totalprice:this.props.price,
            customer:{
                name:'Tarang',
                address:{
                    street:"street 1",
                    zipcode:"800004",
                    country:"India"
                },
                email:"Tarangkhetan111@gmail.comsasa"
            },
            deliveryMethod:"Fastest"
        }
        axios.post('/orders.json',order).then((response)=>{
            console.log(response)
            this.setState({
                loading:false
            })
        }).catch((error)=>{
            console.log(error)
            this.setState({
                loading:false
            })
        })

    }
    render(){
        let loading = this.state.loading
        return (<div>
            { loading ? <Spinner/> :
            <div className={classes.ContactData}>
                <h4 >Enter your contact Data</h4>
                <form>
                <input type="text" name="name" placeholder="Your Name"/>
                <input type="email" name="email" placeholder="Your Email"/>
                <input type="text" name="street" placeholder="Your Street"/>
                <input type="text" name="postal" placeholder="Your Postal"/>
                <Button btntype="Success" label="Order" clicked={this.orderHandler}/>
                </form>
            </div>}
            </div>
        );
    }


}


export default withRouter(ContactData)
import React ,{Component} from 'react'
import Button from '../../components/UI/Button/Button'
// import classes from './ContactData.module.css'
import Spinner from '../../components/UI/Spinner/Spinner'
import axios from '../../axios-orders'
import {withRouter} from 'react-router-dom'
import Input from  '../../components/UI/Input/Input'

class ContactData extends Component{
    state={
        formisInvalid:false,
        orderForm:{
            name:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:"Your Name"
                },
                value:"",
                validation:{
                    required:true
                },
                valid:false,
                touched:false

            },
            street:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:"Street"
                },
                value:"",
                validation:{
                    required:true
                },
                valid:false,
                touched:false

            },
            zipcode:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:"ZIP CODE"
                },
                value:"",
            validation:{
                required:true,
                minLength:5,
                maxLength:10
                },
                valid:false,
                touched:false
            },
            country:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:"Country"
                },
                value:"",
                validation:{
                    required:true
                },
                valid:false,

                touched:false

            },
            email:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:"YourEmail"
                },
                value:"",
                validation:{
                    required:true
                },
                valid:false,
                touched:false

            },
            deliveryMethod:{
                elementType:'select',
                elementConfig:{
                    options:[{value:"Cheapest ",displayValue:'Cheapest'},{value:"fastest",displayValue:'Fastest'},]
                },
                value:"",
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
        }    , 
        loading:false
    }
    checkvalidity=(value,rules)=>{
        let isValid= false;
        if(rules.required){
            isValid = value.trim() !== ''     
        }
        if (rules.minLength){
            isValid = value.length >= rules.minLength && isValid
        }
        if (rules.maxLength){
            isValid = value.length <= rules.maxLength  && isValid

        }

        return isValid  

    }
    componentDidMount(){
        console.log(this.props)
    }
    orderHandler=(e)=>{
        e.preventDefault();
        const formData={}
        console.log(this.state.orderForm)
        for(let formidentifier in this.state.orderForm){
            console.log(this.state.orderForm[formidentifier].value)
            formData[formidentifier] = this.state.orderForm[formidentifier].value
        }

        this.setState({
            loading:true
        })
        
        const order ={
            ingredient:this.props.ingredients,
            totalprice:this.props.price,
            orderData:formData
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
        })}

    changehandler=(event,inputidentifier)=>{
        let updatedorderform = {...this.state.orderForm}
        let orderinputelement ={...updatedorderform[inputidentifier]} 

        orderinputelement.value=event.target.value.trim()
        orderinputelement.valid = this.checkvalidity(orderinputelement.value,orderinputelement.validation )
        orderinputelement.touched = true
        updatedorderform[inputidentifier] = orderinputelement
        console.log(event.target.value)
        let formisvalid = true
        for (let input in updatedorderform){
            // console.log(updatedorderform.input.valid)
            formisvalid = updatedorderform[input].valid && formisvalid
        }
        this.setState({
            orderForm:updatedorderform,
            formisInvalid:formisvalid
        })
        console.log(this.state.formisInvalid)

    }
    render(){
        let loading = this.state.loading
        const formElementArray= []   
        for(let key in this.state.orderForm){
                formElementArray.push({
                    id:key,
                    config:this.state.orderForm[key]
                });
        }
        return (<div>
            { loading ? <Spinner/> :
            <div>
                <h4 >Enter your contact Data</h4>
                <form onSubmit={this.orderHandler}>
                {
                    formElementArray.map((formElement)=>{
                        return(
                            <Input   key={formElement.id} 
                                changed={(event)=>this.changehandler(event,formElement.id)}
                                elementType={formElement.config.elementType}
                                    value={formElement.config.value}
                                    elementConfig={formElement.config.elementConfig}
                                    isValid={formElement.config.valid} 
                                    touched={formElement.config.touched}/>
                        )
                    })
                }
                <Button btntype="Success" disabled ={!this.state.formisInvalid}label="Order" />
                </form>
            </div>}
            </div>
        );
    }


}


export default withRouter(ContactData)
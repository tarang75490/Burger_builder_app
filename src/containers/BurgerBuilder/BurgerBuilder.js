import React ,{Component} from 'react' 

import Aux from '../../Hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import Ordersummary from '../../components/Burger/Ordersummary/Ordersummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import axios from '../../axios-orders'
import withErrorHandler from '../../Hoc/WithErrorHandler/WithErrorHandler'

const INGREDIENT_PRICE ={
    salad:3,
    cheese:4,
    meat:13,
    bacon:8
}

class BurgerBuilder extends Component {
    constructor(props){
        super(props);
        this.state = {
            ingredients:null,
            totalprice:4,
            purchaseable:false,
            purchasing:false,
            loading:false,
            error:false
        }
    }
    purchaseHandler =()=> 
    {
        this.setState({
            purchasing:true

        })
    }
    modalCloseHandler = ()=>{
        this.setState({
            purchasing:false

        })
    }
    componentDidMount(){
        console.log(this.props)
        axios.get('https://burger-builder-react-d0e02.firebaseio.com/ingredients.json').then((response) =>{

            const totalprice = Object.keys(response.data)
                                    .map(igkey => 
                                        {
                                            return response.data[igkey]*INGREDIENT_PRICE[igkey]
                                        }).reduce((sum,el)=>{
                                            return sum+el
                                        },0)

            this.setState({
                ingredients:response.data,
                totalprice:totalprice

            })
    
            this.updatePurchaseState(this.state.ingredients)
        }).catch((error)=>{
                this.setState({error:true})
        })
        }
    purchasecontineHandler = ()=>{
        let querylist=[]
        for(let i in this.state.ingredients){
            querylist.push(encodeURIComponent(i)+"="+encodeURIComponent(this.state.ingredients[i]))
        }
        querylist.push("totalprice="+this.state.totalprice)
        const querystring = "?"+querylist.join("&")
        this.props.history.push({
            pathname:"/checkout",
            search:querystring
        })
        
    }
    updatePurchaseState (ingredient){
        const ingredients = {
            ...ingredient
        }
        const sum = Object.keys(ingredients).map((igkey)=>{
            return ingredients[igkey]
        }).reduce((sum,el)=>{
            return sum + el
        },0)
            this.setState({
                purchaseable: sum>0
            })
        
        }
    
    addIngredientCounter =(type) =>{
        const oldCount = this.state.ingredients[type]
        const newcount=oldCount + 1
        const UpdatedIngrdient = {...this.state.ingredients}
        UpdatedIngrdient[type] = newcount
        const priceaddition= INGREDIENT_PRICE[type]
        const updatedprice = this.state.totalprice+priceaddition

        this.setState({
            ingredients:UpdatedIngrdient,
            totalprice:updatedprice
        })
        this.updatePurchaseState(UpdatedIngrdient)    
    }
          removeIngredientCounter =(type) =>{
        const oldCount = this.state.ingredients[type]
        if(oldCount<=0){
            return;
        }
        const newcount=oldCount - 1
        const UpdatedIngrdient = {...this.state.ingredients}
        UpdatedIngrdient[type] = newcount
        const pricereduction= INGREDIENT_PRICE[type]
        const updatedprice =this.state.totalprice-pricereduction;
            this.setState({
                ingredients:UpdatedIngrdient,
                totalprice:updatedprice
            })
    }

    render(){
        const disabledInfo= {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let burger =this.state.error ? "Ingredients Can't Be loaded":<Spinner/>
        let ordersummary = null
        if (this.state.ingredients){
           burger=(
               <Aux> <Burger ingredients={this.state.ingredients} />
            <BuildControls
            added={this.addIngredientCounter}
            reduced={this.removeIngredientCounter}
            disabled={disabledInfo}
            ordered = {this.purchaseHandler}
            price={this.state.totalprice}
            purchaseable={this.state.purchaseable}/>
            </Aux>)
          
            ordersummary=<Ordersummary totalprice={this.state.totalprice} modalclosed={this.modalCloseHandler} continue={this.purchasecontineHandler} ingredients={this.state.ingredients} PRICE={INGREDIENT_PRICE}/>
        }
        if (this.state.loading){
            ordersummary = <Spinner />
        }
        return(
            <Aux>       
                <Modal show={this.state.purchasing} modalclosed={this.modalCloseHandler} >{ordersummary}</Modal>
                {burger}
            </Aux>
        );
    }
}



export default withErrorHandler(BurgerBuilder,axios)  ;
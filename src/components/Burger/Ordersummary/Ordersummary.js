    import React,{Component} from 'react'
    import Aux from '../../../Hoc/Auxiliary'
    import Button from '../../UI/Button/Button'
    class Ordersummary extends Component {

        shouldComponentUpdate(){
                return true
        }
        componentWillUpdate(){
            console.log('[OrderSummary] component will update')
        }
        
          render(){ 
            const ingerdientSummary = Object.keys(this.props.ingredients)
                            .map(igKey => (
                             <li key={igKey}>
                                 <span style ={{textTransform:"capitalize"}}>{igKey}</span> : {this.props.ingredients[igKey]} &times; {this.props.PRICE[igKey]} = &#8377;{(this.props.ingredients[igKey] *this.props.PRICE[igKey]).toFixed(2)}
                              </li>
                             ) )                             
        return(
            <Aux>
                <h3>Your Order</h3>
                <p>Delicious Burger with the following Ingredient :</p>
                <ul>
                    {ingerdientSummary}
                </ul>
      `           <p><strong>Total Price : &#8377; {this.props.totalprice.toFixed(2)}</strong></p>
                <p>Continue to Checkout??</p>   
                <Button label="CANCEL" btntype="Danger" clicked={this.props.modalclosed}/>
                <Button label="CONTINUE" btntype="Success" clicked={this.props.continue}/>
            </Aux>
        )

    }
}


    export default Ordersummary 
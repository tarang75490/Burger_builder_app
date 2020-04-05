import React from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
class Orders extends React.Component{
    state = {
        order:[],
        loading:true
    }
    componentDidMount(){
        axios.get('/orders.json').then((res)=>{
            const fectOrder=[]
            for(let key in res.data){
                fectOrder.push({
                    ...res.data[key],
                    id:key
                })
            }
            this.setState({loading:false , order:fectOrder})
        }).catch((e)=>{
            this.setState({loading:false})
        })
    }


    render(){
        console.log(this.state.order)
        const orders = this.state.order.map((ord)=>{
            return <Order ingredient={ord.ingredient}
                        price={ord.totalprice}
                        key={ord.id}/>
        })
        return(
            <div>
                {orders}
            </div>
        );
    }
}

export default Orders
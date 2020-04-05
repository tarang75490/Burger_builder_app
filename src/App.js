import React, { useEffect, useState } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import CheckOut from './containers/Checkout/CheckOut';
import {Route,Switch} from 'react-router-dom'
import Orders from "./containers/Orders/Orders"
function App() {
//   const [state,setstate]=useState({
//     show:true
//   })
//   useEffect(()=>{
// setTimeout(()=>{
//   setstate({
//     show:false
//   })
// },5000)
// },[])
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout"  component={CheckOut} />
          <Route path="/orders"  component={Orders} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

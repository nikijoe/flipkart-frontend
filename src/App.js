import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './containers/HomePage';
import ProductListPage from './containers/ProductListPage';
import {useDispatch, useSelector} from 'react-redux'

import { isUserLoggedIn, updateCart } from './actions';

import './App.css';
import ProductDetailsPage from './containers/ProductDetailsPage';
import CartPage from './containers/CartPage';
import CheckoutPage from './containers/CheckoutPage';
import OrderPage from './containers/OrderPage';
import OrderDetailsPage from './containers/OrderDetailsPage';

function App() {

  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(()=> {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn())
    }
  },[auth.authenticate])

  useEffect(()=> {
    console.log('App.js - updateCart')
    dispatch(updateCart())
  }, [auth.authenticate])
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/cart' component={CartPage} />
          <Route path='/checkout' component={CheckoutPage} />
          <Route path='/account/orders' component={OrderPage} />
          <Route path='/order_details/:orderId' component={OrderDetailsPage} />
          <Route path='/:productSlug/:productId/p' component={ProductDetailsPage} />
          <Route path='/:slug' component={ProductListPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Navbar from "./components/navbar"
import Products from "./components/products"
import Cart from "./components/cart"
import {ProductContextProvider} from "./global/productContext"
import {CartContextProvider} from "./global/cartContext"
import {LoginContextProvider} from './global/loginContext'

function App() {

  return (
    <div>
      <LoginContextProvider>
      <ProductContextProvider>
      <CartContextProvider>
      <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </Router>
      </CartContextProvider>
      </ProductContextProvider> 
      </LoginContextProvider>
       
    </div>
  );
}

export default App;
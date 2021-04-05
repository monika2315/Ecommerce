import React, {useContext} from "react"
import {Button} from 'react-bootstrap'
import {cartContext} from "../global/cartContext"
import {Plus, Minus} from 'react-feather'

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {LoginContext} from '../global/loginContext'
toast.configure();

const Cart = (props) => {
   
    const {dispatch, shoppingCart, totalPrice, qty} = useContext(cartContext);
    const {loggedIn} = useContext(LoginContext)

   const checkoutHandler = () => {
       if(loggedIn){
        toast.error("PLease Login before confirming the order", {
            position: toast.POSITION.TOP_RIGHT
          });
  
}else{
    dispatch({type: 'EMPTY'});
    props.history.push(`/`)
    toast.success("You have ordered successfully now you can continue your shopping!", {
      position: toast.POSITION.TOP_RIGHT
    });
}
   }
    return(
       <div className="cartContainer">
       <div className="cartDetails">
           {shoppingCart.length ? shoppingCart.map(product => (
       <div className="cart" key={product.id}>
        <span className="cartProImage"><img src={product.image} alt=""/>
           <span className="imageCount">{product.qty}</span>
        </span>
        <span className="cartProductName">{product.name}</span>
        <span className="cartProductPrice">${product.price}.00</span>
        <span className="inc" onClick={() => dispatch({type: 'INC', id:product.id})}><Plus /></span>
        <span className="productQuantity">{product.qty}</span>
        <span className="dec" onClick={() => dispatch({type: 'DEC', id: product.id})}><Minus /></span>
        <span className="productTotalPrice">${product.qty * product.price}.00</span>
        <button onClick={() => dispatch({type: 'DELETE_PRODUCT', id: product.id})} className="deleteCartPro"><i className="fas fa-trash-alt"></i></button>
           </div>  
        )) : 'Your Cart is currently empty!'}
        
        </div>
        {shoppingCart.length ? <div className="cartSummary">
            <div className="summary">
                <h3>Order Summary</h3>
                <div className="totalItems">
                    <div className="items">Total Items</div>
               <div className="itemsCount">{qty}.00</div>
                </div>
                <div className="totalPriceSection">
                 <div className="justTitle">Total Price</div>
        <div className="itemsPrice">${totalPrice}.00</div>
                </div>
                <Button onClick={checkoutHandler}>Confirm Order</Button>
       </div></div>
        : ''}
      
       
       
</div>
    )
}

export default Cart;
import React, {useContext, useState} from "react"
import {cartContext} from "../global/cartContext"
import {Link} from "react-router-dom"
import {ShoppingCart} from 'react-feather'
import {Button} from 'react-bootstrap'
import Login from './login'
import {LoginContext} from '../global/loginContext'

const Navbar = ({cartToggle}) => {
    const [modal, setModal] = useState(false)
    const handleClose = () => setModal(false)
    const {loggedIn, logout} = useContext(LoginContext)

   const {shoppingCart} = useContext(cartContext);

   const logoutHandler = () => {
       logout()
   }
    return(
        <>
        <nav className='nav-bar'>
 <ul className="left">
 <li><Link to="/">Online Shopping</Link></li>
 </ul>

 <ul className="left">
     {loggedIn ?
    <li ><Button onClick={() => setModal(true)} className='loginButton'>Login</Button></li> :
    <li ><Button onClick={logoutHandler} className='loginButton'>Logout</Button></li>}
    <li onClick={cartToggle}><Link to="/cart"><span className="dollor"><ShoppingCart color='red' size={48} /></span><span className="shoppingCartTotal">{shoppingCart ? shoppingCart.length : 0}</span></Link></li>
 </ul>
 
</nav>
<Login modal={modal} handleClose={handleClose} />
</>

    )

}

export default Navbar;
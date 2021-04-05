import React, {createContext, useReducer} from 'react'
import {CartReducer} from './cartReducer'

export const cartContext = createContext();

const initial_state = {
    shoppingCart: [],
    message: '',
    totalPrice : 0,
    qty: 0
}

export const CartContextProvider = (props) => {
    const [state, dispatch] = useReducer(CartReducer, initial_state)

    return(
        <cartContext.Provider value={{...state, dispatch}}>
            {props.children}
        </cartContext.Provider>
    )
}


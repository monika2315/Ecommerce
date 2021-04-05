import React, {createContext, useReducer} from "react"
import {ProductReducer} from "./productReducer"
import iphone from '../assets/iphone.jpg'
import laptop from '../assets/laptop.jpg'
import camera from '../assets/camera.jpg'
import microphone from '../assets/microphone.jpg'

export const productContext = createContext();

const initial_state =  [
        {id: 1, name: 'iPhone', price: 40, image: iphone, productStatus: 'hot'},
        {id: 2, name: 'Camera', price: 200, image: camera,productStatus: 'new'},
        {id: 3, name: 'Laptop', price: 300, image: laptop,productStatus: 'new'},
        {id: 4, name: 'Microphone', price: 150, image: microphone,productStatus: 'new'},
        {id: 5, name: 'Microphone', price: 160, image: microphone,productStatus: 'hot'},
        {id: 6, name: 'Camera', price: 500, image: camera,productStatus: 'new'},
        {id: 7, name: 'Iphone X', price: 240, image: iphone,productStatus: 'hot'},
        {id: 8, name: 'Laptop', price: 120, image: laptop,productStatus: 'new'},
      ]

export const ProductContextProvider = (props) => {
    const [products] = useReducer(ProductReducer, initial_state)

    return(
        <productContext.Provider value={{products}}>
           {props.children}
        </productContext.Provider>
    )
}
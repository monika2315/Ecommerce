import React, {createContext, useReducer, useState} from 'react';
import {LoginReducer} from './loginReducer'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

export const LoginContext = createContext(); 

const initial_state = {
    username: 'monika',
    password: '123456'
}

export const LoginContextProvider = (props) => {
    const [state, dispatch] = useReducer(LoginReducer, initial_state)
    const [loggedIn, setLoggedIn] = useState(true) 
    const [error, setError] = useState(false)

    const login = (username, password, setUsername, setPassword, closeModal) => {
        if(state.username === username && state.password === password) {
            localStorage.setItem("token", 'jhgfhjgfjhgfjhgjdsgwruhiqwuhqwupqjwkrbjsdbvjklbvkjfvb')
            console.log("password matched")
            setLoggedIn(false)
            setError(false)
            setUsername('')
            setPassword('')
            closeModal()
            toast.success("LoggedIN successfully",{ position: toast.POSITION.TOP_RIGHT})
            return dispatch({type: 'LOGGEDIN', payload: loggedIn})
        }
        else{
            setError(true)
            setUsername('')
            setPassword('')
        }
    }
    const logout = () => {
        localStorage.removeItem("token")
        setLoggedIn(true)
        toast.error("LoggedOut successfully",{ position: toast.POSITION.TOP_RIGHT})
    
    return dispatch({type: 'LOGGEDOUT', payload: loggedIn})
    }

    return(
        <LoginContext.Provider value={{state,
        login, loggedIn, logout, error}}>
            {props.children}
        </LoginContext.Provider>
    )
}
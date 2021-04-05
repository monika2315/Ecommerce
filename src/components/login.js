import React,{Fragment, useContext, useState} from 'react';
import {Modal, Container, Form, Button} from 'react-bootstrap'
import {LoginContext} from '../global/loginContext'

const Login = (props) => {
        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('')
       

    const {login, error} = useContext(LoginContext)

    const submitHandler = (e) => {
        e.preventDefault()
        let closeModal = props.handleClose
        login(username, password, setUsername, setPassword, closeModal)
       
    }

    return (
        <Fragment>
                <Modal show={props.modal} onHide={props.handleClose} centered>
            <Container>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={submitHandler}>
                            {error ? <span style={{color:'red'}}>Username and Password are incorrect</span> : ''}
                            <Form.Group >
                                <Form.Label>Username</Form.Label>
                                <Form.Control type='text' placeholder='Enter Username' value={username}
                                 onChange={(e) => setUsername(e.target.value)}  />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' placeholder='Enter Password' value={password} 
                                onChange={(e) => setPassword(e.target.value)}  />
                            </Form.Group>
                            <Button className='loginButton' type='submit'>Login</Button>

                        </Form>
                    </Modal.Body>
                    </Container>
                </Modal>
        </Fragment>
    );
};

export default Login;
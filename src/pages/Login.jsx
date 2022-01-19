import {Form, Button} from 'react-bootstrap'

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {setName, setEmail} from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [name1,setName1]= useState("")
    const [email1,setEmail1]= useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleClick = (e)=>{
      //  e.preventDefault();
        dispatch(setName(name1))
        dispatch(setEmail(email1));

        navigate("/");
    }
    
  return <div>

<Form onSubmit={e => handleClick(e)}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email"
    value={email1}
    onChange={e=> setEmail1(e.target.value)}
    placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" value={name1}
    onChange={e=> setName1(e.target.value)} placeholder="Name" />
  </Form.Group>
  
  <Button  variant="primary" type="submit">
    Submit
  </Button>
</Form>
  </div>;
};

export default Login;

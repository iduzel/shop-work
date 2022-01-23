import { Form, Button, Row, Col } from "react-bootstrap";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPassword, setEmail, setUsername } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import NavMenuComp from "../components/NavMenuComp/NavMenuComp";
const Login = () => {
  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");
  const [username1, setUsername1]= useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    
    dispatch(setEmail(email1));
    dispatch(setPassword(password1));
    dispatch(setUsername(username1))

    navigate("/");
  };

  return (
    <div className="login">
      
      <div className="container p-5">
        <div className="row align-items-center">
          <div className="grad p-3 col-lg-6 col-md-6">
            <h2 className="p-3">New to our Shop</h2>
            <p>
              There are advances being made in science and technology everyday,
              and a good example of this is the
            </p>
            <a
              href="/login"
              className="btn register btn-primary m-3 text-uppercase"
            >
              Create an Account
            </a>
          </div>
          <div className="col-lg-6 col-md-6">
            <h2><strong>Welcome Back ! <br/>Please Sign in now</strong></h2>
            <Form onSubmit={e => handleClick(e)}>

              <Form.Control
                  className="mb-5"
                  type="text"
                  onChange ={e=> setUsername1(e.target.value)}
                  required
                  minLength={2}
                  placeholder="Username"
                />
                <Form.Control
                  className="mb-5"
                  type="text"
                  onChange ={e=> setEmail1(e.target.value)}
                  required
                  minLength={5}
                  placeholder="Email"
                />
                <Form.Control
                  className="mb-5"
                  required
                  onChange={e=>setPassword1(e.target.value)}
                  minLength={5}
                  type="password"
                  placeholder="Password"
                />
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                {/* <a
                  href="/login"
                  onClick={e =>handleClick(e)}
                  className="btn register login btn-primary text-uppercase"
                >
                  Login
                </a> */}

                <Button className="register login" variant="primary" type="submit">
                   Login
                </Button>
            </Form>
          </div>
        </div>
      </div>

      {/* <Form onSubmit={e => handleClick(e)}>
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
</Form> */}
    </div>
  );
};

export default Login;

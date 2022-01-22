

import React from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import './NavMenuComp.css'
const NavMenuComp = () => {
  return (

<Navbar bg="light" expand="lg" className="nav-menu-comp sticky-top">
  <Container fluid>
    <Navbar.Brand href="/"><strong>Best Shop</strong></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <NavDropdown title="Shop" id="shopScrollingDropdown">
          <NavDropdown.Item href="/products">Shop Category</NavDropdown.Item>
          <NavDropdown.Item href="/details/5">Product Details</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Pages" id="pagesScrollingDropdown">
          <NavDropdown.Item href="/login">Login</NavDropdown.Item>
          <NavDropdown.Item href="/details/5">Tracking</NavDropdown.Item>
          <NavDropdown.Item href="/details/5">Product Checkout</NavDropdown.Item>
          <NavDropdown.Item href="/details/5">Shopping Cart</NavDropdown.Item>
          <NavDropdown.Item href="/details/5">Confirmation</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Blog" id="blogScrollingDropdown">
          <NavDropdown.Item href="/login">Blog</NavDropdown.Item>
          <NavDropdown.Item href="/details/5">Simple Blog</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/contact" >
          Contact
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>)
};

export default NavMenuComp;

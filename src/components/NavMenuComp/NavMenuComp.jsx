import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout, selectUsername } from "../../redux/userSlice";
import "./NavMenuComp.css";
import { BsCart3 } from "react-icons/bs";
import { selectCart } from "../../redux/cartSlice";

const NavMenuComp = (props) => {
  const currentUser = useSelector(selectUsername);
  const userCart = useSelector(selectCart)
  const dispatch = useDispatch();
  const [items,setItems] = useState(0)
  useEffect(() => {
    setItems(Object.keys(userCart).length)
  },[userCart])

  return (
    <Navbar bg="light" expand="lg" className="nav-menu-comp sticky-top">
      <Container fluid className="nav-menu-container">
        <Navbar.Brand as={NavLink} to="/" className="logo-title">
          <strong>Best Shop</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="nav me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>

            <NavDropdown title="Shop" id="shopScrollingDropdown">
              <NavDropdown.Item as={NavLink} to="/products">
                Shop Category
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/details/5">
                Product Details
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Pages" id="pagesScrollingDropdown">
              <NavDropdown.Item as={NavLink} to="/login">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/tracking">
                Tracking
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/checkout">
                Product Checkout
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/cart">
                Shopping Cart
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Blog" id="blogScrollingDropdown">
              <NavDropdown.Item as={NavLink} to="/blog">
                Blog
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/blog/3">
                Simple Blog
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>

          <div className="cart-number">
            <BsCart3 className="cart-icon" />
        <div className="number">{ items}</div>
          </div>

          {/* form- avatar part */}
          <Form className="d-flex ">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <button className="me-2 btn btn-primary">Search</button>
            {/* <Button className="me-2" variant="outline-success">
              Search
            </Button> */}
          </Form>

          {currentUser !== "" ? (
            <a title="LOGOUT"
              style={{ textDecoration: "none" }}
              href=""
              onClick={()=>dispatch(logout())}
            >
              {" "}
              <Avatar>{currentUser[0].toUpperCase()}</Avatar>
            </a>
          ) : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenuComp;

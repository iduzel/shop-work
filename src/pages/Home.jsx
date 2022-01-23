import React from "react";
import {
  selectEmail,
  selectPassword,
  selectUsername,
} from "../redux/userSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavMenuComp from "../components/NavMenuComp/NavMenuComp.jsx";
import Footer from "../components/Footer/Footer";
import "./Home.css";

const Home = () => {
  const password = useSelector(selectPassword);
  const email = useSelector(selectEmail);
  const user = useSelector(selectUsername);

  return (
    <div className="home container-fluid">
      {/* <NavMenuComp username ={user}/> */}

      <h3> email = {email}</h3>

      <Link to="/login">Login form</Link>
      <br />
      <div className="row body-part">
        <div className="container body-part-text">
          <h4>Winter Fashion</h4>
          <h1 className="title">Fashion Collection 2019</h1>
          <Link className="btn btn-primary" to="/products">
            Shop Now
          </Link>
        </div>
      </div>

    
    </div>
  );
};

export default Home;

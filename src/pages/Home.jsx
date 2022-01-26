import React from "react";
import {
  selectEmail,
  selectPassword,
  selectUsername,
} from "../redux/userSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {FaShippingFast} from 'react-icons/fa'
import {RiFileList3Line} from 'react-icons/ri'
import {BsCreditCard2Back} from 'react-icons/bs'
import {AiOutlineFieldTime} from "react-icons/ai"

import "./Home.css";

const Home = () => {
 

  return (
    <div className="home container-fluid">
      {/* <NavMenuComp username ={user}/> */}

      {/* <h3> email = {email}</h3>

      <Link to="/login">Login form</Link>
      <br /> */}
      <div className="row body-part">
        <div className="container body-part-text">
          <h4>Winter Fashion</h4>
          <h1 className="title">Fashion Collection 2022</h1>
          <Link className="btn btn-primary" to="/products">
            Shop Now
          </Link>
        </div>
      </div>

      {/* FREE SHIPPING */}
      <section className="shipping  container">
        <div className="ship ship1">
          <span className="icon"><FaShippingFast /></span>
          <h2>Free Shipping</h2>
          <p>Divided face for bearing the divide unto seed winged divided light Forth.</p>
        </div>
        <div className="ship ship1">
          <span className="icon"><RiFileList3Line /></span>
          <h2>Free Shipping</h2>
          <p>Divided face for bearing the divide unto seed winged divided light Forth.</p>
        </div>
        <div className="ship ship1">
          <span className="icon"><BsCreditCard2Back /></span>
          <h2>Free Shipping</h2>
          <p>Divided face for bearing the divide unto seed winged divided light Forth.</p>
        </div>
        <div className="ship ship1">
          <span className="icon"><AiOutlineFieldTime /></span>
          <h2>Free Shipping</h2>
          <p>Divided face for bearing the divide unto seed winged divided light Forth.</p>
        </div>

      </section>

     {/*  5 IMAGES */}

     <section className="five-images mb-5 mt-5">
       <div className="five-img"><img src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" /></div>
       <div className="five-img"><img src="https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" /></div>
       <div className="five-img"><img src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" /></div>
       <div className="five-img"><img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" /></div>
       <div className="five-img"><img src="https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" /></div>
     </section>

    
    </div>
  );
};

export default Home;

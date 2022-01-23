import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'


import "./Footer.css";

function Footer() {
  const [categoryList, setCategoryList] = useState([]);

  const getCategoryList = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    const data = response?.data;
    setCategoryList(data);
  };

  useEffect(() => {
    getCategoryList();
    console.log(categoryList);
  }, []);

  return (
    <div className="footer mt-5 pt-4">
      

      <div className="container footer-top">
        <div className="footer-elements footer-category">
          <h4>Category</h4>
          <ul>
            {categoryList?.map((item, i) => (
              <li className="single-category" key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-elements footer-company">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>News</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-elements footer-address">
          <h4>Address</h4>
          <ul>
            <li>200. Green block, NewYork</li>
            <li>+1 163 987 02 56</li>
            <li>contact@demo.com</li>
          </ul>
        </div>

        <div className="footer-elements footer-newsletter">

          <h4>Newsletter</h4>         
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control border-3 border-primary"
                placeholder="Email Address"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <button className="button btn btn-primary" id="basic-addon2">
               Subscribe
              </button>

              
            </div>
            <div className="social-media">
                  <span><FaFacebookF className="sm"/></span>
                  <span><FaTwitter className="sm"/></span>
                  <span><FaInstagram className="sm"/></span>
              </div>
       
        </div>
      </div>
    </div>
  );
}

export default Footer;

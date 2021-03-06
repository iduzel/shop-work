
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Demo from "../Demo";
import { add2Cart } from "../redux/cartSlice";
import React, { useContext, useState } from "react";
import DataContext from "../redux/dataContext";
import "./CardDetail.css";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineHeart } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function CardDetails(params) {
  const { id } = useParams();
  const dispatch =  useDispatch();
  const cardContext = useContext(DataContext);
  const [count, setCount] = useState(1);
  const [currentItem, setCurrentItem] = useState(cardContext?.data?.filter((item) => item.id.toString() === id));
  

 const addClick= () =>{
     dispatch(add2Cart({id:id, quantity:count}))
    //dispatch(put2Cart({id:id, quantity:count}))
 }



  return (
    <div className="card-details container">
      <div className="left">
        <img className="img" alt="" src={currentItem[0].image} />
        <div className="bottom-images">

        </div>
      </div>

      <div className="text right">
        <h2 className="title">{currentItem[0].title}</h2>
        <h2 className="price">$ {currentItem[0].price}</h2>
        <p className="category">Category: {currentItem[0].category}</p>
        <p>Availability: In Stock</p>
        <p className="line"></p>
        <p className="description">{currentItem[0].description}</p>
        
         <div className="buttons-number">
          <span onClick={() => (count >1 && count <= 10)? setCount(count - 1):setCount(count)} className="button">
            {<AiOutlineMinus />}
          </span>
          <span>{count}</span>
        
          <span onClick={() => (count >=1 && count < 10)? setCount(count + 1):setCount(count)} className="button">
            {<AiOutlinePlus />}
          </span>
        </div> 
        <div className="addToCart mt-5 mb-5">
          <button onClick={()=>addClick({id:id, quantity:count})} className="cart-btn btn btn-primary">ADD TO CART</button>
          <div className="heart">
            {<AiOutlineHeart className="heart-icon" />}
          </div>
        </div>

        <div className="social-media">
          <span className="">
            <FaFacebookF className="sm fb" />
          </span>
          <span className="">
            <FaTwitter className="sm tw" />
          </span>
          <span className="">
            <FaInstagram className="sm in" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;

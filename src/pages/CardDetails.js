import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Demo from "../Demo";
import { add2Cart } from "../redux/cartSlice";
import DataContext from "../redux/dataContext";
import './CardDetail.css';

function CardDetails(params) {
  const { id } = useParams();
  const dispatch =  useDispatch();
  const cardContext = useContext(DataContext);
  const [qty, setQty] = useState(1);
  const [currentItem, setCurrentItem] = useState(cardContext?.data?.filter((item) => item.id.toString() === id));
  
 const add2CartClick= () =>{
    dispatch(add2Cart({id:id, quantity:qty}))
 }

  console.log(JSON.stringify(currentItem));

  return (
    <div className="card-details container">
      <div className="img left">
          <img className="img" src={currentItem[0]?.image} />
      </div>

      <div className="text right">
          <h2 className="title">{currentItem[0].title}</h2>
          <h2 className="price">$ {currentItem[0].price}</h2>
          <p className="category">Category:   {currentItem[0].category}</p>
          <p>Availability:  In Stock</p>
          <p className="line"></p>
          <p className="description">{currentItem[0].description}</p>
           <input className="m-4" type="number" value={qty} onChange={e=> setQty(e.target.value)} />
           <div className="buttons addCart">
               <button onClick={add2CartClick} className="btn btn-primary">Add to Cart</button>
           </div>
      </div>
    </div>
  );
}

export default CardDetails;

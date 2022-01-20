import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Demo from "../Demo";
import DataContext from "../redux/dataContext";
import './CardDetail.css';

function CardDetails(params) {
  const { id } = useParams();
  const cardContext = useContext(DataContext);
  const [currentItem, setCurrentItem] = useState(cardContext?.data?.filter((item) => item.id.toString() === id));

 

  console.log(JSON.stringify(currentItem));

  return (
    <div className="card-details container">
      <div className="img left">
          <img className="img" src={currentItem[0].image} />
      </div>

      <div className="text right">
          <h2 className="title">{currentItem[0].title}</h2>
          <h2 className="price">$ {currentItem[0].price}</h2>
          <p className="category">Category:   {currentItem[0].category}</p>
          <p>Availability:  In Stock</p>
          <p className="line"></p>
          <p className="description">{currentItem[0].description}</p>
           <div className="buttons addCart">
               
           </div>
      </div>
    </div>
  );
}

export default CardDetails;

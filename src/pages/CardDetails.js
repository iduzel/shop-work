import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import DataContext from '../redux/dataContext';

function CardDetails(params) {

    const {id}= useParams()
    const cardContext = useContext(DataContext)
    const [currentItem, setCurrentItem] = useState(null);

    useEffect(()=>{
     if(id!== undefined){
      setCurrentItem(cardContext?.data?.filter(item => item.id.toString() ===id))
     }
      
      
    },[id])
  return <div>
    <h1>{id}</h1>

    <p>{JSON.stringify(currentItem)}</p>

  </div>;
}

export default CardDetails;

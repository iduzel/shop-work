import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import DataContext from '../redux/dataContext';

function CardDetails(params) {

    const {id}= useParams()
    const cardContext = useContext(DataContext)
    const [currentItem, setCurrentItem] = useState(null);

    const renderDetail = () =>(
      <div className="details-wrapper">
        <img src={currentItem[0]?.image} alt={currentItem[0].description} />
        <div className="details-right">
          <h1>{currentItem[0]?.title}</h1>
        </div>
      </div>
    )
    useEffect(()=>{
     if(id!== undefined){
      setCurrentItem(cardContext?.data?.filter(item => item.id.toString() ===id))
     // renderDetail();
     }
      
      
    },[id,currentItem])
  return <div>
    <h1>{id}</h1>

    {/* <p>{JSON.stringify(currentItem!= null && currentItem)}</p> */}
    <div className="details-wrapper">
        <img src={currentItem!= null && currentItem[0]?.image} alt={currentItem!= null && currentItem[0].description} />
        <div className="details-right">
          <h1>{currentItem!= null && currentItem[0]?.title}</h1>
        </div>
      </div>
    
  </div>;
}

export default CardDetails;

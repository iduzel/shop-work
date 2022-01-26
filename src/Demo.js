
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { minusCounter, plusCounter, selectCounter,setCounter } from './redux/demoSlice';

function Demo() {

  const number = useSelector(selectCounter)
  const [inp, setInp] = useState()

  const dispatch = useDispatch();

  

  const handlePlus = () => {
    dispatch(plusCounter())
  }

  const handleMinus = () => {
    dispatch(minusCounter())
  }

 

  return <div>
     <h1> Counter : {number}</h1>
     
     <button onClick={handlePlus} className="btn btn-primary me-5 mb-5">increase</button>
     <button onClick={handleMinus} className="btn btn-primary mb-5">decrease</button> <br/>

     <input type="number" onChange={(e) => dispatch(setCounter(Number(e.target.value)))}/>
      <h4>INPUT : {inp}</h4>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>

      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>TEST</p>

  </div>;
}

export default Demo;

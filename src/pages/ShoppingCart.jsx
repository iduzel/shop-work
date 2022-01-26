
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartComp from '../components/CartComp/CartComp';
import { selectProducts, setProducts } from '../redux/cartSlice';
import DataContext from '../redux/dataContext';
import { selectUsername } from '../redux/userSlice';

const ShoppingCart = () => {
    const data = useContext(DataContext)
    const dispatch = useDispatch();
    const tmp = useSelector(selectProducts)
    const username = useSelector(selectUsername)
 
  return <div className='shopping-cart'>
      <h2 className="m-5">{username==""? 'Noname':username}'s Cart</h2>
      <CartComp />
      
  </div>;
};

export default ShoppingCart;

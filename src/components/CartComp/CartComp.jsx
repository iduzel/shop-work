
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCart, selectProducts } from '../../redux/cartSlice';
import './CartComp.css'

const CartComp = () => {
    const products = useSelector(selectProducts)
    const cart = useSelector(selectCart)
    const renderTable = (item)=>{
        let qty= cart[item]
        let product = products.filter(v => v.id == item)
        console.log(qty,product)
        return(<tr>
            <td>
                <img height={100} width={100} src={product[0].image} alt={product[0].title} />
            </td>
            <td className='text-center align-middle'>
                {product[0].title}
                </td>
            <td className='text-center align-middle'><strong>{product[0].price}</strong></td>
            <td className='text-center align-middle'>{qty}</td>
            <td className='text-center align-middle'>{product[0].price *qty}</td>
        </tr>)
    }
   
  return <div className='cart-comp'>
      
      <br/>
        <div className="container">
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(cart).map(item =>(
                            renderTable(item)
                         ))}
                    </tbody>
                </table>
            </div>
        </div>


      
  </div>;
};

export default CartComp;

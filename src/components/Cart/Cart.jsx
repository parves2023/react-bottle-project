import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


function Cart({ selectedCart, handleRemoveCart }) {

  // const [cartImages, setCartImages] = useState([]);
  console.log("selea",selectedCart);
  
  // // Update cartImages whenever selectedCart changes
  // useEffect(() => {
  //   setCartImages([...selectedCart]);
  // }, [selectedCart]);


  return (
    <div className='flex gap-4 py-5 justify-center'>
      {selectedCart && selectedCart.map((bottle, index) => (
        <div key={index}>
          <img className='size-16' src={bottle.image} alt="bottle" />

          <button onClick={()=>handleRemoveCart(bottle.id)} >remove</button>
        </div>
      ))}
    </div>
  );
};
Cart.propTypes ={
  selectedCart: PropTypes.array.isRequired,
  handleRemoveCart: PropTypes.func.isRequired
}

export default Cart;
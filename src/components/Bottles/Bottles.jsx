import React, { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import { addToLS, getStoredCart } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";
import { revomeFromLS } from '../../utilities/localStorage';

function Bottles() {
  const [bottles, setBottles] = useState([]);
  const [selectedCart, setselectedCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  useEffect(() => {
    if (bottles.length > 0) {
      const storedCart = getStoredCart();
      const savedCart = [];
      for (const id of storedCart) {
        const bottle = bottles.find(bottle => bottle.id == id);
        if (bottle) {
          savedCart.push(bottle)
        }
      }
      setselectedCart(savedCart);
    }
  }, [bottles]);

  const addToCart = (thisBottle) => {
    const allselectedCart = [...selectedCart, bottles];
    setselectedCart(allselectedCart);
    addToLS(thisBottle.id);
  };

  const handleRemoveCart = (id)=>{
    const remainingCart = selectedCart.filter((bottle)=>bottle.id !== id);
    setselectedCart(remainingCart);
    revomeFromLS(id);
  }

  return (
    <div className="mt-7">
      <p className="text-4xl font-bold text-gray-500 text-center">
        total bottle : {bottles.length}
      </p>
      <Cart selectedCart={selectedCart} handleRemoveCart={handleRemoveCart} />
      <p className="text-4xl font-bold text-gray-500 text-center">
        Added to Cart {selectedCart.length}
      </p>
      <div className="grid grid-cols-4 gap-5 mt-5 ">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Bottles;

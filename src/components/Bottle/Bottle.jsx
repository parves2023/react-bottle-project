import React from "react";

function Bottle({ bottle,addToCart }) {
  const {name,image,price} =bottle;
  return (
    <div className="grid gap-3 col-span-1 border border-gray-300 text-center p-5 rounded-lg">
     
      <div>{bottle && <p className="text-3xl font-bold">{name}</p>}</div>
      <div>{bottle && <img className="w-[200px] h-[200px] mx-auto object-cover" src={image}></img>}</div>
      <div>{bottle && <p className="text-3xl font-bold underline">Price: {price} tk</p>}</div>
      <button onClick={()=> addToCart(bottle)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
    </div>
  );
}

export default Bottle;

import React from "react";
function CartItem({ product, removeFromCart }) {
    return (
      <div className="flex justify-between bg-white p-4 mb-2 shadow rounded-lg">
        <span>{product.name} - ${product.price}</span>
        <button
          onClick={removeFromCart}
          className="text-red-500 hover:underline"
        >
          Remove
        </button>
      </div>
    );
  }
  
  export default CartItem;
  
import React from "react";
import CartItem from "./CartItem";

function Cart({ cart, removeFromCart }) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((product, index) => (
          <CartItem key={index} product={product} removeFromCart={() => removeFromCart(index)} />
        ))
      )}
    </div>
  );
}

export default Cart;

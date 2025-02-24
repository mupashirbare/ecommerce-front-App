import React from "react";
function ProductCard({ product, addToCart }) {
    return (
      <div className="bg-white p-4 shadow rounded-lg">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
        <h2 className="text-lg font-bold mt-2">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-2 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700"
        >
          Add to Cart
        </button>
      </div>
    );
  }
  
  export default ProductCard;
  
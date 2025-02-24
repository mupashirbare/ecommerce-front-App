import React from "react";
import ProductCard from "./ProductCard";
import productsData from "../data/products";

function ProductList({ addToCart }) {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {productsData.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;

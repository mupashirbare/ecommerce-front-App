import React from "react";  // ✅ Import React
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Navbar({ cartCount }) {
  return (
    <nav className="bg-teal-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-lg font-bold">E-Commerce</Link>
      <Link to="/cart" className="relative">
        <FaShoppingCart size={24} />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-2 py-1">
            {cartCount}
          </span>
        )}
      </Link>
    </nav>
  );
}

export default Navbar;

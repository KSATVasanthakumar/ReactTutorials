import React, { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router";
import { CartContext } from "../Features/ContextProvider";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className="d-flex justify-content-between bg-primary py-3 px-5 text-white">
      <Link className="navbar-brand fs-4 fw-bolder" to="/">
        Shop
      </Link>
      <Link
        className="navbar-link fs-5 text-white position-relative"
        to="/cart"
      >
        <BsCart />

        {totalQuantity > 0 && (
          <span className="position-absolute top-0 start-100  translate-end badge rounded-pill bg-danger">
            {totalQuantity}
          </span>
        )}
      </Link>
    </div>
  );
};

export default Navbar;

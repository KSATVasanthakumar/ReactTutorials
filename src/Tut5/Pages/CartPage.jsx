import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";
import CartProduct from "../Components/CartProduct";
import { totalItem, totalPrice } from "../Features/CartReducers";

const CartPage = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-8">
          {cart.map((p) => (
            <CartProduct product={p} />
          ))}
        </div>
        <div className="col-4 ">
          <div className="bg-secondary p-4 text-white">
            <h4>Total Items:{totalItem(cart)}</h4>
            <h4>Total Price: ${totalPrice(cart)}</h4>
            <button className="btn btn-warning">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

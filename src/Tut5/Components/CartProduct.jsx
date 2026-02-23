import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

const CartProduct = ({ product }) => {
  const { cart, dispatch } = useContext(CartContext);
  console.log("products", product);

  const Increase = (id) => {
    const Index = cart.findIndex((p) => p.id === id);

    if (cart[Index].quantity < 10) {
      dispatch({ type: "INCREASE", id });
    }
  };

  const Decrease = (id) => {
    const Index = cart.findIndex((p) => p.id === id);

    if (cart[Index].quantity > 1) {
      dispatch({ type: "DECREASE", id });
    }
  };

  return (
    <div className="d-flex border mb-3">
      <img src={product.thumbnail} />
      <div className="detail">
        <h4>{product.title}</h4>
        <h3>${product.price}</h3>
        <div className="buttons">
          <button
            className="rounded-circle px-2"
            onClick={() => Decrease(product.id)}
          >
            <b>-</b>
          </button>
          <button className="rounded">{product.quantity}</button>
          <button
            className="rounded-circle px-2"
            onClick={() => Increase(product.id)}
          >
            <b>+</b>
          </button>
        </div>
        <button
          className="btn btn-danger"
          onClick={() => dispatch({ type: "REMOVECART", id: product.id })}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct;

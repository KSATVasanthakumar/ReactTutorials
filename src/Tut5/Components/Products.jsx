import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

const Products = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  return (
    <div className="col">
      <div className="card h-100">
        <img src={product.thumbnail} className="card-img-top h-75" alt="..." />
        <div className="card-body">
          <h5 className="card-title fs-6 fw-bold">{product.title}</h5>
          <h5 className="card-title fs-6 fw-light">${product.price}</h5>
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "ADDTOCART", product: product })}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;

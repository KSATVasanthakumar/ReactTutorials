import axios from "axios";
import React, { useEffect, useState } from "react";
import Products from "../Components/Products";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const url = "https://dummyjson.com/products";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(url);
        setProducts(response.data?.products);
      } catch (error) {}
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <Products key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;

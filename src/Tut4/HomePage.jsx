import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import axios from "axios";
import { FaCartPlus } from "react-icons/fa";

function HomePage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://dummyjson.com/products");
      console.log("reponse", response.data.products);
      setProducts(response.data.products);
    };
    fetchData();
  }, []);

  const handleAddtoCart = (item) => {
    console.log(item);
    alert(`Clicked ${item}`);
  };
  return (
    <div className="py-20">
      <div>HomePage</div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
        {products?.map((item) => (
          <li
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            {/* Image Section */}
            <div className="relative h-60 overflow-hidden rounded-t-xl">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* Price Overlay Header */}
              <div className="absolute top-0 left-0 w-full bg-black/60 text-white px-4 py-2 flex justify-between items-center">
                <span className="text-sm font-semibold">₹{item.price}</span>

                <button
                  onClick={() => handleAddtoCart(item)}
                  className="hover:scale-110 transition"
                >
                  <FaCartPlus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-sm font-medium p-4 text-center">
              {item.title}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;

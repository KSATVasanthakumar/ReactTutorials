import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data.products);
        setData(response.data.products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url]);
  return { data };
};

export default useFetch;

import React from "react";
import useFetch from "../Components/useFetch";

const HomePages = () => {
  const url = "https://dummyjson.com/products";
  const { data } = useFetch(url);

  return (
    <>
      {data &&
        data.map((d) => (
          <h3 key={d.id}>
            {d.id} - {d.title}
          </h3>
        ))}
    </>
  );
};

export default HomePages;

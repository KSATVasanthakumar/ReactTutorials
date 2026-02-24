import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import ProductsPage from "./Pages/ProductsPage";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./Components/Layout";
import CartPage from "./Pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <ProductsPage /> },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./Tut7/Pages/HomePage";
import UserPage from "./Tut7/Pages/UserPage";
import Layout from "./Tut7/Components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/users",
        element: <UserPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;

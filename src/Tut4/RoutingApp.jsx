import { useState } from "react";
import "./App.css";
// import UseEffectTut1 from "./Tut1/useEffectTut1";
// import Reducervsstate from "./Tut2/reducervsstate";
import ToolText from "../Tut3/ToolText";
import Loginpage from "./Loginpage";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import SettingsPage from "./SettingsPage";
import AboutPage from "./AboutPage";
import Layout from "./Components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Loginpage /> },
      {
        path: "/Home",
        element: <HomePage />,
      },
      {
        path: "/Settings",
        element: <SettingsPage />,
      },
      {
        path: "/About",
        element: <AboutPage />,
      },
      {
        path: "/Profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;

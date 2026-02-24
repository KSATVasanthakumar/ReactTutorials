import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import ContextProvider from "./Tut5/Features/ContextProvider.jsx";
import { Provider } from "react-redux";
import store from "./Tut7/stores/store";
createRoot(document.getElementById("root")).render(
  // <ContextProvider>
  //   <App />
  // </ContextProvider>
  <Provider store={store}>
    <App />
  </Provider>
);

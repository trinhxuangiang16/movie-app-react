import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import homeSlice from "./features/home/redux/homeSlice.js";
import { configureStore } from "@reduxjs/toolkit";
import signInSlice from "./features/signIn/redux/signInSlice.js";

const reduxStore = configureStore({
  reducer: {
    homeSlice: homeSlice,
    signInSlice: signInSlice,
  },
});

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </BrowserRouter>
);

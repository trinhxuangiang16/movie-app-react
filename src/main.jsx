import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// import { Provider as ReduxProvider } from 'react-redux'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <ReduxProvider store={store}> */}
    <App />
    {/* </ReduxProvider> */}
  </BrowserRouter>
);

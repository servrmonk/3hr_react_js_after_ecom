import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

import ProdContextProvider from './components/ProdContext.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProdContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
   </ProdContextProvider>
);
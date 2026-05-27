import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>

    <App />

    <ToastContainer
      position="top-right"
      autoClose={2000}
      newestOnTop={true}
      pauseOnHover={false}
      closeOnClick
      theme="dark"
    />

  </>
);
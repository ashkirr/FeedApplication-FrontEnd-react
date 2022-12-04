import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { BrowserRouter as Router } from "react-router-dom";
import AppContextProvider from "./context/applicationContext";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextProvider>
    <Router>
        <App />
      </Router>
    <Toaster />
  </AppContextProvider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./containers/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
//This is a comment
root.render(
  <React.StrictMode>
    <div className="main-body">
      <h1 className="title">Robo-Friends</h1>
      <div className="card-list">
        <App />
      </div>
    </div>
  </React.StrictMode>
);

reportWebVitals();

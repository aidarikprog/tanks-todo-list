import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./components/screen/Home/Home";
import './components/styles/main.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import MyRouter from "./routes";
import {RouterProvider} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={MyRouter} />
);


import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routers from "./routers/routers";
import AuthProvides from "./providers/AuthProvides";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvides>
      <RouterProvider router={routers}></RouterProvider>
    </AuthProvides>
  </React.StrictMode>
);

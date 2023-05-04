import React from "react";
// import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Layout from "./components/layout/Layout";
import AboutUs from "./AboutUs";
import "./index.scss";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<App />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Route>
  )
);

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

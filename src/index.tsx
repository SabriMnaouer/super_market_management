import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { ProductCard } from "./components/product/ProductCard";
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";

const SelectedProductCard = () => {
  const location = useLocation();
  const product = location.state?.product;

  return (
    <ProductCard
      id={product?.id || 1}
      label={product?.label || ""}
      quantity={product?.quantity || 1}
      price={product?.price || 1}
      category={product?.category || ""}
      removeElement={() => console.log("")}
      image={product?.image || ""}
    />
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/card",
    element: <SelectedProductCard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

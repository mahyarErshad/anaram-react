import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import PageLayout from "./Pages/PageLayout/PageLayout";
import MainPageWrapper from "./Pages/MainPage/MainPageWrapper/MainPageWrapper";
import ProductsPage from "./Pages/ProductsPage/ProductsPageContainer/ProductsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route index element={<MainPageWrapper />} />
      <Route path="/products" element={<ProductsPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

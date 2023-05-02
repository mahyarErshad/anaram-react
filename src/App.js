import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import PageLayout from "./Pages/PageLayout/PageLayout";
import MainPageWrapper from "./Pages/MainPage/MainPageWrapper/MainPageWrapper";
import ProductsPage from "./Pages/ProductsPage/ProductsPageContainer/ProductsPage";
import SingleProductContainer from "./Pages/SingleProduct/SingleProductContainer/SingleProductContainer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route index element={<MainPageWrapper />} />
      <Route path="products">
        <Route index element={<ProductsPage />} />
        <Route path="product/:id" element={<SingleProductContainer />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

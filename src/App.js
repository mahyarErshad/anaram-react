import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import PageLayout from "./Pages/PageLayout/PageLayout";
import MainPageWrapper from "./Pages/MainPage/MainPageWrapper/MainPageWrapper";
import ProductsPage from "./Pages/ProductsPage/ProductsPageContainer/ProductsPage";
import SingleProductPage from "./Pages/SingleProduct/SingleProductPage/SingleProductPage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route index element={<MainPageWrapper />} />
      <Route path="products">
        <Route index element={<ProductsPage />} />
        <Route path="product/:id" element={<SingleProductPage />} />
      </Route>
      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<ContactUs />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
